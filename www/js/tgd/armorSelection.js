tgd.calculateBestSets = function(items, rollType) {
    var combos = _.map(items, function(selection) {
        var choices = selection[rollType] ? [selection] : selection;
        var x = _.flatten(_.map(choices, function(item) {
            return _.map(item[rollType], function(roll) {
                var itemClone = _.clone(item);
                itemClone.activeRoll = roll;
                return itemClone;
            });
        }));
        return x;
    });
    combos = tgd.cartesianProductOf(combos);
    var scoredCombos = _.map(combos, function(items) {
        var tmp = tgd.joinStats(items);
        delete tmp["bonusOn"];
        var sortedKeys = _.pluck(tgd.DestinyArmorStats, 'statName');
        var statTiers = _.map(sortedKeys, function(name) {
            return name.substring(0, 3) + " T" + Math.floor(tmp[name] / tgd.DestinySkillTier);
        }).join("<br>");
        var combo = {
            set: items,
            id: Math.floor(tgd.hashCode(statTiers)),
            stats: tmp,
            statValues: _.map(sortedKeys, function(name) {
                return tmp[name];
            }).join("<br>"),
			statTierValues: _.map(sortedKeys, function(name) {
    	        return Math.floor(tmp[name] / tgd.DestinySkillTier);
	        }).join("/"),
            statTiers: statTiers,
            score: parseFloat((tgd.sum(_.map(tmp, function(value, key) {
                var result = Math.floor(value / tgd.DestinySkillTier);
                return result > 5 ? 5 : result;
            })) + (tgd.sum(_.values(tmp)) / 1000)).toFixed(3)),
            perks: _.filter(
                _.flatten(
                    _.map(items, function(item) {
                        return _.map(item.perks, function(perk) {
                            perk.bucketType = item.bucketType;
                            return perk;
                        });
                    })
                ),
                function(perk) {
                    return (perk.active === true && perk.bucketType != "Class Items" && _.intersection(tgd.weaponTypes, perk.name.split(" ")).length > 0) || (perk.active === true && perk.bucketType == "Helmet" && perk.isExclusive == -1 && perk.isInherent === false);
                }
            )
        };
        combo.similarityScore = _.values(_.countBy(_.map(_.filter(combo.perks, function(perk) {
            return perk.bucketType != "Class Items" && perk.bucketType != "Helmet";
        }), function(perk) {
            return _.intersection(tgd.weaponTypes, perk.name.split(" "))[0];
        })));
        combo.similarityScore = (3 / combo.similarityScore.length) + tgd.sum(combo.similarityScore);
        return combo;
    });
    var highestScore = Math.floor(_.max(_.pluck(scoredCombos, 'score')));
    //console.log("highestScore", highestScore);
    var bestSets = _.uniq(_.filter(scoredCombos, function(combo) {
        return combo.score >= highestScore;
    }), false, function(combo) {
        return combo.statTiers;
    });
    return bestSets;
};

tgd.armorSelection = function(type, groups, character) {
    var self = this;

    self.character = character;
    self.groups = groups;
    self.type = type;

    //self.loading = ko.observable(true);
    //console.log("Calculating most points combo");
    self.foundFirstSet = ko.observableArray();
    self.armorGroups = ko.observableArray();

    var armorGroups = _.values(groups),
        rollType = (type == "Custom") ? "rolls" : "futureRolls",
        valueType = type == "Custom" ? "All" : "MaxLightCSP",
        mostPoints = _.map(armorGroups, function(items) {
            return _.first(_.sortBy(items, function(item) {
                return item.getValue(valueType) * -1;
            }), 2);
        });
    //console.log("mostPoints", mostPoints);
    var combos = _.sortBy(_.filter(tgd.calculateBestSets(mostPoints, rollType), function(combo) {
        return (type == "MaxLight" && Math.floor(combo.score) >= tgd.maxTierPossible) || type == "Custom";
    }), 'score');
    if (combos.length > 0) {
        //console.log("Most points combo used");
        self.foundFirstSet(combos[0].set);
    } else {
        var helmets = armorGroups.shift();
        //console.log("Analyzing " + (helmets.length - 1) + " helmets", _.pluck(helmets,'description'));
        _.each(helmets, function(helmet, index) {
            if (self.foundFirstSet().length == 0) {
                var set = _.map(_.clone(armorGroups), function(items) {
                    return _.first(_.sortBy(items, function(item) {
                        return item.getValue(valueType) * -1;
                    }), 4);
                });
                set.unshift([helmet]);
                console.log(helmet.description, "considering helmet", set);
                console.time("calculateBestSets " + helmet.description);
                var combos = _.filter(tgd.calculateBestSets(set, rollType), function(combo) {
                    return Math.floor(combo.score) >= tgd.maxTierPossible;
                });
                console.log("Analyzed helmet " + index + " out of " + (helmets.length - 1));
                console.timeEnd("calculateBestSets " + helmet.description);
                console.log(combos);
                if (combos.length > 0) {
                    console.log("Found a combo " + combos[0].statTiers);
                    self.foundFirstSet(combos[0].set);
                }
            }
        });
    }
    //self.loading(false);

    self.selectedItems = ko.pureComputed(function() {
        return _.map(self.armorGroups(), function(group) {
            return group.selectedItem() || group.items;
        });
    });

    self.bestSets = ko.pureComputed(function() {
        var bestSets = tgd.calculateBestSets(self.selectedItems(), rollType);
        return bestSets;
    });

    self.firstSet = ko.pureComputed(function() {
        return _.first(self.bestSets());
    });

    self.maxSets = ko.pureComputed(function() {
        return _.filter(self.bestSets(), function(combo) {
            return (type == "MaxLight" && Math.floor(combo.score) >= tgd.maxTierPossible) || type == "Custom";
        });
    });

    //console.log("selected items: ", _.pluck(self.foundFirstSet(), 'description'));
    self.armorGroups(_.sortBy(_.map(groups, function(items, bucketType) {
        var selectedId = self.foundFirstSet().length > 0 ? _.findWhere(self.foundFirstSet(), {
            bucketType: bucketType
        })._id : "";
        return new tgd.armorGroup(bucketType, items, self.armorGroups, self.maxSets, selectedId, type);
    }), function(armorGroup) {
        return tgd.DestinyArmorPieces.indexOf(armorGroup.bucketType);
    }));

    self.unleveledBucketTypes = ko.pureComputed(function() {
        return _.pluck(_.filter(self.selectedItems(), function(item) {
            return item && item.getValue && item.getValue("Light") != tgd.DestinyLightCap;
        }), 'bucketType').join(", ");
    });
    self.saveSelectedCombo = function(combo) {
        if (confirm("Are you sure you want to save this loadout? Doing so will close this pop up dialog")) {
            app.createLoadout();
			var loaderType = _.intersection(tgd.weaponTypes,_.flatten(_.map(_.pluck(_.findWhere(combo.set,{ bucketType: "Gauntlet" }).perks,'name'), function(name){ return name.split(" "); })));
            var loadoutName = "T" + Math.floor(combo.score) + " " + combo.statTierValues + " " + _.findWhere(combo.set,{ bucketType: "Helmet" }).character.classType() + " " + (loaderType.length > 0 ? loaderType[0] : "");
            app.activeLoadout().name(loadoutName);
            _.each(combo.set, function(item) {
                app.activeLoadout().addUniqueItem({
                    id: item._id,
                    bucketType: item.bucketType,
                    doEquip: true,
                    bonusOn: item.activeRoll.bonusOn
                });
            });
            self.dialog.close();
        }
    }
    self.equipSelectedCombo = function(combo) {
        if (confirm("Are you sure you want to equip this loadout? Doing so will close this pop up dialog")) {
            self.character.equipAction("Max Light Max Tier", combo.score, combo.set);
            self.dialog.close();
        }
    }
    self.setDialog = function(dialog) {
        self.dialog = dialog.modal;
    }
}

tgd.armorGroup = function(bucketType, items, groups, bestSets, instanceId, type) {
    var self = this;

    self.bucketType = bucketType;

    self.selectedItem = ko.observable();

    self.items = _.sortBy(_.map(items, function(item, index) {
        return new tgd.armorItem(item, self.selectedItem, groups, bestSets, type);
    }), function(item) {
        return item.getValue("All") * -1;
    });

    if (instanceId == "") {
        self.selectedItem(self.items[0]);
    } else {
        self.selectedItem(_.findWhere(self.items, {
            _id: instanceId
        }));
    }
}

tgd.armorItem = function(item, selectedItem, groups, bestSets, type) {
    var self = this
    _.extend(self, item);
    var isSelected = ko.pureComputed(function() {
        return self == selectedItem();
    });
    var isDisabled = ko.pureComputed(function() {
        if (type == "MaxLight") {
            /* this filter will get an array of selectedItems, concat self, calculate the best statTiers given all the futureRolls available, determine if that fits the maxTierPointsPossible */
            var items = _.map(groups(), function(group) {
                return group.bucketType == self.bucketType ? self : (group.selectedItem() ? group.selectedItem() : group.items);
            });
            var validSets = tgd.calculateBestSets(items, 'futureRolls');
            return _.filter(validSets, function(combo) {
                return Math.floor(combo.score) >= tgd.maxTierPossible;
            }).length == 0;
        } else {
            return false;
        }
    });
    var isInBestSets = ko.pureComputed(function() {
        return _.filter(bestSets(), function(combo) {
            return _.pluck(combo.set, '_id').indexOf(self._id) > -1;
        }).length > 0;
    });
    /* if the item is in bestSets then color it blue to denote its the found item */
    self.css = ko.pureComputed(function() {
        /* allowable combinations: green, yellow, red, blue */
        var css = "";
        if (isSelected()) {
            css = "selected";
        } else if (!isSelected() && isInBestSets()) {
            css = "candidate";
        } else if (isDisabled()) {
            css = "disabled";
        } else {
            css = "not-selected";
        }
        return css;
    });
    this.select = function() {
        if (isDisabled()) {
            BootstrapDialog.alert("This item cannot be selected to maintain the max tier: " + tgd.maxTierPossible);
        } else {
            if (selectedItem() == self) {
                selectedItem(null);
            } else {
                selectedItem(self);
            }
        }
    }
}