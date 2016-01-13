window.ua = navigator.userAgent;
window.isNWJS = (typeof require != "undefined");
window.isChrome = /Chrome/.test(ua) && /Google Inc/.test(navigator.vendor) && typeof chrome != "undefined";
window.isFirefox = (/firefox/i.test(ua));
window.isIOS = (/ios|iphone|ipod|ipad/i.test(ua));
window.isiPad = (/ipad/i.test(ua));
window.isAndroid = (/android/i.test(ua));
window.isWindowsPhone = (/iemobile/i.test(ua));
window.isMobile = (window.isIOS || window.isAndroid || window.isWindowsPhone);
window.isKindle = /Kindle/i.test(ua) || /Silk/i.test(ua) || /KFTT/i.test(ua) || /KFOT/i.test(ua) || /KFJWA/i.test(ua) || /KFJWI/i.test(ua) || /KFSOWI/i.test(ua) || /KFTHWA/i.test(ua) || /KFTHWI/i.test(ua) || /KFAPWA/i.test(ua) || /KFAPWI/i.test(ua);
window.isStaticBrowser = location.protocol.indexOf("http") > -1 && location.href.indexOf("towerghostfordestiny.com/firefox") == -1;
if (window.isStaticBrowser) {
    window.isMobile = window.isWindowsPhone = window.isAndroid = window.isIOS = window.isFirefox = window.isChrome = window.isNWJS = false;
}
if (typeof window.tgd == "undefined") window.tgd = {};
if (typeof tgd.dataDir == "undefined") tgd.dataDir = "data";
if (isWindowsPhone) {
    window.requestFileSystem = function() {};
}
tgd.localLogging = location.href.indexOf("debug") > -1;
tgd.localLog = function(msg) {
    if (tgd.localLogging) {
        console.log(msg);
    }
};
//TODO find all the remote http variables and have them use a single variable
tgd.remoteServer = "https://towerghostfordestiny.com";
tgd.remoteImagePath = tgd.remoteServer + "/www/";
tgd.bootstrapGridColumns = 24;
tgd.autoTransferStacks = false;
tgd.DestinySkillCap = 300;
tgd.DestinySkillTier = 60;
tgd.DestinyY1Cap = 170;
tgd.activeElement = null;
tgd.DestinyUnwantedNodes = ["Infuse", "Upgrade Damage", "Upgrade Defense", "Arc Damage", "Void Damage", "Solar Damage", "Kinetic Damage", "Ascend", "Reforge Ready", "Twist Fate", "Scabbard", "Increase Intellect", "Increase Strength", "Increase Discipline"];
tgd.DestinyGeneralItems = {
    "GlimmerConsumables": [3632619276, 269776572, 2904517731, 1932910919], //Network Keys, Axiomatic Beads, House Banners, Silken Codex
    "Synths": [211861343, 928169143, 2180254632],
    "Parts": [1898539128],
    "Motes": [937555249],
    "Coins": [417308266, 1738186005, 605475555], //Passage Coins, Strange Coins, 3 of Coins
    "Runes": [1565194903, 2620224196, 1556533319, 1314217221, 2906158273], //Argonarch Rune, Stolen Rune, Wormsinger Rune, Wormfeeder Rune, Antiquated Rune can be xfered
    "Planetary Resources": [2254123540, 2882093969, 3164836592, 3242866270, 1797491610], //Spirit Bloom, Spin Metal, Wormspore, Relic Iron, Helium Filaments
    "Glimmer Consumables": [3446457162, 1043138475, 1772853454, 3783295803], //Resupply Codes, Black Wax Idol, Blue Polyphage, Ether Seeds
    "Telemetries": [4159731660, 729893597, 3371478409, 927802664, 4141501356, 323927027, 3036931873, 2610276738, 705234570, 1485751393, 2929837733, 846470091]
};
tgd.lostItemsHelper = [420519466, 1322081400, 2551875383, 398517733, 583698483, 937555249];
tgd.invisibleItemsHelper = [2910404660, 2537120989];
//This is a list of items not indexed by DestinyDB
tgd.itemsNotIndexed = [];
tgd.DestinyGeneralSearches = ["Synths", "Parts", "Motes", "Coins", "Runes", "Planetary Resources", "Glimmer Consumables", "Telemetries", "Engram"];
tgd.DestinyArmorPieces = ["Helmet", "Gauntlet", "Chest", "Boots", "Class Items", "Artifact", "Ghost"];
tgd.DestinyArmorStats = [144602215, 1735777505, 4244567218];
tgd.DestinyWeaponPieces = ["Primary", "Special", "Heavy"];
tgd.DestinyGeneralExceptions = ["Ghost", "Artifact"];
tgd.DestinyNonUniqueBuckets = ["Consumables", "Materials"];
tgd.DestinyFiveRowBuckets = ["Materials", "Consumables", "Invisible", "Messages", "Lost"];
tgd.DestinyLayout = [{
    name: "Weapons",
    array: 'weapons',
    counts: [72, 30],
    bucketTypes: tgd.DestinyWeaponPieces,
    extras: [],
    view: 1,
    headerText: 'inventory_weapons'
}, {
    name: "Armor",
    array: 'armor',
    counts: [72, 50],
    bucketTypes: tgd.DestinyArmorPieces,
    extras: tgd.DestinyGeneralExceptions,
    view: 2,
    headerText: 'inventory_armor'
}, {
    name: "Sub Classes",
    array: '',
    counts: [0, 0],
    bucketTypes: ['Subclasses'],
    extras: [],
    view: 3,
    headerText: 'inventory_subclasses'
}, {
    name: "General",
    array: 'general',
    counts: [36, 80],
    bucketTypes: ['Consumables', 'Materials', 'Shader', 'Emblem', 'Ship', 'Sparrow', 'Horn', 'Emote'],
    extras: tgd.DestinyGeneralExceptions,
    view: 3,
    headerText: 'inventory_general'
}, {
    name: "Post Master",
    array: 'postmaster',
    counts: [60, 60],
    bucketTypes: ['Messages', 'Invisible', 'Lost Items', 'Bounties', 'Quests', 'Mission'],
    extras: [],
    view: 3,
    headerText: 'inventory_postmaster'
}];
tgd.DestinyViews = {
    "0": "All",
    "1": "Weapons",
    "2": "Armor",
    "3": "General"
};
tgd.DestinyGender = {
    "0": "Male",
    "1": "Female"
};
tgd.DestinyClass = {
    "0": "Titan",
    "1": "Hunter",
    "2": "Warlock"
};
tgd.DestinyClassNames = {};
Object.keys(tgd.DestinyClass).forEach(function(key, index) {
    tgd.DestinyClassNames[tgd.DestinyClass[index]] = key;
});
tgd.DestinyDamageTypes = {
    "0": "None",
    "1": "Kinetic",
    "2": "Arc",
    "3": "Solar",
    "4": "Void",
    "5": "Raid"
};
tgd.DestinyBucketTypes = {
    "1498876634": "Primary",
    "2465295065": "Special",
    "953998645": "Heavy",
    "3448274439": "Helmet",
    "3551918588": "Gauntlet",
    "14239492": "Chest",
    "20886954": "Boots",
    "2973005342": "Shader",
    "4274335291": "Emblem",
    "2025709351": "Sparrow",
    "284967655": "Ship",
    "3865314626": "Materials",
    "1469714392": "Consumables",
    "1585787867": "Class Items",
    "3284755031": "Subclasses",
    "375726501": "Mission",
    "2197472680": "Bounties",
    "12345": "Post Master",
    "2422292810": "Post Master",
    "1367666825": "Invisible",
    "4023194814": "Ghost",
    "434908299": "Artifact",
    "3054419239": "Emote",
    "1801258597": "Quests",
    "3796357825": "Horn"
};
tgd.DestinyBucketColumns = {
    "Chest": 3,
    "Boots": 3,
    "Ship": 3,
    "Heavy": 3,
    "Consumables": 4,
    "Primary": 3,
    "Class": 3,
    "Class Items": 3,
    "Sparrow": 3,
    "Special": 3,
    "Shader": 3,
    "Subclasses": 3,
    "Helmet": 3,
    "Gauntlet": 3,
    "Materials": 4,
    "Emblem": 3,
    "Bounties": 4,
    //TODO: Improve this so I don't need two records
    "Post": 4,
    "Post Master": 4,
    "Messages": 4,
    "Lost": 4,
    "Lost Items": 4,
    "Mission": 4,
    "Invisible": 4,
    "Ghost": 3,
    "Artifact": 3,
    "Quests": 4,
    "Emote": 3,
    "Horn": 3
};
tgd.DestinyMaxCSP = {
    "Helmet": 102,
    "Gauntlet": 102,
    "Chest": 137,
    "Boots": 152,
    "Class Items": 57,
    "Artifact": 123,
    "Ghost": 57
}
tgd.DestinyBucketWeights = [{
    "Primary": 13.04,
    "Special": 13.04,
    "Heavy": 13.04,
    "Helmet": 10.87,
    "Gauntlet": 10.87,
    "Chest": 10.87,
    "Boots": 10.87,
    "Class Items": 8.7,
    "Ghost": 8.7
}, {
    "Primary": 12,
    "Special": 12,
    "Heavy": 12,
    "Helmet": 10,
    "Gauntlet": 10,
    "Chest": 10,
    "Boots": 10,
    "Class Items": 8,
    "Ghost": 8,
    "Artifact": 8
}];
tgd.languages = [{
    code: "en",
    description: "English",
    bungie_code: "en"
}, {
    code: "es",
    description: "Spanish",
    bungie_code: "es"
}, {
    code: "it",
    description: "Italian",
    bungie_code: "it"
}, {
    code: "de",
    description: "German",
    bungie_code: "de"
}, {
    code: "ja",
    description: "Japanese",
    bungie_code: "ja"
}, {
    code: "pt",
    description: "Portuguese",
    bungie_code: "pt-br"
}, {
    code: "fr",
    description: "French",
    bungie_code: "fr"
}, {
    code: "tr",
    description: "Turkish",
    bungie_code: "en"
}];
tgd.defaults = {
    searchKeyword: "",
    doRefresh: isMobile ? false : "true",
    refreshSeconds: 300,
    tierFilter: 0,
    weaponFilter: 0,
    armorFilter: 0,
    generalFilter: 0,
    dmgFilter: [],
    activeView: 0,
    activeSort: 0,
    progressFilter: 0,
    showDuplicate: false,
    setFilter: [],
    activeClasses: [],
    shareView: false,
    shareUrl: "",
    showMissing: false,
    showArmorPerks: false,
    showArmorSC: false,
    customFilter: false,
    tooltipsEnabled: isMobile ? false : "true",
    advancedTooltips: isMobile ? false : "true",
    autoXferStacks: false,
    padBucketHeight: isMobile ? false : "true",
    dragAndDrop: false,
    xsColumn: tgd.bootstrapGridColumns,
    smColumn: tgd.bootstrapGridColumns / 2,
    mdColumn: tgd.bootstrapGridColumns / 3,
    lgColumn: tgd.bootstrapGridColumns / 4,
    vaultColumns: tgd.bootstrapGridColumns / 4,
    vaultWidth: tgd.bootstrapGridColumns / 4,
    //device and bungie locale
    locale: "en",
    //user interface set locale
    appLocale: "",
    vaultPos: 0,
    itemDefs: "",
    preferredSystem: "PSN",
    ccWidth: "",
    layoutMode: "even",
    autoUpdates: (isFirefox || isIOS || isAndroid || isChrome) ? "true" : false,
    toastTimeout: 2600,
    armorViewBy: "Light"
};
tgd.imageErrorHandler = function(src, element) {
    return function() {
        if (element && element.src && element.src !== "") {
            var source = element.src;
            if (source.indexOf(tgd.remoteImagePath) == -1) {
                element.src = tgd.remoteImagePath + src;
            }
        }
    };
};

tgd.getEventDelegate = function(target, selector) {
    var delegate;
    while (target && target != this.el) {
        delegate = $(target).filter(selector)[0];
        if (delegate) {
            return delegate;
        }
        target = target.parentNode;
    }
    return undefined;
};

window.ko.bindingHandlers.itemImageHandler = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        var icon = ko.unwrap(valueAccessor());
        element.src = icon;
        element.onerror = tgd.imageErrorHandler(icon, element);
    },
    update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        var icon = ko.unwrap(valueAccessor());
        element.src = icon;
        element.onerror = tgd.imageErrorHandler(icon, element);
    }
};

window.ko.bindingHandlers.refreshableSection = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        //tgd.localLog(element);
        //event: { mouseenter: $root.toggleSectionRefresh, mouseleave: $root.toggleSectionRefresh }, css: { titleHover: $root.showSectionRefresh }
        if (isMobile) {
            return;
        }
        $(element)
            .bind("mouseenter", function() {
                $(this).addClass("titleHover");
                $(this).find(".titleRefresh").show();
            })
            .bind("mouseleave", function() {
                $(this).removeClass("titleHover");
                $(this).find(".titleRefresh").hide();
            });
    }
};

window.ko.bindingHandlers.refreshableEmblem = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        if (isMobile) {
            return;
        }
        $(element)
            .bind("mouseenter", function() {
                $(this).addClass("emblemHover");
                //$(this).find(".emblemRefresh").show();
            })
            .bind("mouseleave", function() {
                $(this).removeClass("emblemHover");
                //$(this).find(".emblemRefresh").hide();
            });
    }
};

window.ko.bindingHandlers.scrollToView = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        Hammer(element, {
                time: 2000
            })
            .on("tap", function(ev) {
                var target = tgd.getEventDelegate(ev.target, ".mobile-characters");
                var index = $(target).index(),
                    distance = $(".profile:eq(" + index + ")");
                if (distance.length > 0) {
                    distance = distance.position().top - 50;
                    app.scrollTo(distance);
                }
            })
            .on("press", function(ev) {
                var target = tgd.getEventDelegate(ev.target, ".mobile-characters-image");
                var item = ko.contextFor(target).$data;
                $.toaster({
                    priority: 'info',
                    title: 'Info',
                    message: app.activeText().this_icon + item.uniqueName(),
                    settings: {
                        timeout: tgd.defaults.toastTimeout
                    }
                });
            });
    }
};

window.ko.bindingHandlers.fastclick = {
    init: function(element, valueAccessor) {
        FastClick.attach(element);
        return ko.bindingHandlers.click.init.apply(this, arguments);
    }
};

window.ko.bindingHandlers.moveItem = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        Hammer(element, {
                time: 2000
            })
            .on("tap", function(ev) {
                tgd.localLog("item.tap");
                var target = tgd.getEventDelegate(ev.target, ".itemLink");
                if (target) {
                    var item = ko.contextFor(target).$data;
                    tgd.moveItemPositionHandler(target, item);
                }
            })
            .on("doubletap", function(ev) {
                tgd.localLog("item.doubletap");
                var target = tgd.getEventDelegate(ev.target, ".itemLink");
                if (target) {
                    var context = ko.contextFor(target);
                    if (context && "$data" in context) {
                        var item = context.$data;
                        if (item.transferStatus < 2 || item.bucketType == "Subclasses") {
                            if (app.dynamicMode() === false) {
                                app.dynamicMode(true);
                                app.createLoadout();
                            }
                            tgd.localLog("double tap");
                            if (item._id > 0) {
                                app.activeLoadout().addUniqueItem({
                                    id: item._id,
                                    bucketType: item.bucketType,
                                    doEquip: false
                                });
                            } else {
                                var payload = {
                                    hash: item.id,
                                    bucketType: item.bucketType,
                                    characterId: item.characterId()
                                };
                                app.activeLoadout().addGenericItem(payload);
                            }
                        } else {
                            $.toaster({
                                priority: 'danger',
                                title: 'Warning',
                                message: app.activeText().unable_create_loadout_for_type,
                                settings: {
                                    timeout: tgd.defaults.toastTimeout
                                }
                            });
                        }
                    }
                }
            })
            // press is actually hold 
            .on("press", function(ev) {
                tgd.localLog("item.press");
                var target = tgd.getEventDelegate(ev.target, ".itemLink");
                if (target) {
                    var context = ko.contextFor(target);
                    if (context && "$data" in context) {
                        var item = context.$data;
                        if (item && item.doEquip && app.loadoutMode() === true) {
                            item.doEquip(!item.doEquip());
                            item.markAsEquip(item, {
                                target: target
                            });
                        } else if (!isMobile) {
                            tgd.moveItemPositionHandler(target, item);
                        } else {
                            $ZamTooltips.lastElement = target;
                            $ZamTooltips.show("destinydb", "items", item.id, target);
                        }
                    }
                }
            });
    }
};
tgd.bungie = (function(cookieString, complete) {
    var self = this;

    var _token,
        id = 0,
        active,
        domain = 'bungie.net',
        url = 'https://www.' + domain + '/',
        apikey = '5cae9cdee67a42848025223b4e61f929'; //this one is linked to dasilva333

    this.bungled = "";
    this.systemIds = {};
    this.requests = {};

    // private methods
    function _getAllCookies(callback) {
        if (chrome && chrome.cookies && chrome.cookies.getAll) {
            chrome.cookies.getAll({
                domain: '.' + domain
            }, function() {
                callback.apply(null, arguments);
            });
        } else if (isNWJS) {
            require("nw.gui").Window.get().cookies.getAll({}, function(a, b) {
                callback.apply(null, arguments);
            });
        } else {
            callback([]);
            return BootstrapDialog.alert("You must enable cookie permissions in Chrome before loading TGD");
        }
    }

    function readCookie(cname) {
        //tgd.localLog("trying to read cookie passed " + savedCookie);
        var name = cname + "=";
        var ca = (cookieString || "").toString().split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
        }
        //tgd.localLog("found no match");
        return "";
    }

    this.requestCookie = function(callback) {
        tgd.localLog("sending request-cookie-from-ps");
        var event = new CustomEvent("request-cookie-from-ps", {});
        window.dispatchEvent(event);
        self.requestCookieCB = callback;
    };

    this.getCookie = function(name, callback) {
        if (isChrome) {
            _getAllCookies(function(cookies) {
                var c = null;
                for (var i = 0, l = cookies.length; i < l; ++i) {
                    if (cookies[i].name === name) {
                        c = cookies[i];
                        break;
                    }
                }
                callback(c ? c.value : null);
            });
        } else if (isFirefox) {
            self.requestCookie(callback);
        } else {
            callback(readCookie('bungled'));
        }
    };

    this.retryRequest = function(opts) {
        if (opts.retries) {
            if (opts.retries > 3) {
                opts.complete({
                    error: 'network error:' + this.status
                }, response);
            } else {
                opts.retries++;
                setTimeout(function() {
                    self.request(opts);
                }, 1000 * opts.retries);
            }
        } else {
            opts.retries = 0;
            setTimeout(function() {
                self.request(opts);
            }, 2000);
        }
    };

    this.request = function(opts) {
        if (opts.route.indexOf("http") == -1)
            opts.route = url + "Platform" + opts.route;

        var data;
        if (opts.payload) {
            data = JSON.stringify(opts.payload);
        }

        $.ajax({
            url: opts.route,
            type: opts.method,
            headers: {
                'X-API-Key': apikey,
                'x-csrf': self.bungled
            },
            beforeSend: function(xhr) {
                /* this cookie needs to be trimmed in order to work properly on iPad (https://forum.ionicframework.com/t/solved-ios9-fails-with-setrequestheader-native-with-custom-headers-in-http-service/32399)*/
                if (isMobile && typeof cookieString == "string") {
                    _.each(cookieString.split(";"), function(cookie) {
                        try {
                            var trimCookie = $.trim(cookie);
                            xhr.setRequestHeader('Cookie', trimCookie);
                        } catch (e) {}
                    });
                }
            },
            data: data,
            complete: function(xhr, status) {
                tgd.localLog("ajax complete");
                var response;
                if (xhr.status >= 200 && xhr.status <= 409) {
                    try {
                        response = JSON.parse(xhr.responseText);
                    } catch (e) {
                        //tgd.localLog("error parsing responseText: " + xhr.responseText);
                    }
                    if (response && response.ErrorCode && (response.ErrorCode == 36 || response.ErrorCode == 1652 || response.ErrorCode == 1651)) {
                        self.retryRequest(opts);
                    } else {
                        var obj = response;
                        if (typeof obj == "object" && "Response" in obj)
                            obj = response.Response;
                        opts.complete(obj, response);
                    }
                } else {
                    self.retryRequest(opts);
                }
            }
        });
    };

    this.vault = function(callback) {
        self.request({
            route: '/Destiny/' + active.type + '/MyAccount/Vault/',
            method: 'GET',
            complete: callback
        });
    };

    this.logout = function(callback) {
        self.request({
            route: url + 'en/User/SignOut',
            method: 'GET',
            complete: callback
        });
    };

    this.login = function(callback) {
        tgd.localLog("bungie.login");
        self.request({
            route: url,
            method: "GET",
            complete: callback
        });
    };

    this.getUrl = function() {
        return url;
    };

    this.setsystem = function(type) {
        active = self.systemIds.xbl;
        if (type === 'PSN')
            active = self.systemIds.psn;
    };

    this.getMemberId = function() {
        return membershipId;
    };

    this.gamertag = function() {
        return active ? active.id : null;
    };

    this.system = function() {
        return systemIds;
    };

    this.user = function(callback) {
        self.request({
            route: '/User/GetBungieNetUser/',
            method: 'GET',
            complete: function(res, response) {
                if (response && response.ErrorCode && response.ErrorCode > 1) {
                    callback({
                        error: response.Message,
                        code: response.ErrorCode
                    });
                    return;
                } else if (typeof res == "undefined") {
                    callback({
                        error: 'no response'
                    });
                    return;
                }

                self.systemIds.xbl = {
                    id: res.gamerTag,
                    type: 1
                };
                self.systemIds.psn = {
                    id: res.psnId,
                    type: 2
                };

                active = self.systemIds.xbl;

                if (res.psnId)
                    active = self.systemIds.psn;

                callback(res);
            }
        });
    };

    this.account = function(callback) {
        self.request({
            route: '/Destiny/' + active.type +
                '/Account/' + active.membership +
                '/',
            method: 'GET',
            complete: callback
        });
    };

    this.setlockstate = function(characterId, itemId, state, callback) {
        self.request({
            route: '/Destiny/SetLockState/',
            method: 'POST',
            payload: {
                membershipType: active.type,
                characterId: characterId,
                itemId: itemId,
                state: state
            },
            complete: callback
        });
    };

    this.transfer = function(characterId, itemId, itemHash, amount, toVault, callback) {
        self.request({
            route: '/Destiny/TransferItem/',
            method: 'POST',
            payload: {
                characterId: characterId,
                membershipType: active.type,
                itemId: itemId,
                itemReferenceHash: itemHash,
                stackSize: amount,
                transferToVault: toVault
            },
            complete: callback
        });
    };

    this.equip = function(characterId, itemId, callback) {
        self.request({
            route: '/Destiny/EquipItem/',
            method: 'POST',
            payload: {
                membershipType: active.type,
                characterId: characterId,
                itemId: itemId
            },
            complete: callback
        });
    };

    this.getAccountSummary = function(callback) {
        self.request({
            route: '/Destiny/' + active.type +
                '/Account/' + active.membership +
                '/Summary/',
            method: 'GET',
            complete: callback
        });
    };

    this.getItemDetail = function(characterId, instanceId, callback) {
        self.request({
            route: '/Destiny/' + active.type +
                '/Account/' + active.membership +
                '/Character/' + characterId +
                '/Inventory/' + instanceId + '/',
            method: 'GET',
            complete: callback
        });
    };

    this.inventory = function(characterId, callback) {
        self.request({
            route: '/Destiny/' + active.type +
                '/Account/' + active.membership +
                '/Character/' + characterId +
                '/Inventory/',
            method: 'GET',
            complete: callback
        });
    };

    this.character = function(characterId, callback) {
        self.request({
            route: '/Destiny/' + active.type +
                '/Account/' + active.membership +
                '/Character/' + characterId + '/',
            method: 'GET',
            complete: callback
        });
    };

    this.search = function(activeSystem, callback) {
        this.setsystem(activeSystem);
        if (active && active.type) {
            if (typeof active.membership == "undefined") {
                self.request({
                    route: '/Destiny/' + active.type + '/Stats/GetMembershipIdByDisplayName/' + active.id + '/',
                    method: 'GET',
                    complete: function(membership) {
                        if (membership > 0) {
                            //tgd.localLog('error finding bungie account!', membership)
                            active.membership = membership;
                            self.account(callback);
                        } else {
                            callback({
                                error: true
                            });
                            return;
                        }

                    }
                });
            } else {
                self.account(callback);
            }
        }
    };

    this.account = function(callback) {
        tgd.localLog(active.type + " log request to " + JSON.stringify(active.membership));
        self.request({
            route: '/Destiny/' + active.type +
                '/Account/' + active.membership + '/',
            method: 'GET',
            complete: callback
        });
    };

    this.flattenItemArray = function(buckets) {
        var items = [];
        if (_.isArray(buckets)) {
            buckets.forEach(function(bucket) {
                bucket.items.forEach(function(item) {
                    items.push(item);
                });
            });
        } else {
            Object.keys(buckets).forEach(function(bucketName) {
                buckets[bucketName].forEach(function(bucket) {
                    bucket.items.forEach(function(item) {
                        item.bucketName = bucketName;
                        items.push(item);
                    });
                });
            });
        }
        return items;
    };

    this.init = function() {
        if (isFirefox) {
            window.addEventListener("response-cookie-from-cs", function(event) {
                tgd.localLog("response-cookie-from-cs: " + event.detail);
                self.requestCookieCB(event.detail);
            });
        }
        tgd.localLog("bungie.init");
        if (isStaticBrowser) {
            complete("");
        } else {
            self.login(function() {
                tgd.localLog("bungie.login.complete, now getCookie");
                self.getCookie('bungled', function(token) {
                    tgd.localLog("bungied started with token " + token);
                    self.bungled = token;
                    complete(token);
                });
            });
        }
    };


    this.init();
});
tgd.dialog = (function(options) {
    var self = this;

    this.modal = new BootstrapDialog(options);
    this.options = options;

    return self;
});

tgd.dialog.prototype = {
    title: function(title) {
        this.modal.setTitle(title);
        return this;
    },

    content: function(content) {
        this.modal.setMessage(content);
        return this;
    },

    buttons: function(buttons) {
        this.modal.setClosable(true).enableButtons(true).setData("buttons", buttons);
        return this;
    },

    show: function(excludeClick, onHide, onShown) {
        var self = this;
        self.modal.open();
        var mdl = self.modal.getModal();
        if (!excludeClick) {
            mdl.bind("click", function() {
                self.modal.close();
            });
        }
        mdl.on("hide.bs.modal", onHide);
        mdl.on("shown.bs.modal", onShown);
        return self;
    }
};
tgd.Layout = function(layout) {
    var self = this;

    self.name = layout.name;
    self.id = layout.view;
    self.bucketTypes = layout.bucketTypes;
    self.headerText = layout.headerText;
    self.array = layout.array;
    self.counts = layout.counts;
};

tgd.Layout.prototype = {
    countText: function(character) {
        var self = this;
        return ko.pureComputed(function() {
            var text = "";
            if (self.array !== "" && character.id == 'Vault') {
                var currentAmount = character[self.array]().length;
                var totalAmount = character.id == 'Vault' ? self.counts[0] : self.counts[1];
                text = "(" + currentAmount + "/" + totalAmount + ")";
                if (currentAmount == totalAmount) {
                    text = "<label class='label label-danger'>" + text + "</label>";
                }
            }
            return text;
        });
    },
    titleText: function(character) {
        var self = this;
        return ko.pureComputed(function() {
            return (character.id == 'Vault' && self.name == 'Sub Classes' ? 'Vault Sub Classes' : app.activeText()[self.headerText]);
        });
    },
    isVisible: function(character) {
        var self = this;
        return ko.pureComputed(function() {
            return (character.id == "Vault" && self.name !== "Post Master") || character.id !== "Vault";
        });
    }
};
	tgd.loadoutId = 0;

	tgd.LoadoutItem = function(model) {
	    var self = this;

	    _.each(model, function(value, key) {
	        self[key] = value;
	    });
	    var _doEquip = (model && typeof model.hash == "undefined") ? ((self.doEquip && self.doEquip.toString() == "true") || false) : false;
	    this.doEquip = ko.observable(_doEquip);
	};

	tgd.Loadout = function(model) {
	    var self = this;

	    _.each(model, function(value, key) {
	        self[key] = value;
	    });
	    this.loadoutId = tgd.loadoutId++;
	    this.name = self.name || "";
	    this.ids = ko.observableArray();
	    this.generics = ko.observableArray();
	    this.items = ko.pureComputed(function() {
	        var _items = [];
	        _.each(self.ids(), function(equip) {
	            if (equip) {
	                var itemFound = self.findItemById(equip.id);
	                if (itemFound) {
	                    itemFound.doEquip = equip.doEquip;
	                    itemFound.markAsEquip = self.markAsEquip;
	                    _items.push(itemFound);
	                }
	            }
	        });
	        _.each(self.generics(), function(item) {
	            if (item && item.hash) {
	                var itemFound = self.findItemByHash(item.hash, item.characterId);
	                if (itemFound) {
	                    itemFound.doEquip = item.doEquip;
	                    itemFound.markAsEquip = self.markAsEquip;
	                    _items.push(itemFound);
	                }
	            }
	        });
	        return _items.sort(function(a, b) {
	            if (a.armorIndex > -1) {
	                return a.armorIndex - b.armorIndex;
	            } else if (a.weaponIndex > -1) {
	                return a.weaponIndex - b.weaponIndex;
	            } else {
	                return -1;
	            }
	        });
	    });

	    this.markAsEquip = function(item, event) {
	        var existingItems = _.where(self.ids(), {
	            bucketType: item.bucketType
	        }).filter(function(loadoutItem) {
	            var foundItem = _.find(self.items(), {
	                _id: loadoutItem.id
	            });
	            //sometimes an item is not found due to it being deleted or reforged, at this point filter it out of the list, issue #135
	            if (!foundItem) return false;

	            if (item.bucketType == "Subclasses" || foundItem.armorIndex != -1) {
	                return item.doEquip() === true && item._id != loadoutItem.id && item.character.classType() == foundItem.character.classType();
	            }
	            return item.doEquip() === true && item._id != loadoutItem.id;
	        });
	        /* if the item being equipped is an exotic then the other exotics become unequipped */
	        if (item.tierType == 6 && item.hasLifeExotic === false && item.doEquip()) {
	            _.each(self.ids(), function(equip) {
	                var itemFound = self.findItemById(equip.id);
	                if (itemFound && itemFound.tierType && itemFound.tierType == 6 && itemFound.hasLifeExotic === false && equip.doEquip() && equip.id != item._id && (
	                        (item.weaponIndex > -1 && itemFound.weaponIndex > -1) || (item.armorIndex > -1 && itemFound.armorIndex > -1)
	                    )) {
	                    existingItems.push(equip);
	                }
	            });
	        }
	        if (existingItems.length > 0) {
	            _.each(existingItems, function(loadoutItem) {
	                loadoutItem.doEquip(false);
	            });
	        }
	        if (item.doEquip()) {
	            //TODO: TypeError: undefined is not an object (evaluating '_.findWhere(self.ids(), { id: item._id }).doEquip')
	            _.findWhere(self.ids(), {
	                id: item._id
	            }).doEquip(true);
	        }
	        return true;
	    };

	    /* loader/migrate code */
	    if (model && model.ids && model.ids.length > 0) {
	        var firstItem = model.ids[0];
	        if (firstItem && _.isString(firstItem)) {
	            //tgd.localLog("this model needs a migration " + JSON.stringify(model));
	            var _ids = [];
	            _.each(model.ids, function(id) {
	                var equipDef = _.findWhere(model.equipIds, {
	                    _id: id
	                });
	                var item = self.findItemById(id);
	                if (item)
	                    _ids.push(new tgd.LoadoutItem({
	                        id: id,
	                        bucketType: equipDef ? equipDef.bucketType : item.bucketType,
	                        doEquip: equipDef ? true : false
	                    }));
	            });
	            self.ids(_ids);
	        } else {
	            //tgd.localLog("this model doesn't need a migration " + JSON.stringify(model));
	            self.ids(_.map(model.ids, function(obj) {
	                //tgd.localLog(obj);
	                return new tgd.LoadoutItem(obj);
	            }));
	        }
	    }

	};

	tgd.Loadout.prototype = {
	    /* this function is meant to normalize the difference between having ghost/artifacts in armor and it existing under general */
	    normalize: function(bucketTypes, extras) {
	        var arrUnion = _.difference(extras, bucketTypes),
	            arr = [];
	        if (arrUnion.length == extras.length) {
	            arr = _.union(bucketTypes, extras);
	        } else {
	            arr = _.difference(bucketTypes, extras);
	        }
	        return arr;
	    },
	    toJSON: function() {
	        var copy = ko.toJS(this); //easy way to get a clean copy
	        //copy.items = _.pluck(copy.items, '_id'); //strip out items metadata
	        delete copy.items;
	        return copy;
	    },
	    setActive: function() {
	        app.loadoutMode(true);
	        app.dynamicMode(false);
	        app.activeLoadout(_.clone(this));
	    },
	    remove: function() {
	        var ref = _.findWhere(app.loadouts(), {
	            loadoutId: this.loadoutId
	        });
	        app.loadouts.remove(ref);
	        app.createLoadout();
	        app.saveLoadouts();
	    },
	    save: function() {
	        //this is a reference to the cloned Loadout object while in use
	        //ref is a reference to the Loadout object this came from
	        //the reason for making a clone is to make sure the original isn't modified
	        var ref = _.findWhere(app.loadouts(), {
	            loadoutId: this.loadoutId
	        });
	        //When saving there should always be the parent object that gets deleted in favor of this one
	        if (ref) {
	            app.loadouts.splice(app.loadouts().indexOf(ref), 1);
	        }
	        //Pushing the reference to the new object to the array
	        app.loadouts.push(this);
	        app.saveLoadouts();
	    },
	    saveNew: function() {
	        //There's no need to find a reference to the parent to delete it if this is Save as New
	        app.loadouts.push(this);
	        app.saveLoadouts();
	    },
	    addUniqueItem: function(obj) {
	        this.ids.push(new tgd.LoadoutItem(obj));
	    },
	    addGenericItem: function(obj) {
	        this.generics.push(new tgd.LoadoutItem(obj));
	    },
	    findItemByHash: function(hash, characterId) {
	        var itemFound;
	        app.characters().forEach(function(character) {
	            var match = _.filter(character.items(), function(item) {
	                if (characterId)
	                    return item.id == hash && item.characterId() == characterId;
	                else
	                    return item.id == hash;
	            })[0];
	            if (match) itemFound = _.clone(match);
	        });
	        return itemFound;
	    },
	    findItemById: function(id) {
	        var itemFound;
	        app.characters().forEach(function(character) {
	            var match = _.findWhere(character.items(), {
	                _id: id
	            });
	            if (match) itemFound = _.clone(match);
	        });
	        return itemFound;
	    },
	    swapItems: function(swapArray, targetCharacterId, callback) {
	        var self = this;
	        var onlyEquipped = function(item) {
	            return item.doEquip() === true;
	        };
	        tgd.autoTransferStacks = true;
	        var itemIndex = -1,
	            increments = parseInt(Math.round(95 / (1.0 * swapArray.length))),
	            progressValue = 5;
	        var loader = $(".bootstrap-dialog-message .progress").show().find(".progress-bar").width(progressValue + "%");
	        var transferNextItem = function() {
	            tgd.localLog("**************transferNextItem*************");
	            var pair = swapArray[++itemIndex],
	                targetItem, swapItem, action, targetOwner;
	            progressValue = progressValue + increments;
	            loader.width(progressValue + "%");
	            //now that they are both in the vault transfer them to their respective location
	            var transferTargetItemToVault = function(complete) {
	                targetItem = pair.targetItem;
	                if (typeof targetItem != "undefined") {
	                    targetOwner = targetItem.character.id;
	                    tgd.localLog(" transferTargetItemToVault " + targetItem.description);
	                    if (targetOwner == "Vault") {
	                        complete();
	                    } else {
	                        var originalCharacterId = targetItem.character.id;
	                        targetItem.store("Vault", function(profile) {
	                            if (profile.id == originalCharacterId) {
	                                $.toaster({
	                                    priority: 'danger',
	                                    title: 'Error',
	                                    message: "Unable to unequip " + targetItem.description + " while playing in game"
	                                });
	                                complete();
	                            } else {
	                                complete();
	                            }
	                        });
	                    }
	                } else {
	                    complete();
	                }
	            };
	            var transferSwapItemToVault = function(complete) {
	                swapItem = pair.swapItem;
	                tgd.localLog("^^^^^^^^^^" + swapItem.character.id + " transferSwapItemToVault " + swapItem.description);
	                if (swapItem.character.id == "Vault") {
	                    complete();
	                } else {
	                    var originalCharacterId = swapItem.character.id;
	                    swapItem.store("Vault", function(profile) {
	                        tgd.localLog(originalCharacterId + " transferSwapItemToVault result " + profile.id);
	                        /* unequip failed, pick another swapItem not used in the swapArray */
	                        if (profile.id == originalCharacterId) {
	                            var equippedItem = swapItem;
	                            tgd.localLog("^^^^^^^^^unequipped failed for " + swapItem.description);
	                            tgd.localLog(swapArray);
	                            var swapAndTargetIDs = _.flatten(_.map(swapArray, function(pair) {
	                                var tmp = [];
	                                if (pair.swapItem)
	                                    tmp.push(pair.swapItem._id);
	                                if (pair.targetItem)
	                                    tmp.push(pair.targetItem._id);
	                                return tmp;
	                            }));
	                            tgd.localLog("swapAndTargetIDs: " + swapAndTargetIDs);
	                            tgd.localLog("targetItem character is " + targetItem.character.uniqueName());
	                            var candidates = _.filter(swapItem.character.get(swapItem.bucketType), function(item) {
	                                var isCandidate = swapAndTargetIDs.indexOf(item._id) == -1;
	                                tgd.localLog(item.description + " is part of the swap and target ids? " + isCandidate);
	                                return isCandidate;
	                            });
	                            tgd.localLog(candidates.length + " candidates: " + _.pluck(candidates, 'description'));
	                            if (candidates.length > 0) {
	                                swapItem = candidates[0];
	                                tgd.localLog("candidate is " + swapItem._id + " and is currently sitting in " + swapItem.character.uniqueName());
	                                swapItem.store("Vault", function() {
	                                    tgd.localLog("^^^^^^^ xfered new candidate to vault");
	                                    complete();
	                                });
	                            } else {
	                                $.toaster({
	                                    priority: 'danger',
	                                    title: 'Error',
	                                    message: "Unable to unequip " + equippedItem.description + " while playing in game"
	                                });
	                                pair.swapItem = pair.targetItem = targetItem = swapItem = null;
	                                tgd.localLog("No candidates can't xfer targetItem");
	                                complete();
	                            }
	                        } else {
	                            complete();
	                        }
	                    });
	                }
	            };
	            var transferTargetItemToDestination = function(complete) {
	                if (typeof targetItem == "undefined" && pair.targetItem)
	                    targetItem = pair.targetItem;
	                if (targetItem) {
	                    var action = (_.where(self.ids(), {
	                        id: targetItem._id
	                    }).filter(onlyEquipped).length === 0) ? "store" : "equip";
	                    tgd.localLog(targetItem.description + " transferTargetItemToDestination " + targetCharacterId);
	                    if (targetCharacterId == "Vault" && targetItem.character.id == "Vault") {
	                        tgd.localLog("transferTargetItemToDestination: item needs to be in Vault and is already in Vault");
	                        complete();
	                    } else {
	                        var originalCharacterId = targetItem.character.id;
	                        targetItem[action](targetCharacterId, function(profile) {
	                            if (profile.id == originalCharacterId) {
	                                $.toaster({
	                                    priority: 'danger',
	                                    title: 'Error',
	                                    message: "Unable to unequip " + targetItem.description + " while playing in game"
	                                });
	                                complete();
	                            } else {
	                                complete();
	                            }
	                        });
	                    }
	                } else {
	                    complete();
	                }
	            };
	            var transferSwapItemToDestination = function(complete) {
	                if (typeof swapItem == "undefined" && pair.swapItem)
	                    swapItem = pair.swapItem;
	                if (swapItem) {
	                    tgd.localLog(targetOwner + " (targetOwner) transferSwapItemToDestination " + swapItem.description);
	                    if (targetOwner == "Vault" && swapItem.character.id == "Vault") {
	                        tgd.localLog("transferSwapItemToDestination: item needs to be in Vault and is already in Vault");
	                        complete();
	                    } else {
	                        swapItem.store(targetOwner, complete);
	                    }
	                } else {
	                    complete();
	                }
	            };
	            /* this assumes there is a swap item and a target item*/
	            var startSwapping = function(finish) {
	                tgd.localLog("startSwapping ");
	                transferTargetItemToVault(function() {
	                    tgd.localLog("finished transferTargetItemToVault at ");
	                    transferSwapItemToVault(function() {
	                        tgd.localLog("finished transferSwapItemToVault at ");
	                        transferTargetItemToDestination(function() {
	                            tgd.localLog("finished transferTargetItemToDestination item to vault at ");
	                            transferSwapItemToDestination(function() {
	                                tgd.localLog("*********finished transferSwapItemToDestination swap items **************");
	                                if (finish) finish();
	                                else transferNextItem();
	                            });
	                        });
	                    });
	                });
	            };
	            /* this assumes there is a swap item and a target item*/
	            var checkAndMakeFreeSpace = function(ref, spaceNeeded, fnHasFreeSpace) {
	                var item = ref;
	                if (typeof item == "undefined") {
	                    return BootstrapDialog.alert(self.description + ": Item not found while attempting to transfer the item " + ref.description);
	                } else if (ref.bucketType == "Subclasses") {
	                    return fnHasFreeSpace();
	                }
	                var vault = _.findWhere(app.characters(), {
	                    id: "Vault"
	                });
	                var bucketType = item.bucketType,
	                    otherBucketTypes;
	                var layout = _.filter(tgd.DestinyLayout, function(layout) {
	                    return (layout.bucketTypes.indexOf(bucketType) > -1 && layout.extras.indexOf(bucketType) == -1) || (layout.bucketTypes.indexOf(bucketType) == -1 && layout.extras.indexOf(bucketType) > -1);
	                })[0];
	                var actualBucketTypes = self.normalize(layout.bucketTypes, layout.extras);
	                var spaceNeededInVault = layout.counts[0] - spaceNeeded;
	                //TODO: TypeError: undefined is not an object (evaluating 'vault.items')
	                var spaceUsedInVault = _.filter(vault.items(), function(otherItem) {
	                    return actualBucketTypes.indexOf(otherItem.bucketType) > -1;
	                }).length;

	                tgd.localLog(bucketType + " spaceNeededInVault: " + spaceNeededInVault);
	                tgd.localLog(bucketType + " spaceUsedInVault: " + spaceUsedInVault);

	                if (spaceUsedInVault <= spaceNeededInVault) { // || targetCharacterId == "Vault"
	                    tgd.localLog("vault has at least 2 slots to make xfer");
	                    fnHasFreeSpace();
	                } else {
	                    //tgd.localLog("why did i run out of space already?");
	                    //abort;
	                    var maxFreeSpace = 9, //not counting the equipped
	                        tmpItems = [],
	                        tmpIds = [];
	                    var freeSpaceNeeded = spaceUsedInVault - spaceNeededInVault;
	                    tgd.localLog("Vault does not have enough free space, need to temp move something from here to free up x slots: " + freeSpaceNeeded);
	                    otherBucketTypes = [].concat(actualBucketTypes);
	                    otherBucketTypes.splice(otherBucketTypes.indexOf(bucketType), 1);
	                    tgd.localLog("other bucket types: " + otherBucketTypes);
	                    tgd.localLog(otherBucketTypes + " being checked in other characters");
	                    _.each(otherBucketTypes, function(bucketType) {
	                        if (tgd.DestinyNonUniqueBuckets.indexOf(bucketType) == -1) {
	                            _.each(app.characters(), function(character) {
	                                if (freeSpaceNeeded > 0 && character.id != "Vault") {
	                                    tgd.localLog("checking " + character.uniqueName() + " the " + bucketType);
	                                    var freeSpace = maxFreeSpace - character.get(bucketType).length;
	                                    if (freeSpace > 0) {
	                                        tgd.localLog(bucketType + " found with free space: " + freeSpace);
	                                        var itemsToMove = vault.get(bucketType);
	                                        tgd.localLog("vault has these many of those items to move " + itemsToMove.length);
	                                        _.each(itemsToMove, function(item) {
	                                            if (freeSpaceNeeded > 0 && freeSpace > 0 && tmpIds.indexOf(item._id) == -1) {
	                                                tmpItems.push({
	                                                    item: item,
	                                                    character: character
	                                                });
	                                                tmpIds.push(item._id);
	                                                freeSpaceNeeded = freeSpaceNeeded - 1;
	                                                freeSpace = freeSpace - 1;
	                                            }
	                                        });
	                                    }
	                                }
	                            });
	                        }
	                    });
	                    tgd.localLog("so the plan is to move these from the vault ");
	                    tgd.localLog(tmpItems);
	                    var preCount = 0,
	                        postCount = 0;
	                    var finish = function() {
	                        postCount++;
	                        if (postCount == tmpItems.length) {
	                            tgd.localLog("********* temp items moved back, finished, transferNextItem ********* ");
	                            transferNextItem();
	                        }
	                    };
	                    var done = function() {
	                        preCount++;
	                        tgd.localLog("current: " + preCount + " total: " + tmpItems.length + " vault size: ");
	                        if (preCount == tmpItems.length) {
	                            tgd.localLog("moved temp items out, now start swap with callback ");
	                            fnHasFreeSpace(function() {
	                                //console.log("^^^^^^^^ fnHasFreeSpace released control moving items back");
	                                _.each(tmpItems, function(pair) {
	                                    pair.item.store("Vault", finish);
	                                });
	                            });
	                        }
	                    };
	                    _.each(tmpItems, function(pair) {
	                        pair.item.store(pair.character.id, done);
	                    });
	                }
	            };
	            if (pair) {
	                if (typeof pair.swapItem !== "undefined") {
	                    checkAndMakeFreeSpace(pair.swapItem, 2, startSwapping);
	                } else if (typeof pair.targetItem !== "undefined") {
	                    tgd.localLog("no swapItem, transferTargetItem");
	                    checkAndMakeFreeSpace(pair.targetItem, 1, function(callback) {
	                        transferTargetItemToDestination(function() {
	                            if (callback) callback();
	                            else transferNextItem();
	                        });
	                    });
	                } else {
	                    tgd.localLog("******* if pair else (no target, swap) transferNextItem**********************");
	                    transferNextItem();
	                }
	            } else {
	                tgd.localLog("pair is not defined, calling callback");
	                tgd.autoTransferStacks = false;
	                if (callback)
	                    callback();
	            }
	        };
	        app.activeLoadout(new tgd.Loadout());
	        app.loadoutMode(false);
	        transferNextItem();
	    },
	    /* Going to undo these changes until I can cleanup the loading code so it doesn't blip during a reload
	transfer: function(targetCharacterId){
		var self = this;		
		var subscription = app.loadingUser.subscribe(function(newValue){
			if (newValue === false){
				self.move( targetCharacterId );
				subscription.dispose();
			}
		});
		app.refresh();
	},*/
	    /* before starting the transfer we need to decide what strategy we are going to use */
	    /* strategy one involves simply moving the items across assuming enough space to fit in both without having to move other things */
	    /* strategy two involves looking into the target bucket and creating pairs for an item that will be removed for it */
	    /* strategy three is the same as strategy one except nothing will be moved bc it's already at the destination */
	    transfer: function(targetCharacterId, callback) {
	        var self = this;
	        var targetCharacter = _.findWhere(app.characters(), {
	            id: targetCharacterId
	        });
	        if (typeof targetCharacter == "undefined") {
	            return BootstrapDialog.alert("Target character not found");
	        }
	        var targetCharacterIcon = targetCharacter.icon();
	        var getFirstItem = function(sourceBucketIds, itemFound) {
	            //tgd.localLog(itemFound + " getFirstItem: " + sourceBucketIds);
	            return function(otherItem) {
	                /* if the otherItem is not part of the sourceBucket then it can go */
	                //tgd.localLog(otherItem.description + " is in " + sourceBucketIds);
	                if (sourceBucketIds.indexOf(otherItem._id) == -1 && itemFound === false) {
	                    itemFound = true;
	                    sourceBucketIds.push(otherItem._id);
	                    return otherItem;
	                }
	            };
	        };
	        var masterSwapArray = [],
	            swapItem,
	            sourceItems = self.items();
	        if (sourceItems.length > 0) {
	            var targetList = targetCharacter.items();
	            var sourceGroups = _.groupBy(sourceItems, 'bucketType');
	            var targetGroups = _.groupBy(targetList, 'bucketType');
	            masterSwapArray = _.flatten(_.map(sourceGroups, function(group, key) {
	                var sourceBucket = sourceGroups[key];
	                var targetBucket = targetGroups[key] || [];
	                var swapArray = [];
	                if (sourceBucket && targetBucket) {
	                    if (tgd.DestinyNonUniqueBuckets.indexOf(key) == -1) {
	                        var maxBucketSize = 10;
	                        var targetBucketSize = targetBucket.length;
	                        if (targetCharacter.id == "Vault") {
	                            var layout = _.filter(tgd.DestinyLayout, function(layout) {
	                                return (layout.bucketTypes.indexOf(key) > -1 && layout.extras.indexOf(key) == -1) ||
	                                    (layout.bucketTypes.indexOf(key) == -1 && layout.extras.indexOf(key) > -1);
	                            })[0];
	                            var actualBucketTypes = self.normalize(layout.bucketTypes, layout.extras);
	                            targetBucketSize = _.filter(targetCharacter.items(), function(item) {
	                                return actualBucketTypes.indexOf(item.bucketType) > -1;
	                            }).length;
	                            maxBucketSize = layout.counts[0];
	                        }
	                        //tgd.localLog("the current bucket size is " + targetBucketSize);
	                        var targetMaxed = (targetBucketSize == maxBucketSize);
	                        tgd.localLog(key + " bucket max of " + maxBucketSize + " : " + targetMaxed);
	                        tgd.localLog("need to transfer " + sourceBucket.length + " items, the target is this full " + targetBucketSize);
	                        /* use the swap item strategy */
	                        /* by finding a random item in the targetBucket that isnt part of sourceBucket */
	                        if (sourceBucket.length + targetBucketSize > maxBucketSize) {
	                            tgd.localLog("using swap strategy");
	                            var sourceBucketIds = _.pluck(sourceBucket, "_id");
	                            swapArray = _.map(sourceBucket, function(item) {
	                                var ownerIcon = item.character.icon();
	                                /* if the item is already in the targetBucket */
	                                if (_.findWhere(targetBucket, {
	                                        _id: item._id
	                                    })) {
	                                    /* if the item is currently part of the character but it's marked as to be equipped than return the targetItem */
	                                    if (item.doEquip() === true) {
	                                        return {
	                                            targetItem: item,
	                                            description: item.description + app.activeText().loadouts_to_equip,
	                                            actionIcon: "assets/to-equip.png",
	                                            swapIcon: targetCharacterIcon
	                                        };
	                                    }
	                                    /* then return an object indicating to do nothing */
	                                    else {
	                                        return {
	                                            description: item.description + app.activeText().loadouts_alreadythere_pt1 + targetCharacter.classType() + app.activeText().loadouts_alreadythere_pt2 + item.bucketType,
	                                            targetIcon: item.icon,
	                                            actionIcon: "assets/no-transfer.png",
	                                            swapIcon: ownerIcon
	                                        };
	                                    }
	                                } else {
	                                    var itemFound = false;
	                                    if (item.bucketType == "Shader") {
	                                        swapItem = _.filter(targetBucket, function(otherItem) {
	                                            return otherItem.bucketType == item.bucketType && otherItem.description != "Default Shader" && sourceBucketIds.indexOf(otherItem._id) == -1;
	                                        })[0];
	                                    } else {
	                                        /* This will ensure that an item of the same itemHash will not be used as a candidate for swapping 
												e.g. if you have a Thorn on two characters, you want to send any hand cannon between them and never swap the Thorn
											*/
	                                        tgd.localLog("looking for a swap item for " + item.description);
	                                        var sourceBucketHashes = _.pluck(_.where(item.character.items(), {
	                                            bucketType: item.bucketType
	                                        }), 'id');
	                                        tgd.localLog("the owner of this swap item has these items: " + sourceBucketHashes);
	                                        tgd.localLog("the target where this is going has these many items " + targetBucket.length);
	                                        var candidates = _.filter(targetBucket, function(otherItem) {
	                                            var index = sourceBucketHashes.indexOf(otherItem.id);
	                                            tgd.localLog(index + " candidate: " + otherItem.description);
	                                            return index == -1 && otherItem.transferStatus < 2; // && otherItem.isEquipped() === false
	                                        });
	                                        tgd.localLog("candidates: " + _.pluck(candidates, 'description'));
	                                        swapItem = _.filter(_.where(candidates, {
	                                            type: item.type
	                                        }), getFirstItem(sourceBucketIds, itemFound));
	                                        tgd.localLog("1.swapItem: " + swapItem.length);
	                                        if (swapItem.length === 0) {
	                                            //tgd.localLog("candidates: " + _.pluck(candidates, 'description'));
	                                            tgd.localLog(targetBucket);
	                                        }
	                                        swapItem = (swapItem.length > 0) ? swapItem[0] : _.filter(candidates, getFirstItem(sourceBucketIds, itemFound))[0];
	                                        /* if there is still no swapItem at this point I have to break the original rule the prevents duplicates*/
	                                        if (!swapItem) {
	                                            swapItem = _.filter(targetBucket, getFirstItem(sourceBucketIds, itemFound))[0];
	                                        }
	                                    }
	                                    if (swapItem) {
	                                        tgd.localLog("2.swapItem: " + swapItem.description);
	                                        targetBucket.splice(targetBucket.indexOf(swapItem), 1);
	                                        //tgd.localLog("eliminating " + swapItem.description + " from the targetBuckets list " + _.pluck(targetBucket,'description'));
	                                        if (swapItem.armorIndex != -1 && item.character.id != "Vault" && item.character.classType() != targetCharacter.classType()) {
	                                            return {
	                                                description: item.description + app.activeText().loadouts_no_transfer,
	                                                targetIcon: item.icon,
	                                                actionIcon: "assets/no-transfer.png",
	                                                swapIcon: ownerIcon
	                                            };
	                                        }
	                                        return {
	                                            targetItem: item,
	                                            swapItem: swapItem,
	                                            description: item.description + app.activeText().loadouts_swap + swapItem.description,
	                                            actionIcon: "assets/swap.png"
	                                        };
	                                    } else {
	                                        tgd.localLog("to transfer: " + item.description);
	                                        return {
	                                            targetItem: item,
	                                            description: item.description + app.activeText().loadouts_to_transfer,
	                                            swapIcon: targetCharacterIcon,
	                                            actionIcon: "assets/to-transfer.png"
	                                        };
	                                    }
	                                }
	                            });
	                        } else {
	                            /* do a clean move by returning a swap object without a swapItem */
	                            swapArray = _.map(sourceBucket, function(item) {
	                                var ownerIcon = item.character.icon();
	                                /* if the item is already in the targetBucket */
	                                if (_.findWhere(targetBucket, {
	                                        _id: item._id
	                                    })) {
	                                    /* if the item is currently part of the character but it's marked as to be equipped than return the targetItem */
	                                    tgd.localLog(item.description + " item is already in target bucket, doEquip? " + item.doEquip());
	                                    if (item.doEquip() === true) {
	                                        return {
	                                            targetItem: item,
	                                            description: item.description + app.activeText().loadouts_to_equip,
	                                            actionIcon: "assets/to-equip.png",
	                                            swapIcon: targetCharacterIcon
	                                        };
	                                    }
	                                    /* then return an object indicating to do nothing */
	                                    else {
	                                        return {
	                                            description: item.description + app.activeText().loadouts_alreadythere_pt1 + targetCharacter.classType() + app.activeText().loadouts_alreadythere_pt2 + item.bucketType,
	                                            targetIcon: item.icon,
	                                            actionIcon: "assets/no-transfer.png",
	                                            swapIcon: ownerIcon
	                                        };
	                                    }
	                                }
	                                //this condition is supposed to supress subclases and artifacts from being included but not ghosts
	                                else if (item.bucketType == "Subclasses" || (item.armorIndex > -1 && item.character.id != "Vault" && item.classType != 3 && item.character.classType() != targetCharacter.classType() && targetCharacterId != "Vault")) {
	                                    tgd.localLog(item.description + " wont transfer sub classes ");
	                                    return {
	                                        description: item.description + app.activeText().loadouts_no_transfer,
	                                        targetIcon: item.icon,
	                                        actionIcon: "assets/no-transfer.png",
	                                        swapIcon: ownerIcon
	                                    };
	                                } else {
	                                    if (item.doEquip() === true) {
	                                        return {
	                                            targetItem: item,
	                                            description: item.description + app.activeText().loadouts_to_moveequip,
	                                            actionIcon: "assets/to-equip.png",
	                                            swapIcon: targetCharacterIcon
	                                        };
	                                    } else {
	                                        tgd.localLog("loadouts_to_transfer: " + item.description);
	                                        return {
	                                            targetItem: item,
	                                            description: item.description + app.activeText().loadouts_to_transfer,
	                                            actionIcon: "assets/to-transfer.png",
	                                            swapIcon: targetCharacterIcon
	                                        };
	                                    }
	                                }
	                            });
	                        }
	                    } else {
	                        swapArray = _.map(sourceBucket, function(item) {
	                            return {
	                                targetItem: item,
	                                description: item.description + app.activeText().loadouts_to_transfer,
	                                actionIcon: "assets/to-transfer.png",
	                                swapIcon: targetCharacterIcon
	                            };
	                        });
	                    }
	                }
	                return swapArray;
	            }));
	        }
	        if (callback) {
	            if (_.isFunction(callback)) callback(masterSwapArray);
	            else return masterSwapArray;
	        } else {
	            self.promptUserConfirm(masterSwapArray, targetCharacterId);
	        }
	    },
	    generateTemplate: function(masterSwapArray, targetCharacterId, indexes) {
	        var self = this;
	        var html = $(tgd.swapTemplate({
	            swapArray: masterSwapArray
	        }) + $(".progress").find(".progress-bar").width(0).end().clone().wrap('<div>').parent().show().html());
	        var targetCharacter = _.findWhere(app.characters(), {
	            id: targetCharacterId
	        });
	        var swapIds = _.pluck(_.pluck(masterSwapArray, 'swapItem'), '_id');
	        html.find(".item").click(false);
	        html.find(".swapItem").click(function() {
	            var instanceId = $(this).attr("instanceid");
	            var item = self.findItemById(instanceId);
	            /* When a swap item is clicked a few steps must be performed:
	            	-determine bucket type
	            	-determine items in that bucket
	            	-exclude items already in masterSwapArray
	            	-if the array is not empty then switch to the first item
	            	-maintain the index so we can cycle through the whole list
	            	-provide error message regarding no candidates if array is empty
	            */
	            if (item) {
	                var items = targetCharacter.get(item.bucketType);
	                var candidates = _.filter(items, function(candidate) {
	                    return swapIds.indexOf(candidate._id) == -1 && candidate.transferStatus < 2;
	                });
	                if (candidates.length > 0) {
	                    _.each(masterSwapArray, function(pair) {
	                        if (pair && pair.swapItem && pair.swapItem._id == instanceId) {
	                            var targetId = pair.targetItem._id;
	                            if (targetId in indexes && (indexes[targetId] + 1 < candidates.length)) {
	                                indexes[targetId]++;
	                            } else {
	                                indexes[targetId] = 0;
	                            }
	                            //console.log(_.pluck(candidates,'description'));
	                            //console.log(indexes[targetId] + " replacing " + pair.swapItem.description + " with " + candidates[indexes[targetId]].description);
	                            pair.swapItem = candidates[indexes[targetId]];
	                        }
	                    });
	                    self.loadoutsDialog.content(self.generateTemplate(masterSwapArray, targetCharacterId, indexes));
	                }
	            }
	        });
	        return html;
	    },
	    promptUserConfirm: function(masterSwapArray, targetCharacterId) {
	        if (masterSwapArray.length > 0) {
	            var self = this;
	            self.indexes = {};
	            var $template = self.generateTemplate(masterSwapArray, targetCharacterId, self.indexes);
	            var transfer = function(dialog) {
	                self.swapItems(masterSwapArray, targetCharacterId, function() {
	                    $.toaster({
	                        settings: {
	                            timeout: 15 * 1000
	                        },
	                        priority: 'success',
	                        title: 'Success',
	                        message: app.activeText().loadouts_transferred
	                    });
	                    setTimeout(function() {
	                        $(".donateLink").click(app.showDonate);
	                    }, 1000);
	                    app.dynamicMode(false);
	                    dialog.close();
	                });
	            };
	            self.loadoutsDialog = (new tgd.dialog({
	                buttons: [{
	                    label: app.activeText().loadouts_transfer,
	                    action: function(dialog) {
	                        transfer(dialog);
	                    }
	                }, {
	                    label: app.activeText().cancel,
	                    action: function(dialog) {
	                        dialog.close();
	                    }
	                }]
	            })).title(app.activeText().loadouts_transfer_confirm).content($template).show(true,
	                function() { //onHide
	                    $(document).unbind("keyup.dialog");
	                },
	                function() { //onShown
	                    //to prevent multiple binding
	                    $(document).unbind("keyup.dialog").bind("keyup.dialog", function(e) {
	                        var code = e.which;
	                        if (code == 13) {
	                            transfer(self.loadoutsDialog.modal);
	                            $(document).unbind("keyup.dialog");
	                        }
	                    });
	                });
	        }
	    }
	};
tgd.locale = {
    en: {
        agility: "Agility",
        armor: "Armor",
        best_combo: "Best Combo",
        cancel: "Cancel",
        cannot_equip: "Unknown error trying to equip ",
        cannot_unequip: "No more items to try to unequip the ",
        close_msg: "Close",
        disc: "Disc",
        discipline: "Discipline",
        donation_instructions: "This is a non-commercial project dedicated to Destiny. If you like this app provide a donation to keep this project alive and support the maintenance costs.",
        donation_title: "Donations for Tower Ghost for Destiny!",
        error_loading_inventory: "Error loading inventory ",
        gear_with_highest: "Equip Gear With Highest:",
        inte: "Int",
        intellect: "Intellect",
        invalid_transfer_amount: "Invalid amount entered: ",
        inventory_armor: "Armor",
        inventory_general: "General",
        inventory_postmaster: "Post Master",
        inventory_postmaster_messages: "Messages",
        inventory_postmaster_lost_items: "Lost Items",
        inventory_subclasses: "Sub Classes",
        inventory_weapons: "Weapons",
        itemDefs_undefined: "Could not load item definitions, please report the issue to my Github including the version number being used.",
        language_pack_downloaded: "Language Pack downloaded, please refresh to see the changes",
        language_text: "This will change the language for all items and the interface for some languages, more languages will be added in the future.",
        light: "Light",
        loadouts_alreadythere_pt1: " is already in the ",
        loadouts_alreadythere_pt2: "'s bucket of ",
        loadouts_delete: "Delete",
        loadouts_desktop: "check",
        loadouts_instructions: "No items in loadout, click items to add, ",
        loadouts_instructions_contd: " to equip.",
        loadouts_invalidbucket: " will not be moved. Because of this bucket: ",
        loadouts_mobile: "hold",
        loadouts_no_replacement: " will not be moved. There is no item to replace it.",
        loadouts_no_transfer: " will not be moved",
        loadouts_outofspace: " will not be moved, there is no space in ",
        loadouts_save: "Save",
        loadouts_save_new: "Save As",
        loadouts_swap: " will be swapped with ",
        loadouts_to_equip: " will be equipped.",
        loadouts_to_moveequip: " will be moved and equipped.",
        loadouts_to_transfer: " will be moved",
        loadouts_transfer: "Transfer",
        loadouts_transfer_confirm: "Transfer Confirm",
        loadouts_transferred: "<strong>Item(s) Transferred!</strong><br>If you like this app remember to <a style=\"color:#3080CF; cursor:pointer;\" class=\"donateLink\" target=\"_system\">buy me a beer</a>.",
        login_authenticating_pt1: "Logging into Bungie... Please be patient.",
        login_authenticating_pt2: "If log in screen remains for 2+ minutes, use these links for",
        login_authenticating_pt3: "to retry login. If the problem persists, reinstall the app.",
        login_help: "Please wait for the login window to auto close as TGD prepares your information.",
        login_instructions: "To get started you'll need to log in to your Bungie.net account via:",
        login_loading_updates: "Please wait, downloading auto updates",
        login_loading_inventory: "Please wait, loading arsenal from Bungie",
        login_title: "Welcome to Tower Ghost for Destiny!",
        menu_about: "About",
        menu_advancedtooltips: "Advanced Tooltips",
        menu_all: "All",
        menu_autorefresh: "Auto Refresh (5 min)",
        menu_autotransfer: "Auto Transfer Stacks",
        menu_clear: "Clear Filters",
        menu_destinydbtooltips: "DestinyDB Tooltips",
        menu_destinydbmode: "DestinyDB Mode",
        menu_destinystatus: "DestinyStatus Report",
        menu_destinytrials: "DestinyTrials Report",
        menu_destinytracker: "DestinyTracker Report",
        menu_destinyguardiangg: "Guardian.GG Report",
        menu_damage: "Damage",
        menu_donate: "Donate",
        menu_filter_by: "Filter By",
        menu_filter_by_subclass_eq: "Subclass Equipped",
        menu_filter_by_weapon_eq: "Weapons Equipped",
        menu_filter_for_class: "Filter for Class",
        menu_help: "Help",
        menu_language: "Language",
        menu_loadouts: "Loadouts",
        menu_loadouts_create: "Create",
        menu_padheight: "Auto Pad Height",
        menu_progress: "Progress",
        menu_progress_1: "Missing Perks",
        menu_progress_2: "Missing Border",
        menu_progress_3: "Maxed",
        menu_refresh: "Refresh (secs)",
        menu_set: "Set",
        menu_set_showmissing: "Show Missing Items",
        menu_set_showduplicates: "Show Duplicate Items",
        menu_settings: "Settings",
        menu_shareurl: "Share URL with friends",
        menu_sortby: "Sort By",
        menu_sortby_damage: "Damage Type",
        menu_sortby_lightlvl: "Light Level",
        menu_sortby_name: "Name",
        menu_sortby_type: "Type",
        menu_sortby_tier_type: "Tier, Type",
        menu_tier: "Tier",
        menu_usexbox: "Use Xbox Account",
        menu_useps: "Use Playstation Account",
        menu_view: "View",
        menu_view_armor: "Armor",
        menu_view_by: "View By",
        menu_view_by_lightlvl: "Light Level",
        menu_view_by_stat_points: "Combined Stat Points",
        menu_view_general: "General",
        menu_view_options: "View Options",
        menu_view_weapons: "Weapons",
        missing_items: "Missing Items",
        most_points: "Most Points",
        movepopup_move: "Move",
        movepopup_store: "store",
        movepopup_equip: "equip",
        movepopup_vault: "vault",
        movepopup_extras: "extras",
        normalize_title: "Normalize - equally distribute item across your characters",
        paypal_code: "EN",
        pick_a_set: "Please pick a Set before selecting this option",
        strength: "Strength",
        recovery: "Recovery",
        str: "Str",
        text_shareurl: "Your inventory is updated by clicking on Share URL from the menu again.",
        this_icon: "This icon is ",
        tier_common: "Common",
        tier_exotic: "Exotic",
        tier_legendary: "Legendary",
        tier_rare: "Rare",
        tier_uncommon: "Uncommon",
        transfer: "Transfer",
        transfer_all: "All",
        transfer_amount: "Transfer Amount",
        transfer_ask: "Don\'t ask in the future",
        transfer_consolidate: "Consolidate (pull from all characters",
        transfer_one: "One",
        unable_create_loadout_for_type: "Currently unable to create loadouts with this item type.",
        unable_unequip: "Unable to unequip ",
        unable_to_create_loadout_for_bucket: "You cannot create a loadout with more than 10 items in this slot: ",
        unable_to_move_bucketitems: "This item cannot be transferred with the API.",
        vo_container_width: "Container Width",
        vo_layout_mode: "Vault Mode",
        vo_layout_mode_cust: "Custom",
        vo_layout_mode_def: "Default",
        vo_number_of_columns: "Number of Columns",
        vo_vault_columns: "Vault Columns",
        vo_vault_first: "First/Left",
        vo_vault_last: "Last/Right",
        vo_vault_position: "Vault Position",
        vo_vault_width: "Vault Width",
        whats_new_title: "Tower Ghost for Destiny Updates"
    },
    de: {
        agility: "Agil",
        armor: "Rstg",
        best_combo: "Beste Komb.",
        cancel: "Abbrechen",
        cannot_equip: "Unbekannter Fehler beim Ausrüsten von ",
        cannot_unequip: "Keine Gegenstände mehr zum Ablegen von ",
        close_msg: "Schließen",
        disc: "Dis",
        discipline: "Dis",
        donation_instructions: "Dies ist ein nicht-kommerzielles Projekt, das Destiny gewidmet ist. Wenn dir diese App gefällt, denke doch über eine Spende nach um das Projekt am Leben zu halten.",
        donation_title: "Spenden an Tower Ghost für Destiny!",
        error_loading_inventory: "Fehler beim Laden des Inventars ",
        gear_with_highest: "Ausrüstung mit höchstem:",
        inte: "Int",
        intellect: "Int",
        invalid_transfer_amount: "Ungültige Menge eingegeben: ",
        inventory_armor: "Rüstung",
        inventory_general: "Allgemein",
        inventory_postmaster: "Post",
        inventory_postmaster_lost_items: "Verlorene Gegenstände",
        inventory_postmaster_messages: "Nachrichten",
        inventory_subclasses: "Fokusse",
        inventory_weapons: "Waffen",
        itemDefs_undefined: "Konnte Gegenstandsinformationen nicht laden, bitte melde dieses Problem bei meinem GitHub und stelle sicher, dass deine Schrift auf Englisch gestellt ist.",
        language_pack_downloaded: "Sprachpaket heruntergeladen, bitte aktualisiere um die Änderungen anzuzeigen",
        language_text: "Dies wird die Sprache für alle Gegnstände und bei manchen Sprachen das Interface verändern, weitere Sprachen werden in der Zukunft hinzugefügt.",
        light: "Licht",
        loadouts_alreadythere_pt1: " ist bereits im ",
        loadouts_alreadythere_pt2: "'s Bucket von ",
        loadouts_delete: "Löschen",
        loadouts_desktop: "prüfen",
        loadouts_instructions: "Keine Gegenstände in der Ausrüstung, klicke Gegenstände um sie hinzuzufügen, ",
        loadouts_instructions_contd: " zum Ausrüsten.",
        loadouts_invalidbucket: " wird nicht verschoben. Wegen diesem Bucket: ",
        loadouts_mobile: "halten",
        loadouts_no_replacement: " wird nicht verschoben. Es gibt keinen Gegenstand als Ersatz.",
        loadouts_no_transfer: " wird nicht verschoben",
        loadouts_outofspace: " wird nicht verschoben, es ist kein Platz in ",
        loadouts_save: "Speichern",
        loadouts_save_new: "Speichern Als",
        loadouts_swap: " wird ausgetauscht mit ",
        loadouts_to_equip: " wird ausgerüstet.",
        loadouts_to_moveequip: " wird verschoben und ausgerüstet.",
        loadouts_to_transfer: " wird verschoben",
        loadouts_transfer: "Übertragen",
        loadouts_transfer_confirm: "Übertragungsbestätigung",
        loadouts_transferred: "<strong>Gegenstände erfolgreich übertragen</strong><br> Wenn dir diese App gefällt, vergiss nicht <a style=\"color:#3080CF; cursor:pointer;\" class=\"donateLink\" target=\"_system\">mir ein Bier zu kaufen</a>",
        login_authenticating_pt1: "Bei Bungie einloggen... Bitte habe ein wenig Geduld.",
        login_authenticating_pt2: "Wenn der Login Bildschirm für länger als 2 Minuten bleibt, nutze diese Links für",
        login_authenticating_pt3: "um das Einloggen erneut zu versuchen. Wenn das Problem weiterhin besteht, installiere die App erneut.",
        login_help: "Bitte warte bis sich das Loginfenster von selbst schließt, während TGD deine Daten vorbereitet.",
        login_instructions: "Zu Beginn musst du dich bei deinem Bungie.net Account einloggen via:",
        login_loading_inventory: "Bitte warten, lade Arsenal von Bungie",
        login_loading_updates: "Bitte warten, lade automatische Updates",
        login_title: "Willkommen bei Tower Ghost für Destiny!",
        menu_about: "Über",
        menu_advancedtooltips: "Erweiterte Tooltips",
        menu_all: "Alle",
        menu_autorefresh: "Automatisch Aktualiseren (5 min)",
        menu_autotransfer: "Stacks Automatisch Übertragen",
        menu_clear: "Filter Zurücksetzen",
        menu_damage: "Schaden",
        menu_destinydbmode: "DestinyDB Modus",
        menu_destinydbtooltips: "DestinyDB Tooltips",
        menu_destinystatus: "DestinyStatus Bericht",
        menu_destinytrials: "DestinyTrials Bericht",
        menu_destinytracker: "DestinyTracker Bericht",
        menu_destinyguardiangg: "Guardian.GG Bericht",
        menu_donate: "Spenden",
        menu_filter_by: "Filtern",
        menu_filter_by_subclass_eq: "Unterklasse ausgerüstet",
        menu_filter_by_weapon_eq: "Waffen ausgerüstet",
        menu_filter_for_class: "Filter nach Klasse",
        menu_help: "Hilfe",
        menu_language: "Sprache",
        menu_loadouts: "Ausrüstungen",
        menu_loadouts_create: "Erstellen",
        menu_padheight: "Automatische Feldhöhe",
        menu_progress: "Fortschritt",
        menu_progress_1: "Fehlende Perks",
        menu_progress_2: "Volle Perks",
        menu_progress_3: "Voll",
        menu_refresh: "Aktualisieren",
        menu_set: "Setzen",
        menu_set_showduplicates: "Doppelte anzeigen",
        menu_set_showmissing: "Fehlende anzeigen",
        menu_settings: "Einstellungen",
        menu_shareurl: "URL mit Freunden teilen",
        menu_sortby: "Sortieren",
        menu_sortby_damage: "Schadenstyp",
        menu_sortby_lightlvl: "Licht Level",
        menu_sortby_name: "Name",
        menu_sortby_type: "Typ",
        menu_sortby_tier_type: "Seltenheit, Typ",
        menu_tier: "Seltenheit",
        menu_useps: "Playstation Account Verwenden",
        menu_usexbox: "Xbox Account Verwenden",
        menu_view: "Anzeige",
        menu_view_armor: "Rüstung",
        menu_view_by: "Anzeigen nach",
        menu_view_by_lightlvl: "Licht Level",
        menu_view_by_stat_points: "Komb Stat Pkte",
        menu_view_general: "Allgemein",
        menu_view_options: "Optionen Anzeigen",
        menu_view_weapons: "Waffen",
        missing_items: "Fehlende Gegenstände",
        most_points: "Meisten Punkte",
        movepopup_equip: "Ausrüsten",
        movepopup_extras: "Extras",
        movepopup_move: "Verschieben",
        movepopup_store: "Lagern",
        movepopup_vault: "Tresor",
        normalize_title: "Normalisieren - Gegenstände gleichmäßig über deine Charaktere verteilen",
        paypal_code: "DE",
        pick_a_set: "Bitte wähle ein Set bevor du diese Option auswählst",
        recovery: "Erhlg",
        str: "Stä",
        strength: "Stä",
        text_shareurl: "Dein Inventar wird aktualisiert, indem du erneut auf URL teilen im Menü klickst.",
        this_icon: "Das Icon ist",
        tier_common: "Gewöhnlich",
        tier_exotic: "Exotisch",
        tier_legendary: "Legendär",
        tier_rare: "Selten",
        tier_uncommon: "Ungewöhnlich",
        transfer: "Übertrage",
        transfer_all: "Alle",
        transfer_amount: "Menge Übertragen",
        transfer_ask: "Nicht erneut fragen",
        transfer_consolidate: "Zusammenlegen (von allen Charakteren",
        transfer_one: "Eins",
        unable_create_loadout_for_type: "Es ist aktuell nicht möglich Ausrüstungen mit diesem Gegenstand zu erstellen.",
        unable_to_create_loadout_for_bucket: "Du kannst keine Ausrüstung mit mehr als 10 Gegenständen in diesem Platz erstellen: ",
        unable_to_move_bucketitems: "Gegenstände in diesem Bucket können nicht mit dem API übertragen werden.",
        unable_unequip: "Ablegen unmöglich von ",
        vo_container_width: "Container Breite",
        vo_layout_mode: "Layout Modus",
        vo_layout_mode_cust: "Angepasst",
        vo_layout_mode_def: "Standard",
        vo_number_of_columns: "Spalten",
        vo_vault_columns: "Tresor Spalten",
        vo_vault_first: "Erste/Links",
        vo_vault_last: "Letzte/Rechts",
        vo_vault_position: "Tresor Position",
        vo_vault_width: "Tresor Breite",
        whats_new_title: "Tower Ghost für Destiny Updates"
    },
    es: {
        agility: "Agility",
        armor: "Armor",
        best_combo: "Best Combo",
        cancel: "Cancelar",
        cannot_equip: "Error desconocido tratando de equipar ",
        cannot_unequip: "No mas elementos para tratar de unequip la ",
        close_msg: "Cerrar",
        disc: "Disc",
        discipline: "Discipline",
        donation_instructions: "Este es un projecto non-commercial dedicado para Destiny. Si usted disfurat esta aplicacion proveve una donacion para supportar los gastos.",
        donation_title: "Donaciones para Tower Ghost for Destiny!",
        error_loading_inventory: "Error cargando inventario",
        gear_with_highest: "Equip Gear With Highest:",
        inte: "Int",
        intellect: "Intellect",
        invalid_transfer_amount: "Cantidad no valida entrada: ",
        inventory_armor: "Armadura",
        inventory_general: "General",
        inventory_postmaster: "Post Master",
        inventory_postmaster_lost_items: "Lost Items",
        inventory_postmaster_messages: "Messages",
        inventory_subclasses: "Subclases",
        inventory_weapons: "Armas",
        itemDefs_undefined: "Por favor informar el asunto a mi Github y asegurese de que su fuente se establece en Ingles.",
        language_pack_downloaded: "Language Pack downloaded, please refresh to see the changes",
        language_text: "Esto cambiara el lenguage de la aplicacion y de los articulos.",
        light: "Light",
        loadouts_alreadythere_pt1: " ya esta en el ",
        loadouts_alreadythere_pt2: "'s cubo de ",
        loadouts_delete: "Borrar",
        loadouts_desktop: "cheque",
        loadouts_instructions: "No hay articulos en loadout, haga clic en los articulos a anadir, ",
        loadouts_instructions_contd: " para equipar.",
        loadouts_invalidbucket: " no sera trasladado, Debido a este cubo: ",
        loadouts_mobile: "sostener",
        loadouts_no_replacement: " no sera trasladado. No hay otro para reemplazarlo.",
        loadouts_no_transfer: " no sera trasladado",
        loadouts_outofspace: " no sera trasladado, no hay espacio en ",
        loadouts_save: "Guardar",
        loadouts_save_new: "Guardar Como",
        loadouts_swap: " sera intercambiado con ",
        loadouts_to_equip: " sera equipado.",
        loadouts_to_moveequip: " sera trasladado y equipado.",
        loadouts_to_transfer: " sera trasladado",
        loadouts_transfer: "Transferir",
        loadouts_transfer_confirm: "Confirmar Transferencia",
        loadouts_transferred: "<strong>Articulo(s) transferido con exito</strong><br> Si te gusta esta aplicacion, puedes <a style=\"color:#3080CF; cursor:pointer;\" class=\"donateLink\" target=\"_system\">comprarme una cervezita.</a>",
        login_authenticating_pt1: "Logging into Bungie... Please be patient.",
        login_authenticating_pt2: "If log in screen remains for 2+ minutes, use these links for",
        login_authenticating_pt3: "to retry login. If the problem persists, reinstall the app.",
        login_help: "Por favor, espere a que la ventana se cerra. TGD han preparado su informacion.",
        login_instructions: "Para empezar tendras que acceder a su cuenta a traves de Bungie.net:",
        login_loading_inventory: "Por favor espere, cargando arsenal de Bungie",
        login_loading_updates: "Please wait, downloading auto updates",
        login_title: "Bienvenido a Tower Ghost para Destiny!",
        menu_about: "Acerca De",
        menu_advancedtooltips: "Advanced Tooltips",
        menu_all: "Todo",
        menu_autorefresh: "Auto Refrescar (5 min)",
        menu_autotransfer: "Auto Mover Pilas",
        menu_clear: "Aclaro Filtro",
        menu_damage: "Da\xF1o",
        menu_destinydbmode: "DestinyDB Modo",
        menu_destinydbtooltips: "DestinyDB Tooltips",
        menu_destinystatus: "DestinyStatus Reporte",
        menu_destinytrials: "DestinyTrials Reporte",
        menu_destinytracker: "DestinyTracker Reporte",
        menu_destinyguardiangg: "Guardian.GG Reporte",
        menu_donate: "Donar",
        menu_filter_by: "Filter By",
        menu_filter_by_subclass_eq: "Subclass Equipped",
        menu_filter_by_weapon_eq: "Weapons Equipped",
        menu_filter_for_class: "Filter for Class",
        menu_help: "Ayuda",
        menu_language: "Language",
        menu_loadouts: "Loadouts",
        menu_loadouts_create: "Crear",
        menu_padheight: "Auto Adjusto Altura",
        menu_progress: "Progreso",
        menu_progress_1: "Falta Perks",
        menu_progress_2: "Completo Perks",
        menu_progress_3: "Al Maxmimo",
        menu_refresh: "Refrescar (seg.)",
        menu_set: "Conjunto",
        menu_set_showduplicates: "Monstrar articulos duplicados",
        menu_set_showmissing: "Monstrar articulos que faltan",
        menu_settings: "Ajustes",
        menu_shareurl: "Compartir Con Amigos",
        menu_sortby: "Sort By",
        menu_sortby_damage: "Damage Type",
        menu_sortby_lightlvl: "Light Level",
        menu_sortby_name: "Name",
        menu_sortby_type: "Type",
        menu_sortby_tier_type: "Tier, Type",
        menu_tier: "Nivel",
        menu_useps: "Usa Playstation Cuenta",
        menu_usexbox: "Usa Xbox Cuenta",
        menu_view: "Vista",
        menu_view_armor: "Armaduras",
        menu_view_by: "View By",
        menu_view_by_lightlvl: "Light Level",
        menu_view_by_stat_points: "Combined Stat Points",
        menu_view_general: "General",
        menu_view_options: "Opciones de Vista",
        menu_view_weapons: "Armas",
        missing_items: "Articulos que faltan",
        most_points: "Most Points",
        movepopup_equip: "equipar",
        movepopup_extras: "extras",
        movepopup_move: "Mover a",
        movepopup_store: "almacenar",
        movepopup_vault: "bodega",
        normalize_title: "Normalizar - igualmente distribuir tema a traves de sus personajes",
        paypal_code: "ES",
        pick_a_set: "Por favor elija un Set antes de seleccionar esta opcion",
        recovery: "Recovery",
        str: "Str",
        strength: "Strength",
        text_shareurl: "Tu iventoria es actualizado cuando hagas click a Compartir URL denuevo.",
        this_icon: "Este icono es ",
        tier_common: "Com\xFAn",
        tier_exotic: "Ex\xF3tico",
        tier_legendary: "Legendario",
        tier_rare: "Raro",
        tier_uncommon: "Poco com\xFAn",
        transfer: "Transfer",
        transfer_all: "Todos",
        transfer_amount: "Transferencia monto",
        transfer_ask: "Don\'t ask in the future",
        transfer_consolidate: "Consolidate (pull from all characters",
        transfer_one: "Uno",
        unable_create_loadout_for_type: "Actualmente no se puede crear loadouts con este tipo de elemento.",
        unable_to_create_loadout_for_bucket: "No se puede crear un loadout con mas de 10 articulos en esta ranura: ",
        unable_to_move_bucketitems: "Post Master no pueden ser transferidos con el programa.",
        unable_unequip: "Incapaz de inequippar ",
        vo_container_width: "Container Width",
        vo_layout_mode: "Layout Mode",
        vo_layout_mode_cust: "Custom",
        vo_layout_mode_def: "Default",
        vo_number_of_columns: "# de Columnas",
        vo_vault_columns: "Vault Columns",
        vo_vault_first: "Primero/Izquierda",
        vo_vault_last: "Ultimo/Derecha",
        vo_vault_position: "Position de Bodega",
        vo_vault_width: "Vault Width",
        whats_new_title: "Tower Ghost for Destiny Noticias"
    },
    fr: {
        agility: "Agility",
        armor: "Armor",
        best_combo: "Best Combo",
        cancel: "Cancel",
        cannot_equip: "Erreur inconnue essayant d'quiper ",
        cannot_unequip: "Peu plus d'lments pour tenter de dsquiper le ",
        close_msg: "Fermer",
        disc: "Disc",
        discipline: "Discipline",
        donation_instructions: "Ceci est un projet non commercial dédié au Destiny. Si vous aimez ce soft fournir un don de garder ce projet en vie et soutenir les coûts de maintenance.",
        donation_title: "Dons pour Tower Ghost for Destiny!",
        error_loading_inventory: "Erreur inventaire de chargement",
        gear_with_highest: "Equip Gear With Highest:",
        inte: "Int",
        intellect: "Intellect",
        invalid_transfer_amount: "Le montant indiqu est incorrect: ",
        inventory_armor: "Armure",
        inventory_general: "General",
        inventory_postmaster: "Commis des postes",
        inventory_postmaster_lost_items: "Objets Perdus",
        inventory_postmaster_messages: "Messages",
        inventory_subclasses: "Sous Classes",
        inventory_weapons: "Armes",
        itemDefs_undefined: "S'il vous plat signaler le problme  mon Github et assurez-vous que votre police est l'anglais.",
        language_pack_downloaded: "Language Pack téléchargé, s'il vous plaît rafraîchir pour voir les changements",
        language_text: "Cela va changer la langue pour tous les articles et l'interface pour certaines langues, d'autres langues seront ajoutées dans le futur.",
        light: "Light",
        loadouts_alreadythere_pt1: " is already in the ",
        loadouts_alreadythere_pt2: "'s bucket of ",
        loadouts_delete: "Rayer",
        loadouts_desktop: "check",
        loadouts_instructions: "No items in loadout, click items to add, ",
        loadouts_instructions_contd: " to equip.",
        loadouts_invalidbucket: " will not be moved. Because of this bucket: ",
        loadouts_mobile: "hold",
        loadouts_no_replacement: " will not be moved. There is no item to replace it.",
        loadouts_no_transfer: " will not be moved",
        loadouts_outofspace: " will not be moved, there is no space in ",
        loadouts_save: "Sauver",
        loadouts_save_new: "Sauver As",
        loadouts_swap: " will be swapped with ",
        loadouts_to_equip: " will be equipped.",
        loadouts_to_moveequip: " will be moved and equipped.",
        loadouts_to_transfer: " will be moved",
        loadouts_transfer: "Transfert",
        loadouts_transfer_confirm: "Transfer Confirm",
        loadouts_transferred: "<strong>Articles transféré avec succès</strong><br> Si vous aimez ce soft pensez à <a style=\"color:#3080CF; cursor:pointer;\" class=\"donateLink\" target=\"_system\">achetez-moi une bière</a>",
        login_authenticating_pt1: "Logging into Bungie... Please be patient.",
        login_authenticating_pt2: "If log in screen remains for 2+ minutes, use these links for",
        login_authenticating_pt3: "to retry login. If the problem persists, reinstall the app.",
        login_help: "S'il vous plaît attendre la fenêtre de connexion à proximité de l'automobile comme TGD prépare vos informations.",
        login_instructions: "Pour commencer, vous aurez besoin pour vous connecter à votre compte Bungie.net via:",
        login_loading_inventory: "Please wait, loading arsenal from Bungie",
        login_loading_updates: "Please wait, downloading auto updates",
        login_title: "Bienvenue à Tower Ghost for Destiny!",
        menu_about: "Propos",
        menu_advancedtooltips: "Advanced Tooltips",
        menu_view_by: "View By",
        menu_view_by_lightlvl: "Light Level",
        menu_view_by_stat_points: "Combined Stat Points",
        menu_all: "Tout",
        menu_autorefresh: "Auto Actualiser (5 min)",
        menu_autotransfer: "Auto transfert s'entasser",
        menu_clear: "Filtres effacer",
        menu_damage: "Dommages",
        menu_destinydbmode: "DestinyDB Mode",
        menu_destinydbtooltips: "DestinyDB infobulles",
        menu_destinystatus: "DestinyStatus Report",
        menu_destinytrials: "DestinyTrials Report",
        menu_destinytracker: "DestinyTracker Report",
        menu_destinyguardiangg: "Guardian.GG Report",
        menu_donate: "Don",
        menu_filter_by: "Filter By",
        menu_filter_by_subclass_eq: "Subclass Equipped",
        menu_filter_by_weapon_eq: "Weapons Equipped",
        menu_filter_for_class: "Filter for Class",
        menu_help: "Aide",
        menu_language: "Language",
        menu_loadouts: "Loadouts",
        menu_loadouts_create: "Crer",
        menu_padheight: "Auto Pad Hauteur",
        menu_progress: "Progrs",
        menu_progress_1: "Missing Perks",
        menu_progress_2: "Missing Border",
        menu_progress_3: "Maxed",
        menu_refresh: "Actualisez (segundos)",
        menu_set: "Ensemble",
        menu_set_showduplicates: "Afficher les doublons d'objets",
        menu_set_showmissing: "Afficher les lments manquants",
        menu_settings: "Paramètres",
        menu_shareurl: "Partager URL",
        menu_sortby: "Sort By",
        menu_sortby_damage: "Damage Type",
        menu_sortby_lightlvl: "Light Level",
        menu_sortby_name: "Name",
        menu_sortby_type: "Type",
        menu_sortby_tier_type: "Tier, Type",
        menu_tier: "chelon",
        menu_useps: "Utiliser Playstation un compte",
        menu_usexbox: "Utiliser Xbox un compte",
        menu_view: "Voir",
        menu_view_armor: "Armure",
        menu_view_general: "General",
        menu_view_options: "Options d'affichage",
        menu_view_weapons: "Armes",
        missing_items: "Articles manquant",
        most_points: "Most Points",
        movepopup_equip: "équiper",
        movepopup_extras: "extras",
        movepopup_move: "Bouger",
        movepopup_store: "dépôt",
        movepopup_vault: "voûte",
        normalize_title: "Normalizar - igualmente distribuir tema a travs de sus personajes",
        paypal_code: "FR",
        pick_a_set: "S'il vous plat choisir un ensemble avant de choisir cette option",
        recovery: "Recovery",
        str: "Str",
        strength: "Strength",
        text_shareurl: "Votre inventaire est mis à jour en cliquant sur Partager URL dans le menu à nouveau.",
        this_icon: "Cette icne est ",
        tier_common: "Common",
        tier_exotic: "Exotic",
        tier_legendary: "Legendary",
        tier_rare: "Rare",
        tier_uncommon: "Uncommon",
        transfer: "Transfer",
        transfer_all: "Tous",
        transfer_amount: "Transferencia monto",
        transfer_ask: "Don\'t ask in the future",
        transfer_consolidate: "Consolidate (pull from all characters",
        transfer_one: "Un",
        unable_create_loadout_for_type: "Actuellement incapable de crer loadouts avec ce type d'article",
        unable_to_create_loadout_for_bucket: "Vous ne pouvez pas crer un loadout avec plus de 10 articles dans cette fente: ",
        unable_to_move_bucketitems: "Articles matre de poste ne peuvent tre transfrs avec l'API.",
        unable_unequip: "Impossible de dsquiper ",
        vo_container_width: "Container Width",
        vo_layout_mode: "Layout Mode",
        vo_layout_mode_cust: "Custom",
        vo_layout_mode_def: "Default",
        vo_number_of_columns: "Number of Columns",
        vo_vault_columns: "Vault Columns",
        vo_vault_first: "First/Left",
        vo_vault_last: "Last/Right",
        vo_vault_position: "Vault Position",
        vo_vault_width: "Vault Width",
        whats_new_title: "Tower Ghost for Destiny Nouvelles"
    },
    it: {
        agility: "Agility",
        armor: "Armor",
        best_combo: "Best Combo",
        cancel: "Cancel",
        cannot_equip: "Unknown error trying to equip ",
        cannot_unequip: "No more items to try to unequip the ",
        close_msg: "Close",
        disc: "Disc",
        discipline: "Discipline",
        donation_instructions: "This is a non-commercial project dedicated to Destiny. If you like this app provide a donation to keep this project alive and support the maintenance costs.",
        donation_title: "Donations for Tower Ghost for Destiny!",
        error_loading_inventory: "Error loading inventory ",
        gear_with_highest: "Equip Gear With Highest:",
        inte: "Int",
        intellect: "Intellect",
        invalid_transfer_amount: "Invalid amount entered: ",
        inventory_armor: "Armor",
        inventory_general: "General",
        inventory_postmaster: "Post Master",
        inventory_postmaster_messages: "Messages",
        inventory_postmaster_lost_items: "Lost Items",
        inventory_subclasses: "Sub Classes",
        inventory_weapons: "Weapons",
        itemDefs_undefined: "Could not load item definitions, please report the issue to my Github including the version number being used.",
        language_pack_downloaded: "Language Pack downloaded, please refresh to see the changes",
        language_text: "This will change the language for all items and the interface for some languages, more languages will be added in the future.",
        light: "Light",
        loadouts_alreadythere_pt1: " is already in the ",
        loadouts_alreadythere_pt2: "'s bucket of ",
        loadouts_delete: "Delete",
        loadouts_desktop: "check",
        loadouts_instructions: "No items in loadout, click items to add, ",
        loadouts_instructions_contd: " to equip.",
        loadouts_invalidbucket: " will not be moved. Because of this bucket: ",
        loadouts_mobile: "hold",
        loadouts_no_replacement: " will not be moved. There is no item to replace it.",
        loadouts_no_transfer: " will not be moved",
        loadouts_outofspace: " will not be moved, there is no space in ",
        loadouts_save: "Save",
        loadouts_save_new: "Save As",
        loadouts_swap: " will be swapped with ",
        loadouts_to_equip: " will be equipped.",
        loadouts_to_moveequip: " will be moved and equipped.",
        loadouts_to_transfer: " will be moved",
        loadouts_transfer: "Transfer",
        loadouts_transfer_confirm: "Transfer Confirm",
        loadouts_transferred: "<strong>Item(s) Transferred!</strong><br>If you like this app remember to <a style=\"color:#3080CF; cursor:pointer;\" class=\"donateLink\" target=\"_system\">buy me a beer</a>.",
        login_authenticating_pt1: "Logging into Bungie... Please be patient.",
        login_authenticating_pt2: "If log in screen remains for 2+ minutes, use these links for",
        login_authenticating_pt3: "to retry login. If the problem persists, reinstall the app.",
        login_help: "Please wait for the login window to auto close as TGD prepares your information.",
        login_instructions: "To get started you'll need to log in to your Bungie.net account via:",
        login_loading_inventory: "Please wait, loading arsenal from Bungie",
        login_loading_updates: "Please wait, downloading auto updates",
        login_title: "Welcome to Tower Ghost for Destiny!",
        menu_about: "About",
        menu_advancedtooltips: "Advanced Tooltips",
        menu_all: "All",
        menu_autorefresh: "Auto Refresh (5 min)",
        menu_autotransfer: "Auto Transfer Stacks",
        menu_clear: "Clear Filters",
        menu_destinydbtooltips: "DestinyDB Tooltips",
        menu_destinydbmode: "DestinyDB Mode",
        menu_destinystatus: "DestinyStatus Report",
        menu_destinytrials: "DestinyTrials Report",
        menu_destinytracker: "DestinyTracker Report",
        menu_destinyguardiangg: "Guardian.GG Report",
        menu_damage: "Damage",
        menu_donate: "Donate",
        menu_filter_by: "Filter By",
        menu_filter_by_subclass_eq: "Subclass Equipped",
        menu_filter_by_weapon_eq: "Weapons Equipped",
        menu_filter_for_class: "Filter for Class",
        menu_help: "Help",
        menu_language: "Language",
        menu_loadouts: "Loadouts",
        menu_loadouts_create: "Create",
        menu_padheight: "Auto Pad Height",
        menu_progress: "Progress",
        menu_progress_1: "Missing Perks",
        menu_progress_2: "Missing Border",
        menu_progress_3: "Maxed",
        menu_refresh: "Refresh (secs)",
        menu_set: "Set",
        menu_set_showmissing: "Show Missing Items",
        menu_set_showduplicates: "Show Duplicate Items",
        menu_settings: "Settings",
        menu_shareurl: "Share URL with friends",
        menu_sortby: "Sort By",
        menu_sortby_damage: "Damage Type",
        menu_sortby_lightlvl: "Light Level",
        menu_sortby_name: "Name",
        menu_sortby_type: "Type",
        menu_sortby_tier_type: "Tier, Type",
        menu_tier: "Tier",
        menu_usexbox: "Use Xbox Account",
        menu_useps: "Use Playstation Account",
        menu_view: "View",
        menu_view_armor: "Armor",
        menu_view_by: "View By",
        menu_view_by_lightlvl: "Light Level",
        menu_view_by_stat_points: "Combined Stat Points",
        menu_view_general: "General",
        menu_view_options: "View Options",
        menu_view_weapons: "Weapons",
        missing_items: "Missing Items",
        most_points: "Most Points",
        movepopup_move: "Move",
        movepopup_store: "store",
        movepopup_equip: "equip",
        movepopup_vault: "vault",
        movepopup_extras: "extras",
        normalize_title: "Normalize - equally distribute item across your characters",
        paypal_code: "EN",
        pick_a_set: "Please pick a Set before selecting this option",
        recovery: "Recovery",
        str: "Str",
        strength: "Strength",
        text_shareurl: "Your inventory is updated by clicking on Share URL from the menu again.",
        this_icon: "This icon is ",
        tier_common: "Common",
        tier_exotic: "Exotic",
        tier_legendary: "Legendary",
        tier_rare: "Rare",
        tier_uncommon: "Uncommon",
        transfer: "Transfer",
        transfer_all: "All",
        transfer_amount: "Transfer Amount",
        transfer_ask: "Don\'t ask in the future",
        transfer_consolidate: "Consolidate (pull from all characters",
        transfer_one: "One",
        unable_create_loadout_for_type: "Currently unable to create loadouts with this item type.",
        unable_unequip: "Unable to unequip ",
        unable_to_create_loadout_for_bucket: "You cannot create a loadout with more than 10 items in this slot: ",
        unable_to_move_bucketitems: "This item cannot be transferred with the API.",
        vo_container_width: "Container Width",
        vo_layout_mode: "Vault Mode",
        vo_layout_mode_cust: "Custom",
        vo_layout_mode_def: "Default",
        vo_number_of_columns: "Number of Columns",
        vo_vault_columns: "Vault Columns",
        vo_vault_first: "First/Left",
        vo_vault_last: "Last/Right",
        vo_vault_position: "Vault Position",
        vo_vault_width: "Vault Width",
        whats_new_title: "Tower Ghost for Destiny Updates"
    },
    ja: {
        agility: "Agility",
        armor: "Armor",
        best_combo: "Best Combo",
        cancel: "Cancel",
        cannot_equip: "Unknown error trying to equip ",
        cannot_unequip: "No more items to try to unequip the ",
        close_msg: "Close",
        disc: "Disc",
        discipline: "Discipline",
        donation_instructions: "This is a non-commercial project dedicated to Destiny. If you like this app provide a donation to keep this project alive and support the maintenance costs.",
        donation_title: "Donations for Tower Ghost for Destiny!",
        error_loading_inventory: "Error loading inventory ",
        gear_with_highest: "Equip Gear With Highest:",
        inte: "Int",
        intellect: "Intellect",
        invalid_transfer_amount: "Invalid amount entered: ",
        inventory_armor: "Armor",
        inventory_general: "General",
        inventory_postmaster: "Post Master",
        inventory_postmaster_messages: "Messages",
        inventory_postmaster_lost_items: "Lost Items",
        inventory_subclasses: "Sub Classes",
        inventory_weapons: "Weapons",
        itemDefs_undefined: "Could not load item definitions, please report the issue to my Github including the version number being used.",
        language_pack_downloaded: "Language Pack downloaded, please refresh to see the changes",
        language_text: "This will change the language for all items and the interface for some languages, more languages will be added in the future.",
        light: "Light",
        loadouts_alreadythere_pt1: " is already in the ",
        loadouts_alreadythere_pt2: "'s bucket of ",
        loadouts_delete: "Delete",
        loadouts_desktop: "check",
        loadouts_instructions: "No items in loadout, click items to add, ",
        loadouts_instructions_contd: " to equip.",
        loadouts_invalidbucket: " will not be moved. Because of this bucket: ",
        loadouts_mobile: "hold",
        loadouts_no_replacement: " will not be moved. There is no item to replace it.",
        loadouts_no_transfer: " will not be moved",
        loadouts_outofspace: " will not be moved, there is no space in ",
        loadouts_save: "Save",
        loadouts_save_new: "Save As",
        loadouts_swap: " will be swapped with ",
        loadouts_to_equip: " will be equipped.",
        loadouts_to_moveequip: " will be moved and equipped.",
        loadouts_to_transfer: " will be moved",
        loadouts_transfer: "Transfer",
        loadouts_transfer_confirm: "Transfer Confirm",
        loadouts_transferred: "<strong>Item(s) Transferred!</strong><br>If you like this app remember to <a style=\"color:#3080CF; cursor:pointer;\" class=\"donateLink\" target=\"_system\">buy me a beer</a>.",
        login_authenticating_pt1: "Logging into Bungie... Please be patient.",
        login_authenticating_pt2: "If log in screen remains for 2+ minutes, use these links for",
        login_authenticating_pt3: "to retry login. If the problem persists, reinstall the app.",
        login_help: "Please wait for the login window to auto close as TGD prepares your information.",
        login_instructions: "To get started you'll need to log in to your Bungie.net account via:",
        login_loading_inventory: "Please wait, loading arsenal from Bungie",
        login_loading_updates: "Please wait, downloading auto updates",
        login_title: "Welcome to Tower Ghost for Destiny!",
        menu_about: "About",
        menu_advancedtooltips: "Advanced Tooltips",
        menu_all: "All",
        menu_autorefresh: "Auto Refresh (5 min)",
        menu_autotransfer: "Auto Transfer Stacks",
        menu_clear: "Clear Filters",
        menu_destinydbtooltips: "DestinyDB Tooltips",
        menu_destinydbmode: "DestinyDB Mode",
        menu_destinystatus: "DestinyStatus Report",
        menu_destinytrials: "DestinyTrials Report",
        menu_destinytracker: "DestinyTracker Report",
        menu_destinyguardiangg: "Guardian.GG Report",
        menu_damage: "Damage",
        menu_donate: "Donate",
        menu_filter_by: "Filter By",
        menu_filter_by_subclass_eq: "Subclass Equipped",
        menu_filter_by_weapon_eq: "Weapons Equipped",
        menu_filter_for_class: "Filter for Class",
        menu_help: "Help",
        menu_language: "Language",
        menu_loadouts: "Loadouts",
        menu_loadouts_create: "Create",
        menu_padheight: "Auto Pad Height",
        menu_progress: "Progress",
        menu_progress_1: "Missing Perks",
        menu_progress_2: "Missing Border",
        menu_progress_3: "Maxed",
        menu_refresh: "Refresh (secs)",
        menu_set: "Set",
        menu_set_showmissing: "Show Missing Items",
        menu_set_showduplicates: "Show Duplicate Items",
        menu_settings: "Settings",
        menu_shareurl: "Share URL with friends",
        menu_sortby: "Sort By",
        menu_sortby_damage: "Damage Type",
        menu_sortby_lightlvl: "Light Level",
        menu_sortby_name: "Name",
        menu_sortby_type: "Type",
        menu_sortby_tier_type: "Tier, Type",
        menu_tier: "Tier",
        menu_usexbox: "Use Xbox Account",
        menu_useps: "Use Playstation Account",
        menu_view: "View",
        menu_view_armor: "Armor",
        menu_view_by: "View By",
        menu_view_by_lightlvl: "Light Level",
        menu_view_by_stat_points: "Combined Stat Points",
        menu_view_general: "General",
        menu_view_options: "View Options",
        menu_view_weapons: "Weapons",
        missing_items: "Missing Items",
        most_points: "Most Points",
        movepopup_move: "Move",
        movepopup_store: "store",
        movepopup_equip: "equip",
        movepopup_vault: "vault",
        movepopup_extras: "extras",
        normalize_title: "Normalize - equally distribute item across your characters",
        paypal_code: "EN",
        pick_a_set: "Please pick a Set before selecting this option",
        recovery: "Recovery",
        str: "Str",
        strength: "Strength",
        text_shareurl: "Your inventory is updated by clicking on Share URL from the menu again.",
        this_icon: "This icon is ",
        tier_common: "Common",
        tier_exotic: "Exotic",
        tier_legendary: "Legendary",
        tier_rare: "Rare",
        tier_uncommon: "Uncommon",
        transfer: "Transfer",
        transfer_all: "All",
        transfer_amount: "Transfer Amount",
        transfer_ask: "Don\'t ask in the future",
        transfer_consolidate: "Consolidate (pull from all characters",
        transfer_one: "One",
        unable_create_loadout_for_type: "Currently unable to create loadouts with this item type.",
        unable_unequip: "Unable to unequip ",
        unable_to_create_loadout_for_bucket: "You cannot create a loadout with more than 10 items in this slot: ",
        unable_to_move_bucketitems: "This item cannot be transferred with the API.",
        vo_container_width: "Container Width",
        vo_layout_mode: "Vault Mode",
        vo_layout_mode_cust: "Custom",
        vo_layout_mode_def: "Default",
        vo_number_of_columns: "Number of Columns",
        vo_vault_columns: "Vault Columns",
        vo_vault_first: "First/Left",
        vo_vault_last: "Last/Right",
        vo_vault_position: "Vault Position",
        vo_vault_width: "Vault Width",
        whats_new_title: "Tower Ghost for Destiny Updates"
    },
    pt: {
        agility: "Agility",
        armor: "Armor",
        best_combo: "Best Combo",
        cancel: "Cancel",
        cannot_equip: "Unknown error trying to equip ",
        cannot_unequip: "No more items to try to unequip the ",
        close_msg: "Close",
        disc: "Disc",
        discipline: "Discipline",
        donation_instructions: "This is a non-commercial project dedicated to Destiny. If you like this app provide a donation to keep this project alive and support the maintenance costs.",
        donation_title: "Donations for Tower Ghost for Destiny!",
        error_loading_inventory: "Error loading inventory ",
        gear_with_highest: "Equip Gear With Highest:",
        inte: "Int",
        intellect: "Intellect",
        invalid_transfer_amount: "Invalid amount entered: ",
        inventory_armor: "Armor",
        inventory_general: "General",
        inventory_postmaster: "Post Master",
        inventory_postmaster_messages: "Messages",
        inventory_postmaster_lost_items: "Lost Items",
        inventory_subclasses: "Sub Classes",
        inventory_weapons: "Weapons",
        itemDefs_undefined: "Could not load item definitions, please report the issue to my Github including the version number being used.",
        language_pack_downloaded: "Language Pack downloaded, please refresh to see the changes",
        language_text: "This will change the language for all items and the interface for some languages, more languages will be added in the future.",
        light: "Light",
        loadouts_alreadythere_pt1: " is already in the ",
        loadouts_alreadythere_pt2: "'s bucket of ",
        loadouts_delete: "Delete",
        loadouts_desktop: "check",
        loadouts_instructions: "No items in loadout, click items to add, ",
        loadouts_instructions_contd: " to equip.",
        loadouts_invalidbucket: " will not be moved. Because of this bucket: ",
        loadouts_mobile: "hold",
        loadouts_no_replacement: " will not be moved. There is no item to replace it.",
        loadouts_no_transfer: " will not be moved",
        loadouts_outofspace: " will not be moved, there is no space in ",
        loadouts_save: "Save",
        loadouts_save_new: "Save As",
        loadouts_swap: " will be swapped with ",
        loadouts_to_equip: " will be equipped.",
        loadouts_to_moveequip: " will be moved and equipped.",
        loadouts_to_transfer: " will be moved",
        loadouts_transfer: "Transfer",
        loadouts_transfer_confirm: "Transfer Confirm",
        loadouts_transferred: "<strong>Item(s) Transferred!</strong><br>If you like this app remember to <a style=\"color:#3080CF; cursor:pointer;\" class=\"donateLink\" target=\"_system\">buy me a beer</a>.",
        login_authenticating_pt1: "Logging into Bungie... Please be patient.",
        login_authenticating_pt2: "If log in screen remains for 2+ minutes, use these links for",
        login_authenticating_pt3: "to retry login. If the problem persists, reinstall the app.",
        login_help: "Please wait for the login window to auto close as TGD prepares your information.",
        login_instructions: "To get started you'll need to log in to your Bungie.net account via:",
        login_loading_inventory: "Please wait, loading arsenal from Bungie",
        login_loading_updates: "Please wait, downloading auto updates",
        login_title: "Welcome to Tower Ghost for Destiny!",
        menu_about: "About",
        menu_advancedtooltips: "Advanced Tooltips",
        menu_all: "All",
        menu_autorefresh: "Auto Refresh (5 min)",
        menu_autotransfer: "Auto Transfer Stacks",
        menu_clear: "Clear Filters",
        menu_destinydbtooltips: "DestinyDB Tooltips",
        menu_destinydbmode: "DestinyDB Mode",
        menu_destinystatus: "DestinyStatus Report",
        menu_destinytrials: "DestinyTrials Report",
        menu_destinytracker: "DestinyTracker Report",
        menu_destinyguardiangg: "Guardian.GG Report",
        menu_damage: "Damage",
        menu_donate: "Donate",
        menu_filter_by: "Filter By",
        menu_filter_by_subclass_eq: "Subclass Equipped",
        menu_filter_by_weapon_eq: "Weapons Equipped",
        menu_filter_for_class: "Filter for Class",
        menu_help: "Help",
        menu_language: "Language",
        menu_loadouts: "Loadouts",
        menu_loadouts_create: "Create",
        menu_padheight: "Auto Pad Height",
        menu_progress: "Progress",
        menu_progress_1: "Missing Perks",
        menu_progress_2: "Missing Border",
        menu_progress_3: "Maxed",
        menu_refresh: "Refresh (secs)",
        menu_set: "Set",
        menu_set_showmissing: "Show Missing Items",
        menu_set_showduplicates: "Show Duplicate Items",
        menu_settings: "Settings",
        menu_shareurl: "Share URL with friends",
        menu_sortby: "Sort By",
        menu_sortby_damage: "Damage Type",
        menu_sortby_lightlvl: "Light Level",
        menu_sortby_name: "Name",
        menu_sortby_type: "Type",
        menu_sortby_tier_type: "Tier, Type",
        menu_tier: "Tier",
        menu_usexbox: "Use Xbox Account",
        menu_useps: "Use Playstation Account",
        menu_view: "View",
        menu_view_armor: "Armor",
        menu_view_by: "View By",
        menu_view_by_lightlvl: "Light Level",
        menu_view_by_stat_points: "Combined Stat Points",
        menu_view_general: "General",
        menu_view_options: "View Options",
        menu_view_weapons: "Weapons",
        missing_items: "Missing Items",
        most_points: "Most Points",
        movepopup_move: "Move",
        movepopup_store: "store",
        movepopup_equip: "equip",
        movepopup_vault: "vault",
        movepopup_extras: "extras",
        normalize_title: "Normalize - equally distribute item across your characters",
        paypal_code: "EN",
        pick_a_set: "Please pick a Set before selecting this option",
        recovery: "Recovery",
        str: "Str",
        strength: "Strength",
        text_shareurl: "Your inventory is updated by clicking on Share URL from the menu again.",
        this_icon: "This icon is ",
        tier_common: "Common",
        tier_exotic: "Exotic",
        tier_legendary: "Legendary",
        tier_rare: "Rare",
        tier_uncommon: "Uncommon",
        transfer: "Transfer",
        transfer_all: "All",
        transfer_amount: "Transfer Amount",
        transfer_ask: "Don\'t ask in the future",
        transfer_consolidate: "Consolidate (pull from all characters",
        transfer_one: "One",
        unable_create_loadout_for_type: "Currently unable to create loadouts with this item type.",
        unable_unequip: "Unable to unequip ",
        unable_to_create_loadout_for_bucket: "You cannot create a loadout with more than 10 items in this slot: ",
        unable_to_move_bucketitems: "This item cannot be transferred with the API.",
        vo_container_width: "Container Width",
        vo_layout_mode: "Vault Mode",
        vo_layout_mode_cust: "Custom",
        vo_layout_mode_def: "Default",
        vo_number_of_columns: "Number of Columns",
        vo_vault_columns: "Vault Columns",
        vo_vault_first: "First/Left",
        vo_vault_last: "Last/Right",
        vo_vault_position: "Vault Position",
        vo_vault_width: "Vault Width",
        whats_new_title: "Tower Ghost for Destiny Updates"
    },
    tr: {
        agility: "Agility",
        armor: "Armor",
        best_combo: "Best Combo",
        cancel: "Vazgeç",
        cannot_equip: "Öğeyi donanırken hata oluştu ",
        cannot_unequip: "Üzerinizdekini bırakmak için öğe yok ",
        close_msg: "Kapat",
        disc: "Disc",
        discipline: "Discipline",
        donation_instructions: "Bu program tamamen ücretsiz ve Destiny ye bağışlanmış bir programdır.Herhangi bir ücret talep etmemektedir yani kelepirdir. Programımızı geliştirmek ve daha iyi bir deneyim sağlamamızı istiyorsanız,lütfen bağışlarınızı ve desteğinizi esirgemeyiniz.Teşekkürler.",
        donation_title: "Destiny ye bağışlar!",
        error_loading_inventory: "Cephaneniz yüklenirken hata oluştu ",
        gear_with_highest: "Equip Gear With Highest:",
        inte: "Int",
        intellect: "Intellect",
        invalid_transfer_amount: "Geçersiz miktar girildi: ",
        inventory_armor: "Armorlar",
        inventory_general: "Görevler",
        inventory_postmaster: "Post Master",
        inventory_postmaster_lost_items: "Kayıp Öğeler",
        inventory_postmaster_messages: "Mesajlar",
        inventory_subclasses: "Sub Klaslar",
        inventory_weapons: "Silahlar",
        itemDefs_undefined: "Öğe tanımlanamadı, lütfen bu hatayı bana ingilizce olarak GitHub sayfamdan belirtin.",
        language_pack_downloaded: "Dil paketi indirildi,lütfen yenileyin ve değişikliklere göz atın.",
        language_text: "Bu seçenek,programın bütün içeriğinin dilini değiştirecektir.Ileride programda daha fazla dil desteği olacaktır.",
        light: "Light",
        loadouts_alreadythere_pt1: "zaten bunun içerisinde ",
        loadouts_alreadythere_pt2: "'s bucket of ",
        loadouts_delete: "Sil",
        loadouts_desktop: "kontrol",
        loadouts_instructions: "Teçhizatında donanmak için öğe yok.Donanmak için tıkla, ",
        loadouts_instructions_contd: " ekle.",
        loadouts_invalidbucket: " aktarılmayacak. Çünkü seçtiğin bu öğeler yüzünden: ",
        loadouts_mobile: "tut",
        loadouts_no_replacement: " aktarılmayacak. Bu öğenin yerine koyabileceğimiz başka bir öğe yok.",
        loadouts_no_transfer: " aktarılmayacak",
        loadouts_outofspace: " aktarılmayacak, çünkü yandaki yerde yeterli alanın yok ",
        loadouts_save: "Kaydet",
        loadouts_save_new: "Kaydet As",
        loadouts_swap: " ile takas yapılacak ",
        loadouts_to_equip: " donanılacak.",
        loadouts_to_moveequip: " aktarılacak ve donanılacak.",
        loadouts_to_transfer: " aktarılacak",
        loadouts_transfer: "Transfer",
        loadouts_transfer_confirm: "Aktarmayı Onayla",
        loadouts_transferred: "<strong>Öğe(ler) başarı ile aktarıldı!</strong><br> Eğer bu kolaylık hoşunuza gittiyse,<a style=\"color:#3080CF; cursor:pointer;\" class=\"donateLink\" target=\"_system\">bana bi çay ısmarlayın</a>",
        login_authenticating_pt1: "Bungie'ye giriş yapılıyor.. Lütfen sabırlı olun :).",
        login_authenticating_pt2: "Eğer yükleme ekranı 2 dakikadan uzun sürdüyse, Yenilemek için bu linkleri kullanın",
        login_authenticating_pt3: "ve yeniden giriş yapmayı deneyin. Eğer sorun devam ederse,programı silip tekrar yükleyin.",
        login_help: "Yükleme ekranının otomatik kapanmasını bekleyiniz.Yüklendikten sonra program sizi cephanenize yönlendirecektir.",
        login_instructions: "Programı kullanabilmek için Bungie.Net hesabına giriş yapman gerekiyor:",
        login_loading_inventory: "Lütfen Bekleyin, Cephaneniz Bungie tarafından yükleniyor",
        login_loading_updates: "Please wait, downloading auto updates",
        login_title: "Tower Ghost for Destiny ye Hoşgeldiniz!",
        menu_about: "Hakkında",
        menu_advancedtooltips: "Advanced Tooltips",
        menu_all: "Hepsi",
        menu_autorefresh: "Otomatik yenileme (5 mins)",
        menu_autotransfer: "Otomatik Transfer",
        menu_clear: "Arama Filtrelerini Temizle",
        menu_damage: "Hasar Türü",
        menu_destinydbmode: "DestinyDB Modu",
        menu_destinydbtooltips: "DestinyDB Araçları",
        menu_destinystatus: "DestinyStatus Raporu",
        menu_destinytrials: "DestinyTrials Raporu",
        menu_destinytracker: "DestinyTracker Raporu",
        menu_destinyguardiangg: "Guardian.GG Raporu",
        menu_donate: "Bağış",
        menu_filter_by: "Filter By",
        menu_filter_by_subclass_eq: "Subclass Equipped",
        menu_filter_by_weapon_eq: "Weapons Equipped",
        menu_filter_for_class: "Filter for Class",
        menu_help: "Yardım",
        menu_language: "Dil",
        menu_loadouts: "Teçhizatlar",
        menu_loadouts_create: "Oluştur",
        menu_padheight: "Otomatik Ped Yüksekliği",
        menu_progress: "Ilerleme",
        menu_progress_1: "Ilerlemesi eksik olan öğeler",
        menu_progress_2: "Ilerlemesi Tam olan öğeler",
        menu_progress_3: "Maksimum olan öğeler",
        menu_refresh: "Yenile",
        menu_set: "Set",
        menu_set_showduplicates: "Birden Fazla Olan Öğeleri Göster",
        menu_set_showmissing: "Eksik Öğeleri Göster",
        menu_settings: "Ayarlar",
        menu_shareurl: "URL'yi Arkadaşlarınla paylaş",
        menu_sortby: "Sort By",
        menu_sortby_damage: "Damage Type",
        menu_sortby_lightlvl: "Light Level",
        menu_sortby_name: "Name",
        menu_sortby_type: "Type",
        menu_sortby_tier_type: "Tier, Type",
        menu_tier: "Öğe Türü",
        menu_useps: "PlayStation Hesabını Kullan",
        menu_usexbox: "Xbox Hesabını Kullan",
        menu_view: "Görüntüle",
        menu_view_armor: "Armorlar",
        menu_view_by: "View By",
        menu_view_by_lightlvl: "Light Level",
        menu_view_by_stat_points: "Combined Stat Points",
        menu_view_general: "Görevler",
        menu_view_options: "Görüntüleme Ayarları",
        menu_view_weapons: "Silahlar",
        missing_items: "Kayıp Öğeler",
        most_points: "Most Points",
        movepopup_equip: "donan",
        movepopup_extras: "ekstralar",
        movepopup_move: "taşı",
        movepopup_store: "al",
        movepopup_vault: "vault",
        normalize_title: "Normalize - bir öğeyi bütün karakterler arasında eşit olarak bölüştürür",
        paypal_code: "TR",
        pick_a_set: "Lütfen bir set seçin",
        recovery: "Recovery",
        str: "Str",
        strength: "Strength",
        text_shareurl: "Inventoriniz SHARE URL seçeneği ile tekrar yenilenebilir.",
        this_icon: "Bu ikon ",
        tier_common: "Yaygın",
        tier_exotic: "Exotic",
        tier_legendary: "Legendary",
        tier_rare: "Rare",
        tier_uncommon: "Nadir",
        transfer: "Transfer",
        transfer_all: "Hepsi",
        transfer_amount: "Aktarılacak Miktar",
        transfer_ask: "Don\'t ask in the future",
        transfer_consolidate: "Consolidate (pull from all characters",
        transfer_one: "Bir Adet",
        unable_create_loadout_for_type: "Bu öğe tipi ile teçhizat oluşturmak mümkün değil.",
        unable_to_create_loadout_for_bucket: "Bu slot içerisinde 10'dan fazla öğe ile teçhizat oluşturamazsın: ",
        unable_to_move_bucketitems: "Seçtiğin öğeler bu uygulama ile aktarılamaz.",
        unable_unequip: "Üzerinizden çıkartılamıyor ",
        vo_container_width: "Container Width",
        vo_layout_mode: "Layout Mode",
        vo_layout_mode_cust: "Custom",
        vo_layout_mode_def: "Default",
        vo_number_of_columns: "Columns",
        vo_vault_columns: "Vault Columns",
        vo_vault_first: "Ilk/Sol",
        vo_vault_last: "Son/Sağ",
        vo_vault_position: "Vault pozisyonu",
        vo_vault_width: "Vault Width",
        whats_new_title: "Tower Ghost for Destiny Güncellemeleri"
    }
};
tgd.getStoredValue = function(key) {
    var saved = "";
    if (window.localStorage && window.localStorage.getItem)
        saved = window.localStorage.getItem(key);
    if (_.isEmpty(saved)) {
        return tgd.defaults[key];
    } else {
        return saved;
    }
};

tgd.StoreObj = function(key, compare, writeCallback) {
    var value = ko.observable(compare ? tgd.getStoredValue(key) == compare : tgd.getStoredValue(key));
    this.read = function() {
        return value();
    };
    this.write = function(newValue) {
        window.localStorage.setItem(key, newValue);
        value(newValue);
        if (writeCallback) writeCallback(newValue);
    };
};
(function() {

    tgd.localLog("init auto updates");
    try {

        // Check for Cordova
        var isCordova = typeof cordova !== 'undefined',
            // CordovaPromiseFS
            fs,
            // CordovaFileLoader
            loader,
            // script-tag...
            script,
            // ...that contains the serverRoot
            serverRoot;

        // Get serverRoot from script tag.
        script = document.querySelector('script[server]');
        if (script) serverRoot = script.getAttribute('server');
        if (!serverRoot) {
            throw new Error('Add a "server" attribute to the bootstrap.js script!');
        }

        // Initialize filesystem and loader
        fs = new CordovaPromiseFS({
            persistent: isCordova || isFirefox, // Chrome should use temporary storage.
            Promise: Promise
        });

        tgd.loader = new CordovaAppLoader({
            fs: fs,
            localRoot: 'app',
            serverRoot: serverRoot,
            mode: 'mirror',
            cacheBuster: true,
            checkTimeout: 30 * 1000
        });

        // Check > Download > Update
        tgd.checkUpdates = function() {
            $.toaster({
                priority: 'info',
                title: 'Info',
                message: "Checking for updates",
                settings: {
                    timeout: tgd.defaults.toastTimeout
                }
            });
            tgd.loader.check(serverRoot + "bootstrap.json?locale=" + (localStorage.appLocale || localStorage.locale || "en"))
                .then(function(updateAvailable) {
                    if (updateAvailable) {
                        $.toaster({
                            priority: 'info',
                            title: 'Info',
                            message: "Downloading updates",
                            settings: {
                                timeout: tgd.defaults.toastTimeout
                            }
                        });
                        tgd.localLog("Downloading auto updates");
                        $("#tgdLoader").show();
                    }
                    return tgd.loader.download(function(progress) {
                        $("#tgdLoaderProgress").width((progress.percentage * 100).toFixed(0) + "%");
                    });
                })
                .catch(function(e) {
                    $("#tgdLoader").hide();
                    $.toaster({
                        priority: 'danger',
                        title: 'Error',
                        message: "Problem checking for updates: " + e.message,
                        settings: {
                            timeout: tgd.defaults.toastTimeout
                        }
                    });
                })
                .then(function(manifest) {
                    $("#tgdLoader").hide();
                    if (manifest) {
                        $.toaster({
                            priority: 'info',
                            title: 'Info',
                            message: "Installing updates",
                            settings: {
                                timeout: tgd.defaults.toastTimeout
                            }
                        });
                    }
                    return tgd.loader.update();
                }, function(err) {
                    $("#tgdLoader").hide();
                    $.toaster({
                        priority: 'danger',
                        title: 'Error',
                        message: 'Auto-update error:' + err,
                        settings: {
                            timeout: tgd.defaults.toastTimeout
                        }
                    });
                });
        };

        if (localStorage.autoUpdates == "true" || (tgd.defaults.autoUpdates == "true" && _.isEmpty(localStorage.autoUpdates))) {
            tgd.localLog("Checking for auto updates");
            tgd.checkUpdates();
        }
    } catch (e) {
        tgd.localLog("update crash" + e);
    }
})();
tgd.cartesianProductOf = function(x) {
    return _.reduce(x, function(a, b) {
        return _.flatten(_.map(a, function(x) {
            return _.map(b, function(y) {
                return x.concat([y]);
            });
        }), true);
    }, [
        []
    ]);
};

tgd.sum = function(arr) {
    return _.reduce(arr, function(memo, num) {
        return memo + num;
    }, 0);
};

tgd.average = function(arr) {
    return _.reduce(arr, function(memo, num) {
        return memo + num;
    }, 0) / arr.length;
};
tgd.version = "3.8.0.1";
tgd.moveItemPositionHandler = function(element, item) {
    tgd.localLog("moveItemPositionHandler");
    if (app.destinyDbMode() === true) {
        tgd.localLog("destinyDbMode");
        window.open(item.href, "_system");
        return false;
    } else if (app.loadoutMode() === true) {
        tgd.localLog("loadoutMode");
        var existingItem, itemFound = false;
        if (item._id > 0) {
            existingItem = _.findWhere(app.activeLoadout().ids(), {
                id: item._id
            });
            if (existingItem) {
                app.activeLoadout().ids.remove(existingItem);
                itemFound = true;
            }
        } else {
            existingItem = _.filter(app.activeLoadout().generics(), function(itm) {
                return item.id == itm.hash && item.characterId() == itm.characterId;
            });
            if (existingItem.length > 0) {
                app.activeLoadout().generics.removeAll(existingItem);
                itemFound = true;
            }
        }
        if (itemFound == false) {
            if (item.transferStatus >= 2 && item.bucketType != "Subclasses") {
                $.toaster({
                    priority: 'danger',
                    title: 'Warning',
                    message: app.activeText().unable_create_loadout_for_type,
                    settings: {
                        timeout: tgd.defaults.toastTimeout
                    }
                });
            } else if (item._id === "0") {
                app.activeLoadout().addGenericItem({
                    hash: item.id,
                    bucketType: item.bucketType,
                    characterId: item.characterId()
                });
            } else if (_.where(app.activeLoadout().items(), {
                    bucketType: item.bucketType
                }).length < 10) {
                app.activeLoadout().addUniqueItem({
                    id: item._id,
                    bucketType: item.bucketType,
                    doEquip: false
                });
            } else {
                $.toaster({
                    priority: 'danger',
                    title: 'Error',
                    message: app.activeText().unable_to_create_loadout_for_bucket + item.bucketType,
                    settings: {
                        timeout: tgd.defaults.toastTimeout
                    }
                });
            }
        }
    } else {
        tgd.localLog("else");
        app.activeItem(item);
        var $movePopup = $("#move-popup");
        if ((item.transferStatus >= 2 && item.bucketType != "Subclasses") || item.bucketType == "Post Master" || item.bucketType == "Messages" || item.bucketType == "Invisible" || item.bucketType == "Lost Items" || item.bucketType == "Bounties" || item.bucketType == "Mission" || item.typeName == "Armsday Order") {
            $.toaster({
                priority: 'danger',
                title: 'Error',
                message: app.activeText().unable_to_move_bucketitems,
                settings: {
                    timeout: tgd.defaults.toastTimeout
                }
            });
            return;
        }
        if (element == tgd.activeElement) {
            $movePopup.hide();
            tgd.activeElement = null;
            tgd.localLog("hide");
        } else {
            tgd.localLog("show");
            tgd.activeElement = element;
            $ZamTooltips.hide();
            if (window.isMobile) {
                $("body").css("padding-bottom", $movePopup.height() + "px");
                /* bringing back the delay it's sitll a problem in issue #128 */
                setTimeout(function() {
                    $movePopup.show().addClass("mobile");
                }, 50);
            } else {
                tgd.localLog("display");
                $movePopup.removeClass("navbar navbar-default navbar-fixed-bottom").addClass("desktop").show().position({
                    my: "left bottom",
                    at: "left top",
                    collision: "none",
                    of: element,
                    using: function(pos, ui) {
                        var obj = $(this),
                            box = $(ui.element.element).find(".move-popup").width();
                        obj.removeAttr('style');
                        if (box + pos.left > $(window).width()) {
                            pos.left = pos.left - box;
                        }
                        obj.css(pos).width(box);
                    }
                });
            }
        }
    }
};

var Item = function(model, profile) {
    var self = this;

    if (model && model.id) {
        model.itemHash = model.id;
        model.itemInstanceId = model._id;
        model.equipRequiredLevel = 0;
        model.isEquipment = true;
    }

    _.each(model, function(value, key) {
        self[key] = value;
    });

    this.character = profile;

    this.init(model);

    this.characterId = ko.observable(self.character.id);
    this.isFiltered = ko.observable(false);
    this.isVisible = ko.pureComputed(this._isVisible, this);
    this.columnMode = ko.computed(this._columnMode, this);
    this.opacity = ko.computed(this._opacity, this);
    this.primaryStatValue = ko.pureComputed(this._primaryStatValue, this);
};

Item.prototype = {
    init: function(item) {
        var self = this;
        var info = {};
        if (item.itemHash in _itemDefs) {
            info = _itemDefs[item.itemHash];
        } else {
            /* Classified Items */
            info = {
                bucketTypeHash: "1498876634",
                itemName: "Classified",
                tierTypeName: "Exotic",
                icon: "/img/misc/missing_icon.png",
                itemTypeName: "Classified"
            };
            tgd.localLog("found an item without a definition! " + JSON.stringify(item));
            tgd.localLog(item.itemHash);
        }
        if (info.bucketTypeHash in tgd.DestinyBucketTypes) {
            var description, tierTypeName, itemDescription, itemTypeName;
            try {
                description = decodeURIComponent(info.itemName);
                tierTypeName = decodeURIComponent(info.tierTypeName);
                itemDescription = decodeURIComponent(info.itemDescription);
                itemTypeName = decodeURIComponent(info.itemTypeName);
            } catch (e) {
                description = info.itemName;
                tierTypeName = info.tierTypeName;
                itemDescription = info.itemDescription;
                itemTypeName = info.itemTypeName;
            }
            //some weird stuff shows up under this bucketType w/o this filter
            if (info.bucketTypeHash == "2422292810" && info.deleteOnAction === false) {
                return;
            }
            if (info.icon === "") {
                info.icon = "/img/misc/missing_icon.png";
            }
            var itemObject = {
                id: item.itemHash,
                href: "https://destinydb.com/items/" + item.itemHash,
                _id: item.itemInstanceId,
                characterId: ko.observable(self.character.id),
                damageType: item.damageType,
                damageTypeName: tgd.DestinyDamageTypes[item.damageType],
                isEquipment: item.isEquipment,
                isEquipped: ko.observable(item.isEquipped),
                primaryStat: ko.observable(""),
                isGridComplete: item.isGridComplete,
                locked: ko.observable(item.locked),
                description: description,
                itemDescription: itemDescription,
                classType: info.classType,
                bucketType: item.bucketType || self.character.getBucketTypeHelper(item, info),
                type: info.itemSubType,
                typeName: itemTypeName,
                tierType: info.tierType,
                tierTypeName: tierTypeName,
                icon: tgd.dataDir + info.icon,
                isUnique: false,
                primaryValues: {}
            };
            //hack for issue #442
            if (itemObject.bucketType == "Artifact") {
                itemObject.classType = tgd.DestinyClassNames[itemObject.typeName.split(" ")[0]];
            }
            itemObject.weaponIndex = tgd.DestinyWeaponPieces.indexOf(itemObject.bucketType);
            itemObject.armorIndex = tgd.DestinyArmorPieces.indexOf(itemObject.bucketType);
            if (itemObject.armorIndex > -1) {
                app.armorViewBy.subscribe(function(type) {
                    var statType = type == "Light" ? "Default" : "Stats";
                    var primaryStat = self.primaryValues[statType];
                    if (statType == "Stats" && primaryStat) {
                        primaryStat = primaryStat + "/" + tgd.DestinyMaxCSP[self.bucketType];
                    }
                    self.primaryStat(primaryStat);
                });
            }
            if (item.id) {
                itemObject.perks = item.perks;
            } else if (item.perks.length > 0) {
                var talentGrid = _talentGridDefs[item.talentGridHash];
                itemObject.perks = [];
                if (talentGrid && talentGrid.nodes) {
                    _.each(item.perks, function(perk) {
                        if (perk.perkHash in window._perkDefs) {
                            var p = window._perkDefs[perk.perkHash];
                            //There is an inconsistency between perkNames in Destiny for example:
                            /* Boolean Gemini - Has two perks David/Goliath which is also called One Way/Or Another
                               This type of inconsistency leads to issues with filtering therefore p.perkHash must be used
                            */
                            var nodeIndex = talentGrid.nodes.indexOf(
                                _.filter(talentGrid.nodes, function(o) {
                                    return _.flatten(_.pluck(o.steps, 'perkHashes')).indexOf(p.perkHash) > -1;
                                })[0]
                            );
                            itemObject.perks.push({
                                iconPath: tgd.dataDir + p.displayIcon,
                                name: p.displayName,
                                description: '<strong>' + p.displayName + '</strong>: ' + p.displayDescription,
                                active: perk.isActive,
                                isExclusive: talentGrid.exclusiveSets.indexOf(nodeIndex)
                            });
                        }
                    });
                    var perkHashes = _.pluck(item.perks, 'perkHash'),
                        perkNames = _.pluck(itemObject.perks, 'name'),
                        talentPerks = {};
                    var talentGridNodes = talentGrid.nodes;
                    _.each(item.nodes, function(node) {
                        if (node.isActivated && node.hidden === false) {
                            var nodes = _.findWhere(talentGridNodes, {
                                nodeHash: node.nodeHash
                            });
                            if (nodes && nodes.steps) {
                                var perk = nodes.steps[node.stepIndex];
                                if ((tgd.DestinyUnwantedNodes.indexOf(perk.nodeStepName) == -1) &&
                                    (perkNames.indexOf(perk.nodeStepName) == -1) &&
                                    (perk.perkHashes.length === 0 || perkHashes.indexOf(perk.perkHashes[0]) === -1)) {
                                    talentPerks[perk.nodeStepName] = {
                                        active: true,
                                        name: perk.nodeStepName,
                                        description: '<strong>' + perk.nodeStepName + '</strong>: ' + perk.nodeStepDescription,
                                        iconPath: tgd.dataDir + perk.icon,
                                        isExclusive: -1
                                    };
                                }
                            }
                        }
                    });
                    _.each(talentPerks, function(perk) {
                        itemObject.perks.push(perk);
                    });
                }
            }
            itemObject.hasLifeExotic = _.where(itemObject.perks, {
                name: "The Life Exotic"
            }).length > 0;
            if (item.progression) {
                itemObject.progression = _.filter(itemObject.perks, function(perk) {
                    return perk.active === false && perk.isExclusive === -1;
                }).length === 0;
            }
            if (item.primaryStat) {
                if (item.primaryStat && item.primaryStat.value) {
                    itemObject.primaryStat(item.primaryStat.value);
                } else {
                    itemObject.primaryStat(item.primaryStat);
                    if (_.isObject(item.stats)) {
                        itemObject.primaryValues['Stats'] = tgd.sum(_.values(item.stats));
                    }
                }
            }
            if (item.stats && item.stats.length && item.stats.length > 0) {
                itemObject.stats = {};
                _.each(item.stats, function(stat) {
                    if (stat.statHash in window._statDefs) {
                        var p = window._statDefs[stat.statHash];
                        itemObject.stats[p.statName] = stat.value;
                    }
                });
                itemObject.primaryValues['Stats'] = tgd.sum(_.values(itemObject.stats));
            }
            if (item && item.objectives && item.objectives.length > 0) {
                var progress = (tgd.average(_.map(item.objectives, function(objective) {
                    var result = 0;
                    if (objective.objectiveHash in _objectiveDefs && _objectiveDefs[objective.objectiveHash] && _objectiveDefs[objective.objectiveHash].completionValue) {
                        result = objective.progress / _objectiveDefs[objective.objectiveHash].completionValue;
                    }
                    return result;
                })) * 100).toFixed(0) + "%";
                var primaryStat = (itemObject.primaryStat() === "") ? progress : itemObject.primaryStat() + "/" + progress;
                itemObject.primaryStat(primaryStat);
            }

            if (itemObject.typeName && itemObject.typeName == "Emblem") {
                itemObject.backgroundPath = app.makeBackgroundUrl(info.secondaryIcon);
            }
            if (itemObject.bucketType == "Materials" || itemObject.bucketType == "Consumables") {
                itemObject.primaryStat(item.stackSize);
                itemObject.maxStackSize = info.maxStackSize;
            } else if ((itemObject.bucketType == "Lost Items" || itemObject.bucketType == "Invisible") && item.stackSize > 1) {
                itemObject.primaryStat(item.stackSize);
            }
            itemObject.primaryValues['Default'] = itemObject.primaryStat();
            $.extend(self, itemObject);
        }
    },
    _opacity: function() {
        return (this.equipRequiredLevel <= this.character.level() || this.character.id == 'Vault') ? 1 : 0.3;
    },
    _columnMode: function() {
        var self = this;
        var className = "";
        if (self.characterId() == 'Vault') {
            className = 'col-xs-' + app.vaultColumns();
        } else if (tgd.DestinyBucketColumns[self.bucketType] == 4) {
            className = 'col-xs-' + (tgd.bootstrapGridColumns / 4);
        } else {
            className = 'col-xs-' + (tgd.bootstrapGridColumns / 3);
        }
        if (self.isGridComplete) {
            className += ' complete';
        }
        return className;
    },
    isEquippable: function(avatarId) {
        var self = this;
        return ko.pureComputed(function() {
            //rules for how subclasses can be equipped
            var equippableSubclass = (self.bucketType == "Subclasses" && !self.isEquipped() && self.character.id == avatarId) || self.bucketType !== "Subclasses";
            //if it's in this character and it's equippable
            return (self.characterId() == avatarId && !self.isEquipped() && avatarId !== 'Vault' && self.bucketType != 'Materials' && self.bucketType != 'Consumables' && self.description.indexOf("Engram") == -1 && self.typeName.indexOf("Armsday") == -1 && equippableSubclass) || (self.characterId() != avatarId && avatarId !== 'Vault' && self.bucketType != 'Materials' && self.bucketType != 'Consumables' && self.description.indexOf("Engram") == -1 && equippableSubclass && self.transferStatus < 2);
        });
    },
    isStoreable: function(avatarId) {
        var self = this;
        return ko.pureComputed(function() {
            return (self.characterId() != avatarId && avatarId !== 'Vault' && self.bucketType !== 'Subclasses' && self.transferStatus < 2) ||
                (self.isEquipped() && self.character.id == avatarId);
        });
    },
    clone: function() {
        var self = this;
        var model = {};
        for (var i in self) {
            if (self.hasOwnProperty(i)) {
                var val = ko.unwrap(self[i]);
                if (typeof(val) !== 'function') {
                    model[i] = val;
                }
            }
        }
        //tgd.localLog("model: ");
        //tgd.localLog(model);
        var newItem = new Item(model, self.character);
        return newItem;
    },
    hasPerkSearch: function(search) {
        var foundPerk = false,
            self = this;
        if (self.perks) {
            var vSearch = search.toLowerCase();
            self.perks.forEach(function(perk) {
                if (perk.name.toLowerCase().indexOf(vSearch) > -1 || perk.description.toLowerCase().indexOf(vSearch) > -1)
                    foundPerk = true;
            });
        }
        return foundPerk;
    },
    hashProgress: function(state) {
        var self = this;
        if (typeof self.progression !== "undefined") {
            /* Missing Perks */
            if (state == "1" && self.progression === false) {
                return true;
            }
            /* Filled perks but not maxed out */
            else if (state == "2" && self.progression === true && self.isGridComplete === false) {
                return true;
            }
            /* Maxed weapons (Gold Borders only) */
            else if (state == "3" && self.progression === true && self.isGridComplete === true) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    },
    hasGeneral: function(type) {
        if (type == "Engram" && this.description.indexOf("Engram") > -1 && this.isEquipment === false) {
            return true;
        } else if (type in tgd.DestinyGeneralItems && tgd.DestinyGeneralItems[type].indexOf(this.id) > -1) {
            return true;
        } else {
            return false;
        }
    },
    _primaryStatValue: function() {
        if (this.primaryStat && typeof this.primaryStat == "function") {
            var primaryStat = ko.unwrap(this.primaryStat());
            if (this.objectives && typeof primaryStat == "string" && primaryStat.indexOf("/") > -1) {
                primaryStat = parseInt(primaryStat.split("/")[0]);
            }
            return primaryStat;
        }
    },
    _isVisible: function() {
        var $parent = app,
            self = this;

        if (typeof self.id == "undefined") {
            return false;
        }

        var dmgFilter = true;
        var progressFilter = true;
        var weaponFilter = true;
        var armorFilter = true;
        var showDuplicate = true;
        var setFilter = true;
        var searchFilter = ($parent.searchKeyword() === '' || $parent.searchKeyword() !== "" && self.description.toLowerCase().indexOf($parent.searchKeyword().toLowerCase()) > -1);
        var tierFilter = $parent.tierFilter() == "0" || $parent.tierFilter() == self.tierType;

        var itemStatValue = "";
        if (this.primaryStatValue && this.primaryStatValue()) {
            itemStatValue = this.primaryStatValue().toString();
        }
        var operator = $parent.searchKeyword().substring(0, 1);
        if (itemStatValue !== "" && itemStatValue.indexOf("%") == -1 && (operator == ">" || operator == "<" || $.isNumeric($parent.searchKeyword()))) {
            var operand = "=",
                searchValue = $parent.searchKeyword();
            if (operator === ">" || operator === "<") {
                operand = operator + operand;
                searchValue = searchValue.replace(operator, '');
            } else {
                operand = "=" + operand;
            }
            searchFilter = new Function('return ' + itemStatValue + operand + searchValue.toString())();
        }

        if (self.armorIndex > -1 || self.weaponIndex > -1) {
            setFilter = $parent.setFilter().length === 0 || $parent.setFilter().indexOf(self.id) > -1;
            searchFilter = searchFilter || self.hasPerkSearch($parent.searchKeyword());
            if (self.weaponIndex > -1) {
                dmgFilter = $parent.dmgFilter().length === 0 || $parent.dmgFilter().indexOf(self.damageTypeName) > -1;
                weaponFilter = $parent.weaponFilter() == "0" || $parent.weaponFilter() == self.typeName;
            } else {
                var types = _.map(_.pluck(self.perks, 'name'), function(name) {
                    return name && name.split(" ")[0];
                });
                dmgFilter = $parent.dmgFilter().length === 0 || _.intersection($parent.dmgFilter(), types).length > 0;
                armorFilter = $parent.armorFilter() == "0" || $parent.armorFilter() == self.bucketType;
            }
            progressFilter = $parent.progressFilter() == "0" || self.hashProgress($parent.progressFilter());
        }
        generalFilter = $parent.generalFilter() == "0" || self.hasGeneral($parent.generalFilter());
        showDuplicate = $parent.customFilter() === false || ($parent.customFilter() === true && self.isFiltered() === true);

        var isVisible = (searchFilter) && (dmgFilter) && (setFilter) && (tierFilter) && (progressFilter) && (weaponFilter) && (armorFilter) && (generalFilter) && (showDuplicate);
        //console.timeEnd("isVisible");
        /*if ( self.description == "Red Death") {
			tgd.localLog( "searchFilter: " + searchFilter);
			tgd.localLog( "dmgFilter: " + dmgFilter);
			tgd.localLog( "setFilter: " + setFilter);
			tgd.localLog( "tierFilter: " + tierFilter);
			tgd.localLog( "progressFilter: " + progressFilter);
			tgd.localLog( "weaponFilter: " + weaponFilter);
			tgd.localLog( "armorFilter: " + armorFilter);
			tgd.localLog( "generalFilter: " + generalFilter);
			tgd.localLog( "showDuplicate: " + showDuplicate);
		}*/
        return isVisible;
    },
    /* helper function that unequips the current item in favor of anything else */
    unequip: function(callback) {
        var self = this;
        tgd.localLog('trying to unequip too!');
        if (self.isEquipped() === true) {
            tgd.localLog("and its actually equipped");
            var otherEquipped = false,
                itemIndex = -1,
                otherItems = _.filter(self.character.items(), function(item) {
                    return (item._id != self._id && item.bucketType == self.bucketType);
                });
            //console.log("other items: " + _.pluck(otherItems, 'description'));
            if (otherItems.length > 0) {
                /* if the only remainings item are exotic ensure the other buckets dont have an exotic equipped */
                var minTier = _.min(_.pluck(otherItems, 'tierType'));
                var tryNextItem = function() {
                    var item = otherItems[++itemIndex];
                    if (_.isUndefined(item)) {
                        if (callback) callback(false);
                        else {
                            tgd.localLog("transfer error 5");
                            $.toaster({
                                priority: 'danger',
                                title: 'Error',
                                message: app.activeText().cannot_unequip + self.description,
                                settings: {
                                    timeout: tgd.defaults.toastTimeout
                                }
                            });
                        }
                        return;
                    }
                    tgd.localLog(item.description);
                    /* still haven't found a match */
                    if (otherEquipped === false) {
                        if (item != self && item.equip) {
                            tgd.localLog("trying to equip " + item.description);
                            item.equip(self.characterId(), function(isEquipped, result) {
                                tgd.localLog(item.description + " result was " + isEquipped);
                                if (isEquipped === true) {
                                    otherEquipped = true;
                                    callback(true);
                                } else if (isEquipped === false && result && result.ErrorCode && result.ErrorCode === 1634) {
                                    callback(false);
                                } else {
                                    tryNextItem();
                                    tgd.localLog("tryNextItem");
                                }
                            });
                        } else {
                            tryNextItem();
                            tgd.localLog("tryNextItem");
                        }
                    }
                };
                tgd.localLog("tryNextItem");
                tgd.localLog("trying to unequip item, the min tier of the items I can equip is: " + minTier);
                if (minTier == 6) {
                    var otherItemUnequipped = false;
                    var otherBucketTypes = self.weaponIndex > -1 ? _.clone(tgd.DestinyWeaponPieces) : _.clone(tgd.DestinyArmorPieces);
                    otherBucketTypes.splice(self.weaponIndex > -1 ? self.weaponIndex : self.armorIndex, 1);
                    _.each(otherBucketTypes, function(bucketType) {
                        var itemEquipped = self.character.itemEquipped(bucketType);
                        if (itemEquipped && itemEquipped.tierType && itemEquipped.tierType == 6) {
                            tgd.localLog("going to unequip " + itemEquipped.description);
                            itemEquipped.unequip(function(result) {
                                //unequip was successful
                                if (result) {
                                    tryNextItem();
                                }
                                //unequip failed
                                else {
                                    tgd.localLog("transfer error 6");
                                    $.toaster({
                                        priority: 'danger',
                                        title: 'Error',
                                        message: app.activeText().unable_unequip + itemEquipped.description,
                                        settings: {
                                            timeout: tgd.defaults.toastTimeout
                                        }
                                    });
                                    callback(false);
                                }
                            });
                            otherItemUnequipped = true;
                        }
                    });
                    if (!otherItemUnequipped) {
                        tgd.localLog("no other exotic equipped, safe to equip");
                        tryNextItem();
                    }
                } else {
                    tryNextItem();
                }
            } else {
                tgd.localLog("refused to unequip");
                callback(false);
            }
        } else {
            tgd.localLog("but not equipped");
            callback(true);
        }
    },
    equip: function(targetCharacterId, callback) {
        var self = this;
        var done = function() {
            tgd.localLog("making bungie call to equip " + self.description);
            app.bungie.equip(targetCharacterId, self._id, function(e, result) {
                if (result && result.Message && result.Message == "Ok") {
                    var done = function() {
                        tgd.localLog(self);
                        tgd.localLog("result was OKed for " + self.description);
                        tgd.localLog(result);
                        self.isEquipped(true);
                        self.character.items().forEach(function(item) {
                            if (item._id != self._id && item.bucketType == self.bucketType && item.isEquipped() === true) {
                                item.isEquipped(false);
                            }
                        });
                        if (self.bucketType == "Emblem") {
                            self.character.icon(self.icon);
                            self.character.background(self.backgroundPath);
                        }
                        if (callback) callback(true);
                    };
                    if (!(self instanceof Item)) {
                        app.findReference(self, function(item) {
                            self = item;
                            done();
                        });
                        tgd.localLog("changing reference of self to actual item");
                    } else {
                        done();
                    }
                } else {
                    tgd.localLog("transfer error 7 " + result);
                    /* this is by design if the user equips something they couldn't the app shouldn't assume a replacement unless it's via loadouts */
                    if (callback) callback(false, result);
                    else if (result && result.Message) {
                        $.toaster({
                            priority: 'info',
                            title: 'Error',
                            message: result.Message,
                            settings: {
                                timeout: tgd.defaults.toastTimeout
                            }
                        });
                    }
                    //TODO perhaps log this condition and determine the cause
                    else {
                        BootstrapDialog.alert(self.description + ":" + app.activeText().cannot_equip + (result && result.error) ? result.error : "");
                    }
                }
            });
        };
        var sourceCharacterId = self.characterId();
        tgd.localLog("equip called from " + sourceCharacterId + " to " + targetCharacterId);
        if (targetCharacterId == sourceCharacterId) {
            tgd.localLog("item is already in the character");
            /* if item is exotic */
            if (self.tierType == 6 && self.hasLifeExotic === false) {
                //tgd.localLog("item is exotic");
                var otherExoticFound = false,
                    otherBucketTypes = self.weaponIndex > -1 ? _.clone(tgd.DestinyWeaponPieces) : _.clone(tgd.DestinyArmorPieces);
                otherBucketTypes.splice(self.weaponIndex > -1 ? self.weaponIndex : self.armorIndex, 1);
                //tgd.localLog("the other bucket types are " + JSON.stringify(otherBucketTypes));
                _.each(otherBucketTypes, function(bucketType) {
                    var otherExotic = _.filter(_.where(self.character.items(), {
                        bucketType: bucketType,
                        tierType: 6
                    }), function(item) {
                        return item.isEquipped();
                    });
                    //tgd.localLog( "otherExotic: " + JSON.stringify(_.pluck(otherExotic,'description')) );
                    if (otherExotic.length > 0) {
                        //tgd.localLog("found another exotic equipped " + otherExotic[0].description);
                        otherExoticFound = true;
                        otherExotic[0].unequip(done);
                    }
                });
                if (otherExoticFound === false) {
                    done();
                }
            } else {
                //tgd.localLog("request is not part of a loadout");
                done();
            }
        } else {
            tgd.localLog("item is NOT already in the character");
            self.store(targetCharacterId, function(newProfile) {
                tgd.localLog("item is now in the target destination");
                self.character = newProfile;
                self.characterId(newProfile.id);
                self.equip(targetCharacterId, callback);
            });
        }
    },
    transfer: function(sourceCharacterId, targetCharacterId, amount, cb) {
        //tgd.localLog("Item.transfer");
        //tgd.localLog(arguments);
        var self = this,
            x, y, characters = app.characters();
        if (characters.length === 0) {
            /*ga('send', 'exception', {
                'exDescription': "No characters found to transfer with " + JSON.stringify(app.activeUser()),
                'exFatal': false,
                'appVersion': tgd.version,
                'hitCallback': function() {
                    tgd.localLog("crash reported");
                }
            });*/
            app.refresh();
            return BootstrapDialog.alert("Attempted a transfer with no characters loaded, how is that possible? Please report this issue to my Github.");
        }

        var isVault = (targetCharacterId == "Vault");
        var ids = _.pluck(characters, 'id');
        x = characters[ids.indexOf(sourceCharacterId)];
        y = characters[ids.indexOf(targetCharacterId)];
        if (_.isUndefined(y)) {
            return app.refresh();
        }
        //tgd.localLog( self.description );
        app.bungie.transfer(isVault ? sourceCharacterId : targetCharacterId, self._id, self.id, amount, isVault, function(e, result) {
            //tgd.localLog("app.bungie.transfer after");
            //tgd.localLog(arguments);			
            if (result && result.Message && result.Message == "Ok") {
                if (self.bucketType == "Materials" || self.bucketType == "Consumables") {
                    /*
                     * Whatever happens, make sure 'self' is always preserved in case there were/are chained transfers before/after.
                     * All we're looking to do is make the GUI appear correct. The transfer has already happened successfully.
                     * Simple cases:
                     * 1) Target has no existing items, so simply move self from one players' items list to the other.
                     * 2) Target has existing items, but all existing stacks full, so simply do the same as previous case.
                     * Edge cases:
                     * 1) If self gets swallowed (ie. completely added to an existing stack) then the stack that's swallowing needs to
                     * be removed and self adjusted to appear to be that swallowing stack.
                     * 2) If self gets swallowed but there's overflow (ie. added to an existing stack but hit maxStackSize and a new
                     * stack needs to be created visually) then self needs to be adjusted to appear as the newly created stack.
                     * 3) If self.primaryStat is < amount then there was a previous transfer that overflowed and now we've got an
                     * underflow. self needs to be the 'right' most stack that visually gets removed and added to the new character.
                     * Cleanup cases:
                     * 1) When multiple stacks exist on the source character, and the user has selected a partial transfer from a stack
                     * that's not at the end of the list, we need to make the counts correct by shuffling things 'left' and potentially
                     * removing anything on the right that went < 0.
                     * Random notes:
                     * 1) Bungie API lets you move more than a stacks worth of an item, so logic is needed to visually break up stacks
                     * if they're > maxStackSize for that particular item.					 
                     */

                    tgd.localLog("[from: " + sourceCharacterId + "] [to: " + targetCharacterId + "] [amount: " + amount + "]");
                    var existingItem = _.find(
                        _.where(y.items(), {
                            description: self.description
                        }),
                        function(i) {
                            return i.primaryStat() < i.maxStackSize;
                        });

                    var theClone;
                    var remainder = self.primaryStat() - amount;
                    var isOverflow = (typeof existingItem == "undefined") ? false : ((existingItem.primaryStat() + amount) > existingItem.maxStackSize);
                    tgd.localLog("[remainder: " + remainder + "] [overflow: " + isOverflow + "] [underflow: " + (remainder < 0) + "]");

                    var tmpAmount = 0;
                    if (existingItem !== undefined) {
                        tgd.localLog("existing stack in destination");
                        tmpAmount = Math.min(existingItem.maxStackSize - existingItem.primaryStat(), amount);
                        tgd.localLog("tmpAmount: " + tmpAmount);
                        if (isOverflow) {
                            tgd.localLog("overflow: " + (amount - tmpAmount));
                            // existing stack gets maxed
                            existingItem.primaryStat(existingItem.maxStackSize);
                            tgd.localLog("existingItem.primaryStat updated to " + existingItem.maxStackSize);
                        } else {
                            tgd.localLog("no overflow");
                        }
                    } else {
                        tgd.localLog("no existing stack in destination or existing stacks are full");
                    }

                    // grab self index in x.items
                    var idxSelf = x.items.indexOf(self);
                    // remove self from x.items
                    x.items.remove(self);
                    tgd.localLog("removed self from x.items @ index " + idxSelf);
                    // if remainder, clone self and add clone to x.items in same place that self was with remainder as primaryStat
                    if (remainder > 0) {
                        tgd.localLog("[remainder: " + remainder + "] [clone on source: " + remainder + "]");
                        theClone = self.clone();
                        theClone.characterId(sourceCharacterId);
                        theClone.character = x;
                        theClone.primaryStat(remainder);
                        x.items.splice(idxSelf, 0, theClone);
                        tgd.localLog("inserted clone to x.items @ " + idxSelf + " with primaryStat " + remainder);
                    } else if (remainder < 0) {
                        tgd.localLog("[remainder: " + remainder + "] [no clone] [underflow]");
                        var sourceRemaining = (amount - self.primaryStat());
                        tgd.localLog("need to remove " + sourceRemaining + " more from " + sourceCharacterId);
                        var sourceExistingItems = _.where(x.items(), {
                            description: self.description
                        });
                        // handle weird cases when user has transferred more than a stacks worth. Bungie API allows this.
                        var sourceIdx = sourceExistingItems.length - 1;
                        while ((sourceRemaining > 0) && (sourceIdx >= 0)) {
                            var sourceRightMost = sourceExistingItems[sourceIdx];
                            var sourceTmpAmount = Math.min(sourceRemaining, sourceRightMost.primaryStat());
                            tgd.localLog("removing " + sourceTmpAmount + " from right most");
                            sourceRightMost.primaryStat(sourceRightMost.primaryStat() - sourceTmpAmount);
                            if (sourceRightMost.primaryStat() <= 0) {
                                x.items.remove(sourceRightMost);
                                tgd.localLog("right most dropped to 0 or less, removing");
                            }
                            sourceRemaining = sourceRemaining - sourceTmpAmount;
                            tgd.localLog("still need to remove " + sourceRemaining + " from " + sourceCharacterId);
                            sourceIdx = sourceIdx - 1;
                        }
                    } else {
                        tgd.localLog("no remainder, no clone");
                    }
                    var idxExistingItem;
                    var newAmount;
                    if (existingItem !== undefined) {
                        if (!isOverflow) {
                            // grab existingItem index in y.items
                            idxExisting = y.items.indexOf(existingItem);
                            // remove existingItem from y.items
                            y.items.remove(existingItem);
                            tgd.localLog("removed existingItem from y.items @ index " + idxExisting);
                            // self becomes the swallowing stack @ y.items indexOf existingItem with (amount + existingItem.primaryStat())
                            newAmount = amount + existingItem.primaryStat();
                        } else {
                            // self gets added to y.items as a new stack with (amount - tmpAmount)
                            newAmount = amount - tmpAmount;
                        }
                    } else {
                        // self gets added to y.items as a new stack with (amount)
                        newAmount = amount;
                    }
                    self.characterId(targetCharacterId);
                    self.character = y;
                    self.primaryStat(newAmount);
                    if (existingItem !== undefined) {
                        if (!isOverflow) {
                            y.items.splice(idxExisting, 0, self);
                            tgd.localLog("adding self to y.items @ index " + idxExisting + " with amount: " + self.primaryStat());
                        } else {
                            y.items.push(self);
                            tgd.localLog("adding self to y.items @ tail with amount: " + self.primaryStat());
                        }
                    } else {
                        y.items.push(self);
                        tgd.localLog("adding self to y.items @ tail with amount: " + self.primaryStat());
                    }

                    // visually split stuff if stacks transferred eceeded maxStackSize for that item
                    if (newAmount > self.maxStackSize) {
                        tgd.localLog("exceeded maxStackSize, need to do some visual splitting");
                        while (self.primaryStat() > self.maxStackSize) {
                            var extraAmount = self.primaryStat() - self.maxStackSize;
                            idxSelf = y.items.indexOf(self);
                            // put clone at self index keeping self to the 'right'
                            theClone = self.clone();
                            theClone.characterId(targetCharacterId);
                            theClone.character = y;
                            theClone.primaryStat(self.maxStackSize);
                            y.items.splice(idxSelf, 0, theClone);
                            tgd.localLog("inserted clone to y.items @ " + idxSelf + " with primaryStat " + theClone.primaryStat());
                            // adjust self value
                            self.primaryStat(extraAmount);
                        }
                    }

                    // clean up. if we've split a stack and have other stacks 'to the right' we need to join them shuffling values 'left'.
                    if (remainder !== 0) {
                        tgd.localLog("running cleanup code...");
                        var selfExistingItems = _.where(x.items(), {
                            description: self.description
                        });
                        var idx = 0;
                        while (idx < selfExistingItems.length) {
                            if ((idx + 1) >= selfExistingItems.length) {
                                tgd.localLog("nothing to cleanup");
                                break;
                            }

                            var cur = selfExistingItems[idx];
                            if (cur.primaryStat() < cur.maxStackSize) {
                                var next = selfExistingItems[idx + 1];
                                var howMuch = Math.min(cur.maxStackSize - cur.primaryStat(), next.primaryStat());
                                tgd.localLog("shifting left...");

                                cur.primaryStat(cur.primaryStat() + howMuch);
                                next.primaryStat(next.primaryStat() - howMuch);
                                if (next.primaryStat() <= 0) {
                                    tgd.localLog("drained a stack in cleanup");
                                    x.items.remove(next);
                                }
                            }

                            idx = idx + 1;
                        }
                    }
                    tgd.localLog("---------------------");
                } else {
                    tgd.localLog("removing " + self.description + " from " + x.uniqueName() + " currently at " + x.items().length);
                    x.items.remove(function(item) {
                        return item._id == self._id;
                    });
                    tgd.localLog("after removal " + x.items().length);
                    self.character = y;
                    y.items.push(self);
                    setTimeout(function() {
                        self.characterId(targetCharacterId);
                    }, 500);
                    tgd.localLog("adding " + self.description + " to " + y.uniqueName());
                }
                //not sure why this is nessecary but w/o it the xfers have a delay that cause free slot errors to show up
                setTimeout(function() {
                    if (cb) cb(y, x);
                }, 500);
            } else if (cb) {
                tgd.localLog(self.description + "  error during transfer!!!");
                tgd.localLog(result);
                cb(y, x, result);
            } else if (result && result.Message) {
                tgd.localLog("transfer error 1");
                $.toaster({
                    priority: 'info',
                    title: 'Error',
                    message: result.Message,
                    settings: {
                        timeout: tgd.defaults.toastTimeout
                    }
                });
            }
        });
    },
    handleTransfer: function(targetCharacterId, cb) {
        var self = this;
        return function(y, x, result) {
            if (result && result.ErrorCode && (result.ErrorCode == 1656 || result.ErrorCode == 1623)) {
                tgd.localLog("reloading bucket " + self.bucketType);
                /*var characterId = app.characters()[1].id;
				var instanceId = app.characters()[1].weapons()[0]._id;*/
                /*app.bungie.getAccountSummary(function(results) {
                    var characterIndex = _.findWhere(results.data.items, {
                        itemId: self._id
                    }).characterIndex;
                    if (characterIndex > -1) {
                        characterId = results.data.characters[characterIndex].characterBase.characterId;
                    } else {
                        characterId = "Vault";
                    }
                    tgd.localLog(characterId + " is where the item was found, it was supposed to be in " + self.character.id);
                    if (characterId != self.character.id) {
                        var character = _.findWhere(app.characters(), {
                            id: characterId
                        });
                        // handle refresh of other buckets
                        tgd.localLog("found the item elsewhere");
                        if (characterId == targetCharacterId) {
                            tgd.localLog("item is already where it needed to be");
                            x.items.remove(self);
                            self.characterId = targetCharacterId
                            self.character = character;
                            character.items.push(self);
                            if (cb) cb(y, x);
                        } else {
                            tgd.localLog("item is not where it needs to be");
                            x._reloadBucket(self.bucketType, undefined, function() {
                                character._reloadBucket(self.bucketType, undefined, function() {
                                    tgd.localLog("retransferring");
                                    //TODO move this function to a more general area for common use
                                    self.character.id = characterId;
                                    var newItem = Loadout.prototype.findReference(self);
                                    tgd.localLog(newItem.character.id + " has new reference of " + newItem.description);
                                    newItem.store(targetCharacterId, cb);
                                });
                            });
                        }
                    } else {*/
                x._reloadBucket(self.bucketType, undefined, function() {
                    y._reloadBucket(self.bucketType, undefined, function() {
                        tgd.localLog("retransferring");
                        app.findReference(self, function(newItem) {
                            newItem.store(targetCharacterId, cb);
                        });
                    });
                });
                /*    }
                });*/
            } else if (result && result.ErrorCode && result.ErrorCode == 1642) {
                tgd.localLog(self._id + " error code 1642 no item slots using adhoc method for " + self.description);
                x._reloadBucket(self.bucketType, undefined, function() {
                    y._reloadBucket(self.bucketType, undefined, function() {
                        var adhoc = new tgd.Loadout();
                        if (self._id > 0) {
                            adhoc.addUniqueItem({
                                id: self._id,
                                bucketType: self.bucketType,
                                doEquip: false
                            });
                        } else {
                            adhoc.addGenericItem({
                                hash: self.id,
                                bucketType: self.bucketType,
                                characterId: self.characterId()
                            });
                        }
                        var msa = adhoc.transfer(targetCharacterId, true);
                        adhoc.swapItems(msa, targetCharacterId, function() {
                            if (cb) cb(y, x);
                        });
                    });
                });
            } else if (result && result.ErrorCode && result.ErrorCode == 1648) {
                //TODO: TypeError: 'undefined' is not an object (evaluating '_.findWhere(app.characters(), { id: "Vault" }).items')
                var vaultItems = _.findWhere(app.characters(), {
                    id: "Vault"
                }).items();
                var targetItem = _.where(vaultItems, {
                    id: self.id
                });
                if (targetItem.length > 0) {
                    targetItem[0].store(targetCharacterId, function() {
                        self.character.id = targetCharacterId;
                        self.store("Vault", cb);
                    });
                }
            } else if (cb) {
                cb(y, x);
            } else if (result && result.Message) {
                tgd.localLog("transfer error 2");
                $.toaster({
                    priority: 'info',
                    title: 'Error',
                    message: result.Message,
                    settings: {
                        timeout: tgd.defaults.toastTimeout
                    }
                });
            }
        };
    },
    store: function(targetCharacterId, callback) {
        //tgd.localLog(arguments);
        var self = this;
        var sourceCharacterId = self.characterId(),
            transferAmount = 1;
        //tgd.localLog("item.store " + self.description + " to " + targetCharacterId + " from " + sourceCharacterId);
        var done = function() {
            if (targetCharacterId == "Vault") {
                //tgd.localLog("*******from character to vault " + self.description);
                self.unequip(function(result) {
                    //tgd.localLog("********* " + sourceCharacterId + " calling transfer from character to vault " + result);
                    if (result === true) {
                        self.transfer(sourceCharacterId, "Vault", transferAmount, self.handleTransfer(targetCharacterId, callback));
                    } else {
                        if (callback) {
                            callback(self.character);
                        } else {
                            tgd.localLog("transfer error 3");
                            $.toaster({
                                priority: 'danger',
                                title: 'Error',
                                message: "Unable to unequip " + self.description,
                                settings: {
                                    timeout: tgd.defaults.toastTimeout
                                }
                            });
                        }
                    }
                });
            } else if (sourceCharacterId !== "Vault") {
                tgd.localLog("from character to vault to character " + self.description);
                self.unequip(function(result) {
                    if (result === true) {
                        if (self.bucketType == "Subclasses") {
                            if (callback)
                                callback(self.character);
                        } else {
                            tgd.localLog(self.character.uniqueName() + " xfering item to Vault " + self.description);
                            self.transfer(sourceCharacterId, "Vault", transferAmount, self.handleTransfer(targetCharacterId, function() {
                                tgd.localLog(self.character.id + " xfered item to vault and now to " + targetCharacterId);
                                if (self.character.id == targetCharacterId) {
                                    tgd.localLog("took the long route ending it short " + self.description);
                                    if (callback) callback(self.character);
                                } else {
                                    tgd.localLog("taking the short route " + self.description);
                                    self.transfer("Vault", targetCharacterId, transferAmount, self.handleTransfer(targetCharacterId, callback));
                                }
                            }));
                        }
                    } else {
                        if (callback) {
                            callback(self.character);
                        } else {
                            tgd.localLog("transfer error 4");
                            $.toaster({
                                priority: 'danger',
                                title: 'Error',
                                message: "Unable to unequip " + self.description,
                                settings: {
                                    timeout: tgd.defaults.toastTimeout
                                }
                            });
                        }
                    }
                });
            } else {
                tgd.localLog("from vault to character");
                self.transfer("Vault", targetCharacterId, transferAmount, self.handleTransfer(targetCharacterId, callback));
            }
        };
        if (self.bucketType == "Materials" || self.bucketType == "Consumables") {
            if (self.primaryStat() == 1) {
                done();
            } else if (app.autoXferStacks() === true || tgd.autoTransferStacks === true) {
                transferAmount = self.primaryStat();
                done();
            } else {
                var characterTotal = 0;
                var dialogItself = (new tgd.dialog({
                        message: function() {
                            var itemTotal = 0;
                            for (i = 0; i < app.orderedCharacters().length; i++) {
                                var c = app.orderedCharacters()[i];
                                var charTotal = _.reduce(
                                    _.filter(c.items(), {
                                        description: self.description
                                    }),
                                    function(memo, j) {
                                        return memo + j.primaryStat();
                                    },
                                    0);
                                if (self.character == c) {
                                    characterTotal = charTotal;
                                }
                                itemTotal = itemTotal + charTotal;
                            }
                            var $content = $(
                                '<div><div class="controls controls-row">' + app.activeText().transfer_amount + ': ' +
                                '<button type="button" class="btn btn-default" id="dec">  -  </button>' +
                                ' <input type="text" id="materialsAmount" value="' + self.primaryStat() + '" size="4"> ' +
                                '<button type="button" class="btn btn-default" id="inc">  +  </button>' +
                                '<button type="button" class="btn btn-default pull-right" id="all"> ' + app.activeText().transfer_all + ' (' + characterTotal + ') </button>' +
                                '<button type="button" class="btn btn-default pull-right" id="one"> ' + app.activeText().transfer_one + ' </button>' +
                                '</div>' +
                                '<div><hr></div>' +
                                '<div class="controls controls-row">' +
                                '<label><input type="checkbox" id="consolidate" /> ' + app.activeText().transfer_consolidate + ' (' + itemTotal + '))</label>' +
                                '<br><label><input type="checkbox" id="neverAsk" /> ' + app.activeText().transfer_ask + ' </label>' +
                                '</div></div>');
                            var btnDec = $content.find('#dec');
                            btnDec.click(function() {
                                var num = parseInt($("input#materialsAmount").val());
                                if (!isNaN(num)) {
                                    $("input#materialsAmount").val(Math.max(num - 1, 1));
                                }
                            });
                            var btnInc = $content.find('#inc');
                            btnInc.click(function() {
                                var num = parseInt($("input#materialsAmount").val());
                                if (!isNaN(num)) {
                                    $("input#materialsAmount").val(Math.min(num + 1, characterTotal));
                                }
                            });
                            var btnOne = $content.find('#one');
                            btnOne.click(function() {
                                var num = parseInt($("input#materialsAmount").val());
                                if (!isNaN(num)) {
                                    $("input#materialsAmount").val(1);
                                }
                            });
                            var btnAll = $content.find('#all');
                            btnAll.click(function() {
                                var num = parseInt($("input#materialsAmount").val());
                                if (!isNaN(num)) {
                                    $("input#materialsAmount").val(characterTotal);
                                }
                            });
                            var inputAmt = $content.find('#materialsAmount');
                            var handleCheckChanged = function(checked) {
                                btnDec.attr("disabled", checked);
                                btnInc.attr("disabled", checked);
                                btnOne.attr("disabled", checked);
                                btnAll.attr("disabled", checked);
                                inputAmt.attr("disabled", checked);
                                inputAmt.attr("readOnly", checked);
                            };
                            $content.find('#consolidate').click(function() {
                                handleCheckChanged(this.checked);
                            });
                            $content.find('#neverAsk').click(function() {
                                app.autoXferStacks(true);
                            });
                            return $content;
                        },
                        buttons: [{
                            label: app.activeText().transfer,
                            cssClass: 'btn-primary',
                            action: function() {
                                finishTransfer($("input#consolidate")[0].checked);
                            }
                        }, {
                            label: app.activeText().close_msg,
                            action: function(dialogItself) {
                                dialogItself.close();
                            }
                        }]
                    })).title(app.activeText().transfer + " " + self.description).show(true),
                    finishTransfer = function(consolidate) {
                        if (consolidate) {
                            self.consolidate(targetCharacterId, self.description);
                            dialogItself.modal.close();
                        } else {
                            transferAmount = parseInt($("input#materialsAmount").val());
                            if (!isNaN(transferAmount) && (transferAmount > 0) && (transferAmount <= characterTotal)) {
                                done();
                                dialogItself.modal.close();
                            } else {
                                BootstrapDialog.alert(app.activeText().invalid_transfer_amount + transferAmount);
                            }
                        }
                    };
                setTimeout(function() {
                    $("#materialsAmount").select().bind("keyup", function(e) {
                        if (e.keyCode == 13) {
                            finishTransfer(false);
                        }
                    });
                }, 500);
            }
        } else {
            var adhoc = new tgd.Loadout();
            adhoc.addUniqueItem({
                id: self._id,
                bucketType: self.bucketType,
                doEquip: false
            });
            var result = adhoc.transfer(targetCharacterId, true)[0];
            if (result && result.swapItem) {
                adhoc.promptUserConfirm([result], targetCharacterId);
            } else {
                done();
            }
        }
    },
    normalize: function(characters) {
        app.normalizeSingle(this.description, characters, false, undefined);
    },
    consolidate: function(targetCharacterId, description, selectedCharacters) {
        //tgd.localLog(targetCharacterId);
        //tgd.localLog(description);
        var activeCharacters = (typeof selectedCharacters == "undefined") ? [] : selectedCharacters;
        var getNextStack = (function() {
            var i = 0;
            var chars = _.filter(app.orderedCharacters(), function(c) {
                return (c.id !== targetCharacterId && activeCharacters.length === 0) || (activeCharacters.indexOf(c.id) > -1);
            });
            var stacks = _.flatten(_.map(chars, function(c) {
                return _.filter(c.items(), {
                    description: description
                });
            }));
            return function() {
                return i >= stacks.length ? undefined : stacks[i++];
            };
        })();

        var nextTransfer = function(callback) {
            var theStack = getNextStack();

            if (typeof theStack == "undefined") {
                //tgd.localLog("all items consolidated");
                if (callback !== undefined) {
                    callback();
                }
                return;
            }

            //transferAmount needs to be defined once and reused bc querying the primaryStat value mid-xfers results in merging qty amounts with existing stacks.
            var transferAmount = theStack.primaryStat();

            //tgd.localLog("xfer " + transferAmount + " from: " + theStack.character.id + ", to: " + targetCharacterId);

            if (targetCharacterId == "Vault") {
                theStack.transfer(theStack.character.id, "Vault", transferAmount, function() {
                    nextTransfer(callback);
                });
            } else if (theStack.character.id == "Vault") {
                theStack.transfer("Vault", targetCharacterId, transferAmount, function() {
                    nextTransfer(callback);
                });
            } else if (theStack.character.id == targetCharacterId) {
                nextTransfer(callback);
            } else {
                theStack.transfer(theStack.character.id, "Vault", transferAmount, function() {
                    theStack.transfer("Vault", targetCharacterId, transferAmount, function() {
                        nextTransfer(callback);
                    });
                });
            }
        };

        // kick off transfers
        nextTransfer(undefined);
    },
    extrasGlue: function() {
        var self = this;

        var selectedStatus = [];
        for (i = 0; i < app.orderedCharacters().length; i++) {
            var id = app.orderedCharacters()[i].id;
            selectedStatus[id] = (id !== "Vault");
        }

        var dialogItself = (new tgd.dialog({
            message: function(dialogItself) {
                var getTotalSelectedItemCount = function() {
                    var c = 0;
                    var totalSelectedItemCount = 0;
                    for (i = 0; i < app.orderedCharacters().length; i++) {
                        if (selectedStatus[(app.orderedCharacters()[i]).id] === true) {
                            var ct = _.reduce(
                                _.filter(app.orderedCharacters()[i].items(), {
                                    description: self.description
                                }),
                                function(memo, i) {
                                    return memo + i.primaryStat();
                                },
                                0);
                            c = c + parseInt(ct);
                        }
                    }
                    return c;
                };

                var $content = $(tgd.normalizeTemplate({
                    item: self,
                    characters: app.orderedCharacters(),
                    selected: selectedStatus,
                    total: getTotalSelectedItemCount()
                }));

                var charButtonClicked = function(self, id) {
                    selectedStatus[id] = !selectedStatus[id];
                    $content.find('#total').text(getTotalSelectedItemCount());
                    self.find('img').css('border', (selectedStatus[id] === true) ? "solid 3px yellow" : "none");
                };

                $.each(app.orderedCharacters(), function(i, val) {
                    var id = val.id;
                    var sel = "#char" + i.toString();
                    $content.find(sel).click(function() {
                        charButtonClicked($(this), id);
                    });
                });
                return $content;
            },
            buttons: [{
                label: 'Normalize',
                cssClass: 'btn-primary',
                action: function(dialogItself) {
                    var characters = _.filter(app.orderedCharacters(), function(c) {
                        return selectedStatus[c.id] === true;
                    });
                    if (characters.length <= 1) {
                        BootstrapDialog.alert("Need to select two or more characters.");
                        return;
                    }
                    self.normalize(characters);
                    dialogItself.close();
                }
            }, {
                label: 'Consolidate',
                cssClass: 'btn-primary',
                action: function(dialogItself) {
                    var characters = _.pluck(_.filter(app.orderedCharacters(), function(c) {
                        return selectedStatus[c.id] === true;
                    }), 'id');
                    self.consolidate(self.character.id, self.description, characters);
                    dialogItself.close();
                }
            }, {
                label: 'Close',
                action: function(dialogItself) {
                    dialogItself.close();
                }
            }]
        })).title("Extras for " + self.description).show(true);
    },
    toggleLock: function() {
        var self = this;
        // have to use an actual character id and not the vault for lock/unlock
        var characterId = (self.characterId() == 'Vault') ? _.find(app.orderedCharacters(), function(c) {
            return c.id !== 'Vault';
        }).id : self.character.id;
        var newState = !self.locked();
        //console.log(characterId + " changing " + self._id + " to be " + (newState ? "locked" : "unlocked"));

        app.bungie.setlockstate(characterId, self._id, newState, function(results, response) {
            if (response.ErrorCode !== 1) {
                return BootstrapDialog.alert("setlockstate error: " + JSON.stringify(response));
            } else {
                //console.log(characterId + " changed " + self._id + " to be " + (newState ? "locked" : "unlocked"));
                self.locked(newState);
            }
        });
    },
    getValue: function(type) {
        var value;
        if (type == "Light") {
            value = this.primaryStatValue();
        } else if (type == "All") {
            value = tgd.sum(_.values(this.stats));
        } else if (_.isObject(this.stats) && type in this.stats) {
            value = parseInt(this.stats[type]);
        } else {
            value = 0;
        }
        return value;
    }
};
function Profile(character) {
    var self = this;

    this.id = character.characterBase.characterId;
    this.order = ko.observable(character.index);
    this.icon = ko.observable("");
    this.gender = ko.observable("");
    this.classType = ko.observable("");
    this.level = ko.observable("");
    this.stats = ko.observable("");
    this.race = ko.observable("");
    this.percentToNextLevel = ko.observable("");
    this.background = ko.observable("");
    this.items = ko.observableArray().extend({
        rateLimit: {
            timeout: 500,
            method: "notifyWhenChangesStop"
        }
    });
    this.items.subscribe(app.redraw);
    this.reloadingBucket = false;
    this.statsShowing = ko.observable(false);
    this.weapons = ko.pureComputed(this._weapons, this);
    this.armor = ko.pureComputed(this._armor, this);
    this.general = ko.pureComputed(this._general, this);
    this.invisible = ko.pureComputed(this._invisible, this);
    this.lostItems = ko.pureComputed(this._lostItems, this);
    this.equippedGear = ko.pureComputed(this._equippedGear, this);
    this.equippedStats = ko.pureComputed(this._equippedStats, this);
    this.sumCSP = ko.pureComputed(this._sumCSP, this);
    this.equippedSP = ko.pureComputed(this._equippedSP, this);
    this.equippedTier = ko.pureComputed(this._equippedTier, this);
    this.tierCSP = ko.pureComputed(this._tierCSP, this);
    this.powerLevel = ko.pureComputed(this._powerLevel, this);
    this.classLetter = ko.pureComputed(this._classLetter, this);
    this.uniqueName = ko.pureComputed(this._uniqueName, this);
    this.iconBG = ko.pureComputed(this._iconBG, this);
    this.container = ko.observable();
    this.reloadBucket = _.bind(this._reloadBucket, this);
    this.init(character);

    this.weapons.subscribe(app.addWeaponTypes);
    this.items.subscribe(app.addTierTypes);
}

Profile.prototype = {
    init: function(profile) {
        var self = this;

        if (self.id == "Vault") {
            self.background(app.makeBackgroundUrl("assets/vault_emblem.jpg", true));
            self.icon("assets/vault_icon.jpg");
            self.gender("Tower");
            self.classType("Vault");
        } else {
            self.updateCharacter(profile);
        }
        var processedItems = [];
        _.each(profile.items, function(item) {
            var processedItem = new Item(item, self);
            if ("id" in processedItem) processedItems.push(processedItem);
        });

        self.items(processedItems);
        if (self.id != "Vault" && typeof profile.processed == "undefined") {
            self._reloadBucket(self, undefined, function() {}, true);
        }
    },
    updateCharacter: function(profile) {
        var self = this;
        if (profile && profile.processed) {
            self.background(profile.characterBase.background);
            self.icon(profile.characterBase.icon);
            self.gender(profile.characterBase.gender);
            self.classType(profile.characterBase.classType);
            self.level(profile.characterBase.level);
            self.stats(profile.characterBase.stats);
            self.race(profile.characterBase.race);
            self.percentToNextLevel(0);
        } else {
            self.background(app.makeBackgroundUrl(tgd.dataDir + profile.backgroundPath, true));
            self.icon(tgd.dataDir + profile.emblemPath);
            self.gender(tgd.DestinyGender[profile.characterBase.genderType]);
            self.classType(tgd.DestinyClass[profile.characterBase.classType]);
            self.level(profile.characterLevel);
            self.stats(profile.characterBase.stats);
            if (!("STAT_LIGHT" in self.stats()))
                self.stats()['STAT_LIGHT'] = 0;
            self.percentToNextLevel(profile.percentToNextLevel);
            self.race(_raceDefs[profile.characterBase.raceHash].raceName);
        }
    },
    refresh: function(profile, event) {
        tgd.localLog("refresh event called");
        var self = this;
        if (self.id == "Vault") {
            self._reloadBucket(self, event);
        } else {
            app.bungie.character(self.id, function(result) {
                if (result && result.data) {
                    self.updateCharacter(result.data);
                    self._reloadBucket(self, event);
                }
            });
        }
    },
    getBucketTypeHelper: function(item, info) {
        var self = this;
        if (typeof info == "undefined") {
            return "";
        } else if (item.location !== 4) {
            return tgd.DestinyBucketTypes[info.bucketTypeHash];
        } else if (item.isEquipment || tgd.lostItemsHelper.indexOf(item.itemHash) > -1 || (item.location == 4 && item.itemInstanceId > 0)) {
            return "Lost Items";
        } else if (tgd.invisibleItemsHelper.indexOf(item.itemHash) > -1) {
            return "Invisible";
        }
        return "Messages";
    },
    reloadBucketFilter: function(buckets) {
        var self = this;
        return function(item) {
            var info = {};
            if (item.itemHash in _itemDefs) {
                info = _itemDefs[item.itemHash];
            } else {
                /* Classified Items */
                info = {
                    bucketTypeHash: "1498876634",
                    itemName: "Classified",
                    tierTypeName: "Exotic",
                    icon: "/img/misc/missing_icon.png",
                    itemTypeName: "Classified"
                };
            }
            if (info && info.bucketTypeHash) {
                if (info.bucketTypeHash in tgd.DestinyBucketTypes) {
                    var itemBucketType = self.getBucketTypeHelper(item, info);
                    if (buckets.indexOf(itemBucketType) > -1) {
                        return true;
                    }
                }
                /*else {
					console.log( unescape(info.itemName) + " " + info.bucketTypeHash );
				}*/
            }
        };
    },
    reloadBucketHandler: function(buckets, done) {
        var self = this;
        return function(results, response) {
            if (results && results.data && results.data.buckets) {
                var items = _.filter(app.bungie.flattenItemArray(results.data.buckets), self.reloadBucketFilter(buckets));
                _.each(items, function(item) {
                    var processedItem = new Item(item, self);
                    if ("id" in processedItem) self.items.push(processedItem);
                });
                done();
            } else {
                done();
                app.refresh();
                return BootstrapDialog.alert("Code 20: " + app.activeText().error_loading_inventory + JSON.stringify(response));
            }
        };
    },
    calculatePowerLevelWithItems: function(items) {
        if (items.length === 0) {
            return 0;
        }
        var index = items.filter(this.filterItemByType("Artifact", true)).length;
        var weights = tgd.DestinyBucketWeights[index];
        if (weights) {
            var eligibleGear = _.filter(items, function(item) {
                return item.bucketType in weights;
            });
            var primaryStatsGear = _.map(eligibleGear, function(item) {
                var value = item.primaryStatValue() * (weights[item.bucketType] / 100);
                return value;
            });
            var sumLightGear = tgd.sum(primaryStatsGear);
            var powerLevel = Math.floor(sumLightGear);
            return powerLevel;
        } else {
            return 0;
        }
    },
    _equippedGear: function() {
        return _.filter(this.items(), function(item) {
            return item.isEquipped();
        });
    },
    _equippedStats: function() {
        return this.joinStats(this.equippedGear());
    },
    _equippedSP: function() {
        return _.filter(this.equippedStats(), function(value, stat) {
            return _.where(tgd.DestinyArmorStats, {
                statName: stat
            }).length > 0;
        });
    },
    _sumCSP: function() {
        return tgd.sum(this.equippedSP());
    },
    _equippedTier: function() {
        var theoreticalTier = Math.floor(this.sumCSP() / tgd.DestinySkillTier);
        var effectiveTier = tgd.sum(_.map(this.equippedSP(), function(value) {
            return Math.floor(value / tgd.DestinySkillTier);
        }));
        return effectiveTier + "/" + theoreticalTier;
    },
    _tierCSP: function() {
        return this.equippedTier().split("/")[1] * tgd.DestinySkillTier;
    },
    _classLetter: function() {
        return this.classType()[0].toUpperCase();
    },
    _uniqueName: function() {
        return this.level() + " " + this.race() + " " + this.gender() + " " + this.classType();
    },
    _iconBG: function() {
        return app.makeBackgroundUrl(this.icon(), true);
    },
    _powerLevel: function() {
        if (this.id == "Vault") return "";
        return this.calculatePowerLevelWithItems(this.equippedGear());
    },
    _reloadBucket: function(model, event, callback, excludeMessage) {
        var self = this,
            element;
        if (self.reloadingBucket) {
            return;
        }

        if (!excludeMessage)
            $.toaster({
                priority: 'info',
                title: 'Success',
                message: 'Refreshing ' + self.uniqueName(),
                settings: {
                    timeout: tgd.defaults.toastTimeout
                }
            });

        var buckets = [];
        if (typeof model === 'string' || model instanceof String) {
            buckets.push(model);
        } else if (model instanceof tgd.Layout) {
            buckets.push.apply(buckets, model.bucketTypes);
        } else if (model instanceof Profile) {
            _.each(tgd.DestinyLayout, function(layout) {
                buckets.push.apply(buckets, layout.bucketTypes);
            });
            buckets.splice(buckets.indexOf("Invisible"), 1);
        }

        self.reloadingBucket = true;
        if (typeof event !== "undefined") {
            element = $(event.target).is(".fa") ? $(event.target) : $(event.target).find(".fa");
            if (element.is(".fa") === false) {
                element = $(event.target).is(".emblem") ? $(event.target) : $(event.target).find(".emblem");
                if (element.is(".emblem") === false) {
                    element = $(event.target).parent().find(".emblem");
                }
            }
            element.addClass("fa-spin");
        }

        var needsInvisibleRefresh = buckets.indexOf("Invisible") > -1;

        function done() {
            function reallyDone() {
                self.reloadingBucket = false;
                if (element) {
                    element.removeClass("fa-spin");
                }
                if (!excludeMessage)
                    $.toaster({
                        priority: 'info',
                        title: 'Success',
                        message: 'Refresh completed for ' + self.uniqueName(),
                        settings: {
                            timeout: tgd.defaults.toastTimeout
                        }
                    });
            }

            if (needsInvisibleRefresh) {
                app.bungie.account(function(results, response) {
                    if (results && results.data && results.data.inventory && results.data.inventory.buckets && results.data.inventory.buckets.Invisible) {
                        var invisible = results.data.inventory.buckets.Invisible;
                        invisible.forEach(function(b) {
                            b.items.forEach(function(item) {
                                self.items.push(new Item(item, self, true));
                            });
                        });
                        reallyDone();
                    } else {
                        reallyDone();
                        app.refresh();
                        return BootstrapDialog.alert("Code 40: " + app.activeText().error_loading_inventory + JSON.stringify(response));
                    }
                });
            } else {
                reallyDone();
            }
            if (callback)
                callback();
        }

        var itemsToRemove = _.filter(self.items(), function(item) {
            return buckets.indexOf(item.bucketType) > -1;
        });
        self.items.removeAll(itemsToRemove);

        if (self.id == "Vault") {
            app.bungie.vault(self.reloadBucketHandler(buckets, done));
        } else {
            app.bungie.inventory(self.id, self.reloadBucketHandler(buckets, done));
        }
    },
    _weapons: function() {
        return _.filter(this.items(), function(item) {
            if (item.weaponIndex > -1)
                return item;
        });
    },
    _armor: function() {
        return _.filter(this.items(), function(item) {
            if (item.armorIndex > -1 && tgd.DestinyGeneralExceptions.indexOf(item.bucketType) == -1)
                return item;
        });
    },
    _general: function() {
        return _.filter(this.items(), function(item) {
            if ((item.armorIndex == -1 || tgd.DestinyGeneralExceptions.indexOf(item.bucketType) > -1) && item.weaponIndex == -1 && item.bucketType !== "Post Master" && item.bucketType !== "Messages" && item.bucketType !== "Invisible" && item.bucketType !== "Lost Items" && item.bucketType !== "Subclasses")
                return item;
        });
    },
    _invisible: function() {
        return _.filter(this.items(), function(item) {
            if (item.bucketType == "Invisible")
                return item;
        });
    },
    _lostItems: function() {
        return _.filter(this.items(), function(item) {
            if (item.bucketType == "Lost Items")
                return item;
        });
    },
    filterItemByType: function(type, isEquipped) {
        return function(item) {
            return (item.bucketType == type && item.isEquipped() == isEquipped);
        };
    },
    get: function(type) {
        var items = this.items().filter(this.filterItemByType(type, false));
        var activeSort = parseInt(app.activeSort());
        /* Tier, Type */
        if (activeSort === 0) {
            items = _.sortBy(_.sortBy(items, function(item) {
                return item.type;
            }), function(item) {
                return item.tierType * -1;
            });
        }
        /* Type */
        else if (activeSort === 1) {
            items = _.sortBy(items, function(item) {
                return item.type;
            });
        }
        /* Light */
        else if (activeSort === 2) {
            items = _.sortBy(items, function(item) {
                return item.primaryStatValue() * -1;
            });
        }
        /* Damage */
        else if (activeSort === 3) {
            items = _.sortBy(items, function(item) {
                return item.damageType;
            });
        }
        /* Name */
        else if (activeSort === 4) {
            items = _.sortBy(items, function(item) {
                return item.description;
            });
        }

        return items;
    },
    getVisible: function(type) {
        return _.filter(this.get(type), function(item) {
            return item.isVisible();
        });
    },
    itemEquipped: function(type) {
        return ko.utils.arrayFirst(this.items(), this.filterItemByType(type, true));
    },
    itemEquippedVisible: function(type) {
        var ie = this.itemEquipped(type);
        return _.isEmpty(ie) ? false : ie.isVisible();
    },
    toggleStats: function() {
        this.statsShowing(!this.statsShowing());
    },
    joinStats: function(arrItems) {
        var tmp = {};
        _.each(arrItems, function(item) {
            _.each(item.stats, function(value, key) {
                if (!(key in tmp)) tmp[key] = 0;
                tmp[key] += value;
            });
        });
        return tmp;
    },
    reduceMaxSkill: function(type, buckets, items) {
        var character = this;
        tgd.localLog("highest set is above max cap");
        var fullSets = [];
        var alternatives = [];
        _.each(buckets, function(bucket) {
            candidates = _.filter(items, function(item) {
                return _.isObject(item.stats) && item.bucketType == bucket && item.equipRequiredLevel <= character.level() && item.canEquip === true && (
                    (item.classType != 3 && tgd.DestinyClass[item.classType] == character.classType()) || (item.classType === 3 && item.armorIndex > -1 && item.typeName.indexOf(character.classType()) > -1) || (item.weaponIndex > -1) || item.bucketType == "Ghost"
                );
            });
            tgd.localLog("candidates considering " + candidates.length);
            _.each(candidates, function(candidate) {
                if (candidate.stats[type] > 0) {
                    //tgd.localLog(candidate);
                    fullSets.push([candidate]);
                } else {
                    alternatives.push([candidate]);
                }
            });
        });
        tgd.localLog("full sets considering " + fullSets.length);
        //tgd.localLog( fullSets );
        var statAlternatives = _.flatten(fullSets);
        tgd.localLog("full sets considering " + fullSets.length);
        _.each(fullSets, function(set) {
            var mainItem = set[0];
            var currentStat = mainItem.stats[type];
            tgd.localLog(currentStat + " for main item: " + mainItem.description);
            _.each(buckets, function(bucket) {
                if (bucket != mainItem.bucketType) {
                    if (currentStat < tgd.DestinySkillCap) {
                        candidates = _.filter(statAlternatives, function(item) {
                            return item.bucketType == bucket &&
                                ((item.tierType != 6 && mainItem.tierType == 6) || (mainItem.tierType != 6));
                        });
                        if (candidates.length > 0) {
                            primaryStats = _.map(candidates, function(item) {
                                return item.stats[type];
                            });
                            tgd.localLog(bucket + " choices are " + primaryStats);
                            var maxCandidateValue = _.max(primaryStats);
                            maxCandidate = candidates[primaryStats.indexOf(maxCandidateValue)];
                            var deltas = {};
                            _.each(candidates, function(candidate, index) {
                                tgd.localLog(candidate.description + " considering candidate currentStat " + candidate.stats[type]);
                                var delta = ((currentStat + candidate.stats[type]) - tgd.DestinySkillCap);
                                if (delta >= 0) {
                                    var allStatsSummed = ((currentStat + candidate.getValue("All")) - candidate.stats[type] - tgd.DestinySkillCap);
                                    if (allStatsSummed >= 0) {
                                        deltas[index] = allStatsSummed;
                                    }
                                }
                                //tgd.localLog("new currentStat is " + currentStat);

                            });
                            var values = _.values(deltas),
                                keys = _.keys(deltas);
                            if (values.length > 0) {
                                maxCandidate = candidates[keys[values.indexOf(_.min(values))]];
                                tgd.localLog(" new max candidate is " + maxCandidate.description);
                            }
                            currentStat += maxCandidate.stats[type];
                            tgd.localLog("new currentStat is " + currentStat);
                            set.push(maxCandidate);
                        }
                    } else {
                        tgd.localLog("adding alternative, maxCap is full on this set");
                        candidates = _.filter(alternatives, function(item) {
                            return item.bucketType == bucket;
                        });
                        if (candidates.length > 0) {
                            primaryStats = _.map(candidates, function(item) {
                                return item.getValue("All");
                            });
                            set.push(candidates[primaryStats.indexOf(_.max(primaryStats))]);
                        }
                    }
                }
            });
        });
        var availableSets = [];
        _.map(fullSets, function(set) {
            var sumSet = character.joinStats(set);
            if (sumSet[type] >= tgd.DestinySkillCap) {
                availableSets.push({
                    set: set,
                    sumSet: sumSet
                });
                tgd.localLog(sumSet);
            }
        });
        var sumSetValues = _.sortBy(_.map(availableSets, function(combo) {
            var score = tgd.sum(_.map(combo.sumSet, function(value, key) {
                var result = Math.floor(value / tgd.DestinySkillTier);
                return result > 5 ? 5 : result;
            }));
            combo.sum = tgd.sum(_.values(combo.sumSet));
            var subScore = (combo.sum / 1000);
            combo.score = score + subScore;
            return combo;
        }), 'score');
        var highestSetObj = sumSetValues[sumSetValues.length - 1];
        return [highestSetObj.sum, highestSetObj.set];
    },
    findBestArmorSetV2: function(items) {
        var buckets = [].concat(tgd.DestinyArmorPieces),
            sets = [],
            bestSets = [],
            backups = [],
            groups = {},
            candidates,
            statGroups = {},
            highestArmorTier = 0,
            highestArmorValue = 0,
            highestTierValue = 0,
            character = this;


        _.each(buckets, function(bucket) {
            groups[bucket] = _.filter(items, function(item) {
                return item.bucketType == bucket && item.equipRequiredLevel <= character.level() && item.canEquip === true && (
                    (item.classType != 3 && tgd.DestinyClass[item.classType] == character.classType()) || (item.classType == 3 && item.armorIndex > -1 && item.typeName.indexOf(character.classType()) > -1) || (item.weaponIndex > -1) || item.bucketType == "Ghost"
                );
            });
            var csps = _.map(groups[bucket], function(item) {
                return item.getValue("All");
            });
            statGroups[bucket] = {
                max: _.max(csps),
                min: _.min(csps)
            };
        });

        highestArmorValue = tgd.sum(_.map(statGroups, function(stat) {
            return stat.max;
        }));
        //console.log("highestArmorValue:"+highestArmorValue);

        highestArmorTier = Math.floor(highestArmorValue / tgd.DestinySkillTier);
        //console.log("highestArmorTier :"+highestArmorTier );

        highestTierValue = highestArmorTier * tgd.DestinySkillTier;
        //console.log("highestTierValue :"+highestTierValue );

        _.each(groups, function(items, bucketType) {
            var minCSP = highestTierValue - (highestArmorValue - statGroups[bucketType].max);
            //console.log(bucketType+":"+minCSP +",before:" + items.length);
            candidates = _.filter(items, function(item) {
                return item.getValue("All") >= minCSP;
            });
            //console.log("after:" + candidates.length);
            _.each(candidates, function(candidate) {
                sets.push([candidate]);
            });
        });

        backups = _.flatten(sets);

        _.each(sets, function(set) {
            var mainPiece = set[0],
                subSets = [
                    [mainPiece]
                ];
            candidates = _.groupBy(_.filter(backups, function(item) {
                return item.bucketType != mainPiece.bucketType && ((item.tierType != 6 && mainPiece.tierType == 6) || (mainPiece.tierType != 6)) && mainPiece._id != item._id;
            }), 'bucketType');
            _.each(candidates, function(items) {
                subSets.push(items);
            });
            var combos = tgd.cartesianProductOf(subSets);
            var sums = _.map(combos, function(combo) {
                var tmp = character.joinStats(combo);
                var score = tgd.sum(_.map(tmp, function(value, key) {
                    var result = Math.floor(value / tgd.DestinySkillTier);
                    return result > 5 ? 5 : result;
                }));
                var subScore = (tgd.sum(_.values(tmp)) / 1000);
                return score + subScore;
            });
            var highestScore = _.max(sums);
            var highestScoringSet = combos[sums.indexOf(highestScore)];
            bestSets.push({
                score: highestScore,
                set: highestScoringSet
            });
        });

        return _.sortBy(bestSets, 'score');
    },
    findHighestItemBy: function(type, buckets, items) {
        var character = this;
        var sets = [];
        var backups = [];
        var primaryStats;
        var candidates;

        _.each(buckets, function(bucket) {
            candidates = _.filter(items, function(item) {
                return item.bucketType == bucket && item.equipRequiredLevel <= character.level() && item.canEquip === true && ((item.classType != 3 && tgd.DestinyClass[item.classType] == character.classType()) || (item.classType == 3 && item.armorIndex > -1) || (item.weaponIndex > -1)) && ((type == "All" && item.armorIndex > -1) || type != "All");
            });
            //console.log("bucket: " + bucket);
            //console.log(candidates);
            _.each(candidates, function(candidate) {
                if (type == "Light" || type == "All" || (type != "Light" && candidate.stats[type] > 0)) {
                    (candidate.tierType == 6 && candidate.hasLifeExotic === false ? sets : backups)[candidate.isEquipped() ? "unshift" : "push"]([candidate]);
                }
            });
        });

        backups = _.flatten(backups);

        //console.log("backups");
        //console.log(backups);

        _.each(backups, function(spare) {
            candidates = _.filter(backups, function(item) {
                return item.bucketType == spare.bucketType && ((spare.tierType != 6) || (spare.tierType == 6 && item.tierType != 6)) && item._id != spare._id;
            });
            primaryStats = _.map(candidates, function(item) {
                return item.getValue(type);
            });
            var maxCandidate = _.max(primaryStats);
            if (maxCandidate < spare.getValue(type)) {
                //console.log("adding backup " + spare.description);
                sets.push([spare]);
            }
        });

        //console.log("sets");
        //console.log(sets);

        _.each(sets, function(set) {
            var main = set[0];
            //console.log("main set item " + main.description);

            _.each(buckets, function(bucket) {
                if (bucket != main.bucketType) {
                    candidates = _.where(backups, {
                        bucketType: bucket
                    });
                    tgd.localLog(candidates.length + " best candidate for bucket: " + bucket);
                    //console.log("candidates: " + _.pluck(candidates,'description'));
                    if (candidates.length > 0) {
                        primaryStats = _.map(candidates, function(item) {
                            return item.getValue(type);
                        });
                        //console.log(primaryStats);
                        var maxCandidate = _.max(primaryStats);
                        var candidate = candidates[primaryStats.indexOf(maxCandidate)];
                        //console.log("winner: " + candidate.description);
                        set.push(candidate);
                    }
                }
            });
        });
        var sumSets = _.map(sets, function(set) {
            return tgd.sum(_.map(set, function(item) {
                return item.getValue(type);
            }));
        });

        highestSetValue = _.max(sumSets);
        highestSet = _.sortBy(sets[sumSets.indexOf(highestSetValue)], function(item) {
            return item.tierType * -1;
        });
        return [highestSetValue, highestSet];
    },
    equipAction: function(type, highestSetValue, highestSet) {
        var character = this;

        $.toaster({
            priority: 'success',
            title: 'Result',
            message: " The highest set available for " + type + "  is  " + highestSetValue,
            settings: {
                timeout: 7 * 1000
            }
        });

        var count = 0;
        var done = function() {
            count++;
            if (count == highestSet.length) {
                var msa = adhoc.transfer(character.id, true);
                tgd.localLog(msa);
                adhoc.swapItems(msa, character.id, function() {
                    $.toaster({
                        settings: {
                            timeout: 7 * 1000
                        },
                        priority: 'success',
                        title: 'Result',
                        message: " Completed equipping the highest " + type + " set at " + highestSetValue
                    });
                    character.statsShowing(false);
                });
            }
        };
        //console.log(highestSet); abort;

        var adhoc = new tgd.Loadout();
        _.each(highestSet, function(candidate) {
            var itemEquipped = character.itemEquipped(candidate.bucketType);
            if (itemEquipped && itemEquipped._id && itemEquipped._id !== candidate._id) {
                var message;
                if ((type == "Light" && candidate.primaryStatValue() > itemEquipped.primaryStatValue()) || type != "Light") {
                    adhoc.addUniqueItem({
                        id: candidate._id,
                        bucketType: candidate.bucketType,
                        doEquip: true
                    });
                    message = candidate.bucketType + " can have a better item with " + candidate.description;
                    tgd.localLog(message);
                } else {
                    message = candidate.description + " skipped because the equipped item (" + itemEquipped.description + ") is equal or greater light";
                }
                $.toaster({
                    priority: 'info',
                    title: 'Equip',
                    message: message,
                    settings: {
                        timeout: tgd.defaults.toastTimeout
                    }
                });
                done();
            } else {
                done();
            }
        });
    },
    equipHighest: function(type) {
        var character = this;
        return function() {
            if (character.id == "Vault") return;

            var armor = [].concat(tgd.DestinyArmorPieces);
            var weapons = tgd.DestinyWeaponPieces;
            var items = _.flatten(_.map(app.characters(), function(avatar) {
                return avatar.items();
            }));

            var highestSet;
            var highestSetValue;
            var bestArmorSets;
            var bestWeaponSets;
            if (type == "Best") {
                var bestSets,
                    weaponsEquipped = _.filter(character.equippedGear(), function(item) {
                        return item.weaponIndex > -1
                    }),
                    weaponTypes = _.map(app.weaponTypes(), function(type) {
                        return type.name.split(" ")[0];
                    }).concat(tgd.DestinyWeaponPieces);
                $("body").css("cursor", "progress");
                setTimeout(function() {
                    bestSets = character.findBestArmorSetV2(items);
                    var highestTier = Math.floor(_.max(_.pluck(bestSets, 'score'))),
                        armorBuilds = {};
                    _.each(bestSets, function(combo) {
                        if (combo.score >= highestTier) {
                            var statTiers = "",
                                stats = character.joinStats(combo.set);
                            combo.stats = [];
                            _.each(stats, function(stat, name) {
                                statTiers = statTiers + " <strong>" + name.substring(0, 3) + "</strong> T" + Math.floor(stat / tgd.DestinySkillTier);
                                combo.stats.push(stat);
                            });
                            combo.light = character.calculatePowerLevelWithItems(combo.set.concat(weaponsEquipped));
                            combo.statTiers = $.trim(statTiers);
                            combo.statValues = _.values(stats).join("/");
                            combo.perks = _.filter(
                                _.flatten(
                                    _.map(combo.set, function(item) {
                                        return _.map(item.perks, function(perk) {
                                            perk.bucketType = item.bucketType;
                                            return perk;
                                        });
                                    })
                                ),
                                function(perk) {
                                    return perk.active === true && _.intersection(weaponTypes, perk.name.split(" ")).length > 0;
                                }
                            );
                            if (combo.statTiers in armorBuilds && combo.score > armorBuilds[combo.statTiers].score || !(combo.statTiers in armorBuilds)) {
                                armorBuilds[combo.statTiers] = combo;
                            }
                        }
                    });
                    armorBuilds = _.sortBy(armorBuilds, function(combo) {
                        return _.max(combo.stats) * -1;
                    });
                    if (armorBuilds.length === 1) {
                        highestSet = bestSets[bestSets.length - 1].set;
                        highestSetValue = bestSets[bestSets.length - 1].score.toFixed(2) + "/15.9";
                        character.equipAction(type, highestSetValue, highestSet);
                    } else {
                        var $template = tgd.armorTemplates({
                            builds: armorBuilds
                        });
                        (new tgd.dialog({
                            buttons: [{
                                label: app.activeText().movepopup_equip,
                                action: function(dialog) {
                                    if ($("input.armorBuild:checked").length === 0) {
                                        BootstrapDialog.alert("Error: Please select one armor build to equip.");
                                    } else {
                                        var selectedBuild = $("input.armorBuild:checked").val();
                                        highestCombo = _.findWhere(armorBuilds, {
                                            statTiers: selectedBuild
                                        });
                                        character.equipAction(type, highestCombo.score, highestCombo.set);
                                        dialog.close();
                                    }
                                }
                            }, {
                                label: app.activeText().cancel,
                                action: function(dialog) {
                                    dialog.close();
                                }
                            }]
                        })).title("Armor Builds Found for Tier " + highestTier).content($template).show(true, function() {}, function() {
                            $("a.itemLink").each(function() {
                                var element = $(this);
                                var itemId = element.attr("itemId");
                                element.click(false);
                                Hammer(element[0], {
                                    time: 2000
                                }).on("press", function(ev) {
                                    $ZamTooltips.lastElement = element;
                                    $ZamTooltips.show("destinydb", "items", itemId, element);
                                });
                            });
                        });
                    }
                    $("body").css("cursor", "default");
                }, 300);
            } else if (type == "Light") {
                bestArmorSets = character.findHighestItemBy("Light", armor, items)[1];
                tgd.localLog("bestArmorSets: " + _.pluck(bestArmorSets, 'description'));
                bestWeaponSets = character.findHighestItemBy("Light", weapons, items)[1];
                tgd.localLog("bestWeaponSets: " + _.pluck(bestWeaponSets, 'description'));
                highestSet = bestArmorSets.concat(bestWeaponSets);
                tgd.localLog("highestSet: " + _.pluck(highestSet, 'description'));
                highestSetValue = character.calculatePowerLevelWithItems(highestSet);
                character.equipAction(type, highestSetValue, highestSet);
            } else if (type == "All") {
                bestArmorSets = character.findHighestItemBy("All", armor, items);
                tgd.localLog("bestArmorSets: " + _.pluck(bestArmorSets, 'description'));
                highestSet = bestArmorSets[1];
                highestSetValue = bestArmorSets[0];
                character.equipAction(type, highestSetValue, highestSet);
            } else {
                bestArmorSets = character.findHighestItemBy(type, armor, items);
                if (bestArmorSets[0] < tgd.DestinySkillCap) {
                    highestSetValue = bestArmorSets[0];
                    highestSet = bestArmorSets[1];
                } else {
                    bestArmorSets = character.reduceMaxSkill(type, armor, items);
                    highestSetValue = bestArmorSets[0];
                    highestSet = bestArmorSets[1];
                }
                character.equipAction(type, highestSetValue, highestSet);
            }

        };
    }
};
window.Hammer.Tap.prototype.defaults.threshold = 9;

var app = function() {
    var self = this;

    this.loadingUser = ko.observable(false);
    this.hiddenWindowOpen = ko.observable(false);
    this.loadoutMode = ko.observable(false);
    this.destinyDbMode = ko.observable(false);
    this.dynamicMode = ko.observable(false);
    this.viewOptionsEnabled = ko.observable(false);
    this.activeLoadout = ko.observable(new tgd.Loadout());
    this.loadouts = ko.observableArray();
    this.searchKeyword = ko.observable(tgd.defaults.searchKeyword);
    this.preferredSystem = ko.pureComputed(new tgd.StoreObj("preferredSystem"));
    this.appLocale = ko.pureComputed(new tgd.StoreObj("appLocale"));
    this.locale = ko.pureComputed(new tgd.StoreObj("locale"));
    this.layoutMode = ko.pureComputed(new tgd.StoreObj("layoutMode"));
    this.ccWidth = ko.pureComputed(new tgd.StoreObj("ccWidth"));
    this.vaultColumns = ko.pureComputed(new tgd.StoreObj("vaultColumns"));
    this.vaultWidth = ko.pureComputed(new tgd.StoreObj("vaultWidth"));
    this.vaultPos = ko.pureComputed(new tgd.StoreObj("vaultPos"));
    this.xsColumn = ko.pureComputed(new tgd.StoreObj("xsColumn"));
    this.smColumn = ko.pureComputed(new tgd.StoreObj("smColumn"));
    this.mdColumn = ko.pureComputed(new tgd.StoreObj("mdColumn"));
    this.lgColumn = ko.pureComputed(new tgd.StoreObj("lgColumn"));
    this.activeView = ko.pureComputed(new tgd.StoreObj("activeView"));
    this.activeSort = ko.pureComputed(new tgd.StoreObj("activeSort"));
    this.autoUpdates = ko.pureComputed(new tgd.StoreObj("autoUpdates", "true"));
    this.doRefresh = ko.pureComputed(new tgd.StoreObj("doRefresh", "true"));
    this.autoXferStacks = ko.pureComputed(new tgd.StoreObj("autoXferStacks", "true"));
    this.padBucketHeight = ko.pureComputed(new tgd.StoreObj("padBucketHeight", "true"));
    this.dragAndDrop = ko.pureComputed(new tgd.StoreObj("dragAndDrop", "true"));
    this.advancedTooltips = ko.pureComputed(new tgd.StoreObj("advancedTooltips", "true"));
    this.tooltipsEnabled = ko.pureComputed(new tgd.StoreObj("tooltipsEnabled", "true", function(newValue) {
        $ZamTooltips.isEnabled = newValue;
    }));
    this.refreshSeconds = ko.pureComputed(new tgd.StoreObj("refreshSeconds"));
    this.tierFilter = ko.pureComputed(new tgd.StoreObj("tierFilter"));
    this.weaponFilter = ko.observable(tgd.defaults.weaponFilter);
    this.armorFilter = ko.observable(tgd.defaults.armorFilter);
    this.generalFilter = ko.observable(tgd.defaults.generalFilter);
    this.dmgFilter = ko.observableArray(tgd.defaults.dmgFilter);
    this.progressFilter = ko.observable(tgd.defaults.progressFilter);
    this.setFilter = ko.observableArray(tgd.defaults.setFilter);
    this.activeClasses = ko.observableArray(tgd.defaults.activeClasses);
    this.shareView = ko.observable(tgd.defaults.shareView);
    this.shareUrl = ko.observable(tgd.defaults.shareUrl);
    this.showMissing = ko.observable(tgd.defaults.showMissing);
    this.customFilter = ko.observable(tgd.defaults.customFilter);
    this.showDuplicate = ko.observable(tgd.defaults.showDuplicate);
    this.showArmorSC = ko.observable(tgd.defaults.showArmorSC);
    this.showArmorPerks = ko.observable(tgd.defaults.showArmorPerks);
    this.armorViewBy = ko.observable(tgd.defaults.armorViewBy);

    this.sortedLoadouts = ko.pureComputed(function() {
        return self.loadouts().sort(function(left, right) {
            return left.name == right.name ? 0 : (left.name < right.name ? -1 : 1);
        });
    });

    this.activeItem = ko.observable();
    this.activeUser = ko.observable({});
    this.allLayouts = ko.observableArray().extend({
        rateLimit: {
            timeout: 1000,
            method: "notifyWhenChangesStop"
        }
    });
    this.activeLayouts = ko.pureComputed(function() {
        return _.filter(self.allLayouts(), function(layout) {
            return (self.activeView() == layout.id || self.activeView() == "0");
        });
    });
    this.tierTypes = ko.observableArray();
    this.weaponTypes = ko.observableArray();
    this.characters = ko.observableArray().extend({
        rateLimit: {
            timeout: 1000,
            method: "notifyWhenChangesStop"
        }
    });
    this.orderedCharacters = ko.pureComputed(function() {
        return self.characters().sort(function(a, b) {
            return a.order() - b.order();
        });
    });
    this.currentLocale = ko.computed(function() {
        var locale = self.locale();
        if (self.appLocale() !== "") {
            locale = self.appLocale();
        }
        return locale;
    });
    this.activeText = ko.pureComputed(function() {
        return tgd.locale[self.currentLocale()];
    });
    this.createLoadout = function() {
        self.loadoutMode(true);
        self.activeLoadout(new tgd.Loadout());
    };
    this.cancelLoadout = function() {
        self.loadoutMode(false);
        self.dynamicMode(false);
        self.activeLoadout(new tgd.Loadout());
    };

    this.startMultiSelect = function() {
        self.dynamicMode(true);
        self.createLoadout();
    };

    this.showHelp = function() {
        self.toggleBootstrapMenu();
        (new tgd.dialog()).title(self.activeText().menu_help).content(tgd.helpTemplate()).show();
    };

    this.showLanguageSettings = function() {
        self.toggleBootstrapMenu();
        (new tgd.dialog({
            message: tgd.languagesTemplate({
                locale: self.currentLocale(),
                languages: tgd.languages
            })
        })).title(self.activeText().menu_language).show(true, function() {}, function() {
            tgd.localLog("showed modal");
            $(".btn-setLanguage").on("click", function() {
                self.appLocale(this.value);
                self.autoUpdates(true);
                tgd.checkUpdates();
                BootstrapDialog.alert("Downloading updated language files");
                $(".btn-setLanguage").removeClass("btn-primary");
                $(this).addClass("btn-primary");
            });
        });
    };

    this.handleGoogleResponse = function(data) {
        if (data && data.response) {
            if (data.response.errorType) {
                BootstrapDialog.alert("Error: " + data.response.errorType);
            } else if (data.response.orderId) {
                BootstrapDialog.alert("Donation accepted Ref# " + data.response.orderId);
            } else {
                BootstrapDialog.alert("Unknown error has occurred");
            }
        } else {
            BootstrapDialog.alert("No response returned");
        }
    };

    this.showDonate = function() {
        self.toggleBootstrapMenu();
        (new tgd.dialog()).title(self.activeText().donation_title).content(tgd.donateTemplate()).show(true, function() {}, function() {
            $("a.donatePaypal").click(function() {
                window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=XGW27FTAXSY62&lc=" + self.activeText().paypal_code + "&no_note=1&no_shipping=1&currency_code=USD", "_system");
                return false;
            });
            $("div.supportsIAB").toggle(isChrome === true || isAndroid === true || isIOS === true);
            $("div.chromeWallet").toggle(isChrome === true);
            $("div.googlePlay").toggle(isAndroid === true);
            $("div.appleIAP").toggle(isIOS === true);
            $("a.donate").bind("click", function() {
                if (isChrome) {
                    google.payments.inapp.buy({
                        'parameters': {
                            'env': 'prod'
                        },
                        'sku': $(this).attr("sku"),
                        'success': self.handleGoogleResponse,
                        'failure': self.handleGoogleResponse
                    });
                } else if (isAndroid || isIOS) {
                    inappbilling.buy(
                        function() {
                            BootstrapDialog.alert("Donation accepted, thank you for your support");
                        },
                        function() {},
                        $(this).attr("sku")
                    );
                }
            });
        });
    };

    this.showAbout = function() {
        self.toggleBootstrapMenu();
        (new tgd.dialog()).title(self.activeText().menu_about).content(tgd.aboutTemplate()).show();
    };

    this.clearFilters = function(model, element) {
        self.toggleBootstrapMenu();
        self.activeView(tgd.defaults.activeView);
        self.activeSort(tgd.defaults.activeSort);
        self.searchKeyword(tgd.defaults.searchKeyword);
        self.refreshSeconds(tgd.defaults.refreshSeconds);
        self.tierFilter(tgd.defaults.tierFilter);
        self.weaponFilter(tgd.defaults.weaponFilter);
        self.armorFilter(tgd.defaults.armorFilter);
        self.generalFilter(tgd.defaults.generalFilter);
        self.dmgFilter([]);
        self.progressFilter(tgd.defaults.progressFilter);
        self.setFilter([]);
        self.shareView(tgd.defaults.shareView);
        self.shareUrl(tgd.defaults.shareUrl);
        self.showMissing(tgd.defaults.showMissing);
        self.showDuplicate(tgd.defaults.showDuplicate);
        self.customFilter(tgd.defaults.customFilter);
        self.showArmorPerks(tgd.defaults.showArmorPerks);
        self.armorViewBy(tgd.defaults.armorViewBy);
        $(element.target).removeClass("active");
        return false;
    };

    this.renderCallback = function(context, content, element, callback) {
        if (element) lastElement = element;
        content = content.replace(/(<img\ssrc=")(.*?)("\s?>)/g, '');
        var instanceId = $(lastElement).attr("instanceId"),
            activeItem, query, $content = $("<div>" + content + "</div>");
        if (instanceId > 0) {
            query = {
                '_id': instanceId
            };
        } else {
            var id = $(lastElement).attr("href");
            query = {
                id: parseInt(id.split("/")[id.split("/").length - 1])
            };
        }
        self.characters().forEach(function(character) {
            var item = _.findWhere(character.items(), query);
            if (item) activeItem = item;
        });
        if (activeItem) {
            /* Title using locale */
            $content.find("h2.destt-has-icon").text(activeItem.description);
            /* Sub title for materials and consumables */
            if (tgd.DestinyGeneralItems["GlimmerConsumables"].indexOf(activeItem.id) > -1) {
                $content.find("div.destt-info span").after(" valued at " + (activeItem.primaryStat() * 200) + "G");
            }
            /* Add Required Level if provided */
            if (activeItem.equipRequiredLevel) {
                var classType = (activeItem.classType == 3) ? '' : (' for  ' + tgd.DestinyClass[activeItem.classType]);
                $content.find(".destt-required-level").remove();
                $content.find(".destt-title").after('<span class="destt-info" style="float:right;">Required Level: <span>' + activeItem.equipRequiredLevel + classType + '</span></span>');
            }
            /* Type using locale */
            $content.find("h3.destt-has-icon").text(activeItem.typeName);
            /* Primary Stat and Stat Type */
            var primaryStatMin = $content.find(".destt-primary-min");
            if (primaryStatMin.length === 0 && (activeItem.armorIndex > -1 || activeItem.weaponIndex > -1) && activeItem.primaryStat() !== "") {
                var statType = (activeItem.armorIndex > -1) ? "DEFENSE" : "ATTACK";
                var statBlock = '<div class="destt-primary"><div class="destt-primary-min">' + activeItem.primaryStat() + '</div><div class="destt-primary-max destt-primary-no-max">' + statType + '</div></div>';
                $content.find(".destt-desc").before(statBlock);
            } else {
                primaryStatMin.html(activeItem.primaryStat());
                /* Description using locale */
            }
            $content.find(".destt-desc").text(activeItem.itemDescription);
            /* Remove Emblem Text */
            if ($content.find(".fhtt-emblem").length > 0) {
                $content.find("span").remove();
            }
            /* Add Emblem Icon */
            if ($content.find(".fhtt-emblem-icon").length > 0) {
                $content.find(".fhtt-emblem-icon").html($("<img>").attr("src", activeItem.icon));
            }
            /* Damage Colors */
            if ($content.find("[class*='destt-damage-color-']").length === 0 && activeItem.damageType > 1) {
                var burnIcon = $("<div></div>").addClass("destt-primary-damage-" + activeItem.damageType);
                $content.find(".destt-primary").addClass("destt-damage-color-" + activeItem.damageType).prepend(burnIcon);
            }
            /* Armor Stats */
            if (!_.isEmpty(activeItem.stats)) {
                var stats = $content.find(".destt-stat");
                if (stats.length === 0) {
                    $content.find(".destt-desc").after(tgd.statsTemplate({
                        stats: activeItem.stats
                    }));
                    stats = $content.find(".destt-stat");
                }
                var itemStats, itemDef = _itemDefs[activeItem.itemHash];
                if (itemDef && itemDef.stats) {
                    itemStats = _.map(itemDef.stats, function(obj, key) {
                        obj.name = _statDefs[key].statName;
                        return obj;
                    });
                }
                stats.html(
                    stats.find(".stat-bar").map(function(index, stat) {
                        var $stat = $("<div>" + stat.outerHTML + "</div>"),
                            label = $stat.find(".stat-bar-label"),
                            labelText = $.trim(label.text());
                        if (labelText in activeItem.stats) {
                            label.text(labelText + ": " + activeItem.stats[labelText]);
                            if ($stat.find(".stat-bar-static-value").length > 0) {
                                $stat.find(".stat-bar-static-value").text(" Min/Max: " + $stat.find(".stat-bar-static-value").text());
                            } else {
                                var statObj = _.findWhere(itemStats, {
                                    name: labelText
                                });
                                if (statObj && statObj.minimum && statObj.maximum && statObj.minimum > 0 && statObj.maximum > 0) {
                                    $stat.find(".stat-bar-empty").text(" Min/Max : " + statObj.minimum + "/" + statObj.maximum);
                                }
                            }

                        }
                        return $stat.html();
                    }).get().join("")
                );
                if (self.advancedTooltips() === true && activeItem.weaponIndex > -1 && itemStats) {
                    var magazineRow = stats.find(".stat-bar:last");
                    var desireableStats = ["Aim assistance", "Equip Speed", "Recoil direction"];
                    _.each(desireableStats, function(statName) {
                        var statObj = _.findWhere(itemStats, {
                            name: statName
                        });
                        if (statObj) {
                            var clonedRow = magazineRow.clone();
                            clonedRow.find(".stat-bar-label").html(statObj.name + ":" + statObj.value);
                            if (statObj.minimum > 0 && statObj.maximum > 0) {
                                clonedRow.find(".stat-bar-static-value").html("Min/Max : " + statObj.minimum + "/" + statObj.maximum);
                            }
                            magazineRow.before(clonedRow);
                        }
                    });
                }
            }
            if (activeItem.perks.length > 0) {
                var activePerksTemplate = tgd.perksTemplate({
                    perks: _.filter(activeItem.perks, function(perk) {
                        return perk.active === true || (perk.active === false && self.advancedTooltips() === true); //&& perk.isExclusive == -1
                    })
                });
                //TODO: Can't check bucketType bc a weapon might exist in Lost Items, need to use 'itemCategoryHashes' to be able to categorize items properly
                var weaponTypes = _.pluck(app.weaponTypes(), 'name');
                if (weaponTypes.indexOf(activeItem.typeName) > -1) {
                    // Weapon Perks (Pre-HoW) 
                    if ($content.find(".destt-talent").length == 1 && $content.find(".destt-talent-description").text().indexOf("Year 1")) {
                        $content.find(".destt-talent").replaceWith(activePerksTemplate);
                    }
                    // Weapon Perks (Post-HoW)
                    else if ($content.find(".destt-talent").length === 0) {
                        $content.find(".destt-stat").after(activePerksTemplate);
                    }
                } else if (activeItem.armorIndex > -1) {
                    // Armor Perks: this only applies to armor with existing perks
                    if ($content.find(".destt-talent").length > 0) {
                        $content.find(".destt-talent").replaceWith(activePerksTemplate);
                    }
                    // this applies to ghost shells, maybe re rollable armor
                    else {
                        $content.find(".destt-stat").after(activePerksTemplate);
                    }
                }
                $content.find("img").bind("error", function() {
                    var perkName = $(this).attr("data-name");
                    var src = _.findWhere(activeItem.perks, {
                        name: perkName
                    }).iconPath;
                    var element = $('img[data-name="' + perkName + '"]')[0];
                    tgd.imageErrorHandler(src, element)();
                });
            }
            if (activeItem.objectives && activeItem.objectives.length > 0) {
                _.each(activeItem.objectives, function(objective) {
                    var info = _objectiveDefs[objective.objectiveHash];
                    var label = "",
                        value = 0;
                    if (info.displayDescription) {
                        label = "<strong>" + info.displayDescription + "</strong>:";
                    }
                    if (info && info.completionValue) {
                        value = Math.floor((objective.progress / info.completionValue) * 100) + "% (" + objective.progress + '/' + info.completionValue + ')';
                    }
                    $content.find(".destt-desc").after(label + value + "<br>");
                });
            }
        }
        var width = $(window).width();
        //this fixes issue #35 makes destinydb tooltips fit on a mobile screen
        if (width < 340) {
            $content.find(".fhtt.des").css("width", (width - 15) + "px");
            $content.find(".stat-bar-empty").css("width", "125px");
        }
        callback($content.html());
    };

    this.toggleAutoUpdates = function() {
        self.toggleBootstrapMenu();
        self.autoUpdates(!self.autoUpdates());
        if (self.autoUpdates()) {
            tgd.checkUpdates();
        } else {
            localStorage.setItem("manifest", null);
            localStorage.setItem("last_update_files", null);
            tgd.loader.reset();
        }
    };

    this.toggleViewOptions = function() {
        self.toggleBootstrapMenu();
        self.viewOptionsEnabled(!self.viewOptionsEnabled());
        if (self.viewOptionsEnabled()) {
            $(".character").css("margin", 'auto');
            $(".character-box").css("position", 'relative');
        } else {
            $(".character").css("margin", '');
            $(".character-box").css("position", 'fixed');
        }
    };
    this.toggleRefresh = function() {
        self.toggleBootstrapMenu();
        self.doRefresh(!self.doRefresh());
    };
    this.togglePadBucketHeight = function() {
        self.toggleBootstrapMenu();
        self.padBucketHeight(!self.padBucketHeight());
        self.redraw();
    };
    this.toggleDragAndDrop = function() {
        self.toggleBootstrapMenu();
        self.dragAndDrop(!self.dragAndDrop());
        if (self.dragAndDrop() === true) {
            self.padBucketHeight(true);
            location.reload();
        }
    };
    this.toggleTransferStacks = function() {
        self.toggleBootstrapMenu();
        self.autoXferStacks(!self.autoXferStacks());
    };
    this.toggleDestinyDbMode = function() {
        self.toggleBootstrapMenu();
        self.destinyDbMode(!self.destinyDbMode());
    };
    this.toggleDestinyDbTooltips = function() {
        self.toggleBootstrapMenu();
        self.tooltipsEnabled(!self.tooltipsEnabled());
    };
    this.toggleAdvancedTooltips = function() {
        self.toggleBootstrapMenu();
        self.advancedTooltips(!self.advancedTooltips());
    };
    this.toggleShareView = function() {
        self.toggleBootstrapMenu();
        if (!self.shareView()) {
            var username = self.preferredSystem().toLowerCase() + "/" + self.bungie.gamertag();
            self.shareUrl(tgd.remoteServer + "/share/?" + username);
            self.apiRequest({
                action: "save_inventory",
                username: username,
                data: self.generateStatic()
            }, function() {
                self.shareView(!self.shareView());
            });
        }
    };
    this.toggleDuplicates = function(model, event) {
        self.toggleBootstrapMenu();
        self.showDuplicate(!self.showDuplicate());
        self.customFilter(self.showDuplicate());
        if (self.showDuplicate()) {
            var items = _.flatten(_.map(app.characters(), function(avatar) {
                return avatar.items();
            }));
            var ids = _.pluck(items, 'id');
            _.each(items, function(item) {
                var itemCount = _.filter(ids, function(id) {
                    return id == item.id;
                }).length;
                item.isFiltered(itemCount > 1);
            });
        }
    };
    this.toggleArmorPerks = function() {
        self.toggleBootstrapMenu();
        self.showArmorPerks(!self.showArmorPerks());
        self.customFilter(self.showArmorPerks());
        if (self.showArmorPerks()) {
            self.activeView(2);
            _.each(app.characters(), function(character) {
                var weaponsEquipped = _.filter(character.weapons(), function(item) {
                    return item.isEquipped();
                });
                var weaponTypes = _.map(weaponsEquipped, function(item) {
                    return item && item.typeName && item.typeName.split(" ")[0];
                });
                _.each(character.armor(), function(item) {
                    var itemPerks = _.pluck(item.perks, 'name');
                    var matches = _.filter(itemPerks, function(perk) {
                        return _.filter(perk.split(" "), function(name) {
                            return weaponTypes.indexOf(name) > -1;
                        }).length > 0;
                    });
                    item.isFiltered(matches.length > 0);
                });
            });
        }
    };
    this.toggleArmorSC = function() {
        self.toggleBootstrapMenu();
        self.showArmorSC(!self.showArmorSC());
        self.customFilter(self.showArmorSC());
        if (self.showArmorSC()) {
            self.activeView(2);
            _.each(app.characters(), function(character) {
                var damagedBasedSubclass = _.filter(character.items(), function(item) {
                    return item.bucketType.indexOf("Subclasses") > -1 && item.isEquipped() === true;
                });
                if (damagedBasedSubclass.length > 0) {
                    damagedBasedSubclass = damagedBasedSubclass[0].damageTypeName;
                    _.each(character.armor(), function(item) {
                        var itemPerks = _.pluck(item.perks, 'name');
                        var matches = _.filter(itemPerks, function(perk) {
                            return _.filter(perk.split(" "), function(name) {
                                return damagedBasedSubclass.indexOf(name) > -1;
                            }).length > 0;
                        });
                        item.isFiltered(matches.length > 0);
                    });
                }
            });
        }
    };
    this.toggleArmorClass = function() {
        var classType = this.toString();
        self.toggleBootstrapMenu();
        self.activeClasses[self.activeClasses().indexOf(classType) == -1 ? "push" : "remove"](classType);
        self.customFilter(self.activeClasses().length > 0);
        if (self.customFilter()) {
            self.activeView(2);
            var classTypeNums = _.map(self.activeClasses(), function(className) {
                return _.values(tgd.DestinyClass).indexOf(className);
            });;
            _.each(app.characters(), function(character) {
                _.each(character.armor(), function(item) {
                    item.isFiltered(classTypeNums.indexOf(item.classType) > -1);
                });
            });
        }
    };
    this.showArmorClass = function(classType) {
        return self.activeClasses().indexOf(classType) > -1;
    };
    this.toggleShowMissing = function() {
        self.toggleBootstrapMenu();
        if (self.setFilter().length === 0) {
            $.toaster({
                priority: 'danger',
                title: 'Warning',
                message: self.activeText().pick_a_set,
                settings: {
                    timeout: tgd.defaults.toastTimeout
                }
            });
        } else {
            self.showMissing(!self.showMissing());
        }
    };
    this.openStatusReport = function(type) {
        return function() {
            self.toggleBootstrapMenu();
            var sReportURL;
            var prefSystem = self.preferredSystem().toLowerCase();
            var info = self.bungie.systemIds[prefSystem];
            if (type === 1) {
                sReportURL = "http://destinystatus.com/" + prefSystem + "/" + info.id;
            } else if (type === 2) {
                sReportURL = "http://my.destinytrialsreport.com/" + (prefSystem == "xbl" ? "xbox" : "ps") + "/" + info.id;
            } else if (type === 3) {
                sReportURL = "http://destinytracker.com/destiny/player/" + (prefSystem == "xbl" ? "xbox" : "ps") + "/" + info.id;
            } else if (type === 4) {
                sReportURL = "http://guardian.gg/profile/" + info.type + "/" + info.id;
            }
            window.open(sReportURL, "_system");
            return false;
        }
    };
    this.setArmorView = function(type) {
        var type = this.toString();
        self.armorViewBy(type);
    };
    this.setVaultColumns = function(columns) {
        var columns = this.toString();
        self.vaultColumns(columns);
        self.redraw();
    };
    this.setVaultWidth = function() {
        var width = this.toString();
        self.vaultWidth(width);
        self.redraw();
    };
    this.setCCWidth = function(model, evt) {
        var width = $(evt.target).text();
        width = (width == "Default") ? "" : width;
        self.ccWidth(width);
        self.redraw();
    };
    this._setSetFilter = function(collection) {
        self.toggleBootstrapMenu();
        if (collection in _collections || collection == "All") {
            if (collection == "Year 2 Items" || collection == "Year 1 Items") {
                _collections[collection] = _.pluck(_.filter(_.flatten(_.map(app.characters(), function(character) {
                    return character.items();
                })), function(item) {
                    if (collection == "Year 2 Items") {
                        return item.primaryStatValue() > tgd.DestinyY1Cap || _collections[collection].indexOf(item.id) > -1;
                    } else {
                        return item.primaryStatValue() <= tgd.DestinyY1Cap && _collections["Year 2 Items"].indexOf(item.id) == -1;
                    }

                }), 'id');
            }
            self.setFilter(collection == "All" ? [] : _collections[collection]);
            if (collection == "All") {
                self.showMissing(false);
            } else if (collection.indexOf("Weapons") > -1) {
                self.activeView(1);
                self.armorFilter(0);
                self.generalFilter(0);
            } else if (collection.indexOf("Armor") > -1) {
                self.activeView(2);
                self.weaponFilter(0);
                self.generalFilter(0);
            }
        } else {
            self.setFilter([]);
            self.showMissing(false);
        }
    }
    this.setSetFilter = function(collection) {
        return this._setSetFilter;
    };
    this.setSort = function(model, event) {
        self.toggleBootstrapMenu();
        self.activeSort($(event.target).closest('li').attr("value"));
    };
    this.setView = function(model, event) {
        self.toggleBootstrapMenu();
        self.activeView($(event.target).closest('li').attr("value"));
    };
    this.setDmgFilter = function() {
        self.toggleBootstrapMenu();
        var dmgType = this.toString();
        if (self.dmgFilter.indexOf(dmgType) == -1) {
            self.dmgFilter.push(dmgType);
        } else {
            self.dmgFilter.remove(dmgType);
        }
    };
    this.setTierFilter = function() {
        var tier = this.toString();
        self.toggleBootstrapMenu();
        self.tierFilter(tier);
    };
    this._setWeaponFilter = function(weaponType) {
        self.toggleBootstrapMenu();
        self.activeView(1);
        var type = weaponType.name;
        tgd.localLog("weapon type: " + type);
        self.weaponFilter(type);
    };
    this.setWeaponFilter = function(weaponType) {
        return this._setWeaponFilter;
    };
    this._setArmorFilter = function() {
        self.toggleBootstrapMenu();
        self.activeView(2);
        var armorType = this;
        tgd.localLog("armor type: " + armorType);
        self.armorFilter(armorType);
    }
    this.setArmorFilter = function(armorType) {
        return this._setArmorFilter.bind(armorType);
    };
    this.setGeneralFilter = function() {
        var searchType = this.toString();
        self.toggleBootstrapMenu();
        if (searchType != "Engram") self.activeView(3);
        self.generalFilter(searchType);
    };
    this.setProgressFilter = function(model, event) {
        self.toggleBootstrapMenu();
        self.progressFilter($(event.target).closest('li').attr("value"));
    };
    this.missingSets = ko.pureComputed(function() {
        var allItemNames = _.pluck(_.flatten(_.map(self.characters(), function(character) {
            return character.items();
        })), 'description');
        var armorFilter = ko.unwrap(self.armorFilter);
        var weaponFilter = ko.unwrap(self.weaponFilter);
        var missingIds = _.filter(self.setFilter(), function(id) {
            var isMissing = true;
            var isVisible = false;
            if (id in _itemDefs) {
                var info = _itemDefs[id];
                var description = decodeURIComponent(info.itemName);
                isMissing = allItemNames.indexOf(description) == -1;
                if (info.bucketTypeHash in tgd.DestinyBucketTypes) {
                    var bucketType = tgd.DestinyBucketTypes[info.bucketTypeHash];
                    var typeName = decodeURIComponent(info.itemTypeName);
                    isVisible = (self.armorFilter() === 0 || armorFilter == bucketType) && (self.weaponFilter() === 0 || weaponFilter == typeName);
                }
            }
            return isMissing && isVisible;
        });
        return missingIds;
    });

    this.addWeaponTypes = function(weapons) {
        weapons.forEach(function(item) {
            if (item.isEquipment === true && item.type > 1 && _.where(self.weaponTypes(), {
                    name: item.typeName
                }).length === 0) {
                self.weaponTypes.push({
                    name: item.typeName,
                    type: item.type
                });
            }
        });
    };


    this.addTierTypes = function(items) {
        items.forEach(function(item) {
            if (item.tierTypeName && item.tierType > 0 && _.where(self.tierTypes(), {
                    name: item.tierTypeName
                }).length === 0) {
                self.tierTypes.push({
                    name: item.tierTypeName,
                    tier: item.tierType
                });
            }
        });
    };

    this.makeBackgroundUrl = function(path, excludeDomain) {
        return 'url("' + (excludeDomain ? "" : self.bungie.getUrl()) + path + '")';
    };

    this.hasBothAccounts = function() {
        return !_.isEmpty(self.activeUser().psnId) && !_.isEmpty(self.activeUser().gamerTag);
    };

    this.useXboxAccount = function() {
        self.toggleBootstrapMenu();
        self.preferredSystem("XBL");
        self.characters.removeAll();
        self.loadingUser(true);
        self.search();
    };

    this.usePlaystationAccount = function() {
        self.toggleBootstrapMenu();
        self.preferredSystem("PSN");
        self.characters.removeAll();
        self.loadingUser(true);
        self.search();
    };

    this.redraw = function() {
        setTimeout(self.bucketSizeHandler, 1000);
        setTimeout(self.quickIconHighlighter, 1000);
    };

    var loadingData = false;
    this.search = function() {
        if (!("user" in self.activeUser())) {
            return;
        }
        if (loadingData === true) {
            return;
        }
        loadingData = true;
        var total = 0,
            count = 0,
            profiles = [];

        function done(profile) {
            profiles.push(profile);
            count++;
            if (count == total) {
                self.characters(profiles);
                self.loadLoadouts();
                self.tierTypes.sort(function(a, b) {
                    return a.tier - b.tier;
                });
                self.weaponTypes.sort(function(a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                });
                loadingData = false;
                self.loadingUser(false);
                $ZamTooltips.init();
                //console.timeEnd("new profile");
            }
        }
        self.bungie.search(self.preferredSystem(), function(e) {
            if (e && e.error || !e) {
                loadingData = false;
                self.loadingUser(false);
                /* if the first account fails retry the next one*/
                self.preferredSystem(self.preferredSystem() == "PSN" ? "XBL" : "PSN");
                self.search();
                return;
            } else if (typeof e.data == "undefined") {
                if (e && typeof e.Message != "undefined") {
                    return BootstrapDialog.alert(e.Message);
                } else {
                    return BootstrapDialog.alert("Code 10: " + self.activeText().error_loading_inventory + JSON.stringify(e));
                }
            }
            var avatars = e.data.characters;
            var characterIds = _.sortBy(_.map(avatars, function(character) {
                return character.characterBase.characterId;
            }));
            var items = self.bungie.flattenItemArray(e.data.inventory.buckets);
            var vaultItems = _.where(items, function(item) {
                    return item.bucketName != "Invisible";
                }),
                globalItems = _.where(items, {
                    bucketName: "Invisible"
                });
            _.each(avatars, function(avatar) {
                avatar.index = characterIds.indexOf(avatar.characterBase.characterId) + 1;
                avatar.items = globalItems;
            });
            avatars.push({
                characterBase: {
                    characterId: "Vault"
                },
                items: vaultItems,
                index: parseInt(self.vaultPos())
            });
            total = avatars.length;
            _.map(avatars, function(avatar) {
                //console.time("new profile");
                var profile = new Profile(avatar);
                done(profile);
            });
        });
    };

    this.loadData = function(ref) {
        if (self.loadingUser() === false || self.hiddenWindowOpen() === true) {
            //window.t = (new Date());
            self.loadingUser(true);
            self.bungie = new tgd.bungie(self.bungie_cookies, function() {
                self.characters.removeAll();
                //console.time("self.bungie.user");
                self.bungie.user(function(user) {
                    //console.timeEnd("self.bungie.user");
                    if (user.error) {
                        if (user.error == 'network error:502') {
                            return self.logout();
                        }
                        if (isMobile) {
                            if (self.hiddenWindowOpen() === false) {
                                self.hiddenWindowOpen(true);
                                self.openHiddenBungieWindow();
                            } else {
                                setTimeout(function() {
                                    self.loadData(ref);
                                }, 1000);
                            }
                        } else {
                            self.activeUser(user);
                            self.loadingUser(false);
                        }
                        return;
                    }
                    if (ref && ref.close) {
                        ref.close();
                        self.hiddenWindowOpen(false);
                        ref = null;
                    }
                    self.activeUser(user);
                    if (user.psnId && user.gamerTag) {
                        $.toaster({
                            settings: {
                                timeout: 10 * 1000
                            },
                            priority: 'info',
                            title: 'Info',
                            message: "Currently using " + self.preferredSystem() + ", <br><a href='' id='useOtherAccount'>click here to use " + (self.preferredSystem() == "XBL" ? "PSN" : "XBL") + "</a>"
                        });
                        $("#useOtherAccount").click(function() {
                            if (self.preferredSystem() == "XBL") {
                                self.usePlaystationAccount();
                            } else {
                                self.useXboxAccount();
                            }
                        });
                    }
                    self.locale(self.activeUser().user.locale);
                    self.loadingUser(false);
                    _.defer(function() {
                        self.search();
                    });
                });
            });
        }
    };

    this.toggleBootstrapMenu = function() {
        if ($(".navbar-toggle").is(":visible"))
            $(".navbar-toggle").click();
    };

    this.refreshButton = function() {
        self.toggleBootstrapMenu();
        self.refresh();
    };

    this.logout = function() {
        self.clearCookies();
        self.bungie.logout(function() {
            window.location.reload();
        });
    };

    this.refresh = function() {
        if (self.bungie.gamertag()) {
            var count = 0,
                finish = function() {
                    count++;
                    if (count == self.characters().length) {
                        $.toaster({
                            priority: 'success',
                            title: 'Success',
                            message: "All the inventory has been updated.",
                            settings: {
                                timeout: tgd.defaults.toastTimeout
                            }
                        });
                    }
                };
            self.bungie.account(function(result) {
                if (result && result.data && result.data.characters) {
                    var characters = result.data.characters;
                    _.each(self.characters(), function(character) {
                        if (character.id != "Vault") {
                            var result = _.filter(characters, function(avatar) {
                                return avatar.characterBase.characterId == character.id;
                            })[0];
                            character.updateCharacter(result);
                        }
                        character._reloadBucket(character, undefined, finish, true);
                    });
                } else {
                    tgd.localLog(result);
                }
            });
        }
    };

    this.refreshHandler = function() {
        clearInterval(self.refreshInterval);
        if (self.loadoutMode() === true) {
            if (self.dynamicMode() === false) {
                self.toggleBootstrapMenu();
            }
            $("body").css("padding-bottom", "260px");
        } else {
            $("body").css("padding-bottom", "80px");
        }
        if (self.doRefresh() === true && self.loadoutMode() === false) {
            tgd.localLog("refresh handler enabled");
            self.refreshInterval = setInterval(function() {
                tgd.localLog("refreshing");
                self.refresh();
            }, self.refreshSeconds() * 1000);
        }
    };

    this.bucketSizeHandler = function() {
        var buckets = $("div.profile .itemBucket:visible").css({
            'height': 'auto',
            'min-height': 'auto'
        });
        if (self.padBucketHeight() === true) {
            var bucketSizes = {};
            var itemHeight = 0;
            var vaultPos = parseInt(self.vaultPos()) - 1;
            vaultPos = (vaultPos < 0) ? 0 : vaultPos;
            var vaultColumns = tgd.bootstrapGridColumns / self.vaultColumns();
            buckets.each(function() {
                var bucketType = this.className.split(" ")[2];
                var isVault = this.className.indexOf("Vault") > -1;
                var columnsPerBucket = isVault ? vaultColumns : tgd.DestinyBucketColumns[bucketType];
                var $visibleBucketItems = $(this).find(".bucket-item:visible");
                var visibleBucketHeight = $visibleBucketItems.eq(0).height();
                var bucketHeight = Math.ceil($visibleBucketItems.length / columnsPerBucket) * (visibleBucketHeight + 2);
                if ((visibleBucketHeight) && (visibleBucketHeight > itemHeight) && !isVault) {
                    itemHeight = visibleBucketHeight;
                }
                if (!(bucketType in bucketSizes)) {
                    bucketSizes[bucketType] = [bucketHeight];
                } else {
                    bucketSizes[bucketType].push(bucketHeight);
                }
            });
            //console.log(bucketSizes);
            _.each(bucketSizes, function(sizes, type) {
                //this is the max height all buckets will use
                var maxHeight = _.max(sizes);
                //this is the max height the non-vault characters will use
                var profileSizes = sizes.slice(0);
                profileSizes.splice(vaultPos, 1);
                var maxProfilesHeight = _.max(profileSizes);
                var minNumRows = 3;
                if (type == "Bounties") {
                    minNumRows = 4;
                } else if (tgd.DestinyFiveRowBuckets.indexOf(type) > -1) {
                    minNumRows = 5;
                }
                maxProfilesHeight = Math.max(itemHeight * minNumRows, maxProfilesHeight);
                var itemBuckets = buckets.filter("." + type);
                /*if ( type == "Heavy") {
                	console.log(type + " " + maxHeight);
                	console.log(type + " " + maxProfilesHeight);
                }*/
                itemBuckets.css("min-height", maxHeight);
                itemBuckets.find(".itemBucketBG").css("height", maxProfilesHeight);
                //itemBuckets.find(".itemBucketBG").parent().parent().css("height", maxProfilesHeight);
            });
            // gets all the sub class areas and makes them the same heights. I'm terrible at JQuery/CSS/HTML stuff.
            var vaultSubClass = $('div.profile .title2:visible strong:contains("Vault Sub")').parent().parent().css("height", "auto");
            var notVaultSubClass = $('div.profile .title2:visible strong:contains("Sub")').not(':contains("Vault")').first().parent().parent().css("height", "auto");
            vaultSubClass.css("min-height", notVaultSubClass.height());
            vaultSubClass.css("visibility", "hidden");
        } else {
            buckets.find(".itemBucketBG").css("height", "auto");
        }
    };

    this.globalClickHandler = function(e) {
        if ($("#move-popup").is(":visible") && e.target.className !== "itemImage") {
            $("#move-popup").hide();
            tgd.activeElement = null;
        }
    };

    this.quickIconHighlighter = function() {
        var scrollTop = $(window).scrollTop();
        $(".profile").each(function(index, item) {
            var $item = $(item);
            var characterId = $item.attr('id');
            var $quickIcon = $(".quickScrollView ." + characterId);
            var $characterBox = $(".character-box." + characterId);
            var top = $item.position().top - 55;
            var bottom = top + $item.height();
            var isActive = scrollTop >= top && scrollTop <= bottom && scrollTop > 0;
            $quickIcon.toggleClass("activeProfile", isActive);
            $characterBox.toggleClass("active", isActive);
            $characterBox.toggleClass("not-active", !isActive);
            $characterBox.css({
                width: $characterBox.parent().width() + 'px'
            });
        });
    };

    this.readBungieCookie = function(ref, loop) {
        //tgd.localLog( typeof ref.executeScript );
        //tgd.localLog( Object.keys(ref) ); 
        try {
            ref.executeScript({
                code: 'document.cookie'
            }, function(result) {
                tgd.localLog("result " + result);
                if ((result || "").toString().indexOf("bungled") > -1) {
                    self.bungie_cookies = result;
                    window.localStorage.setItem("bungie_cookies", result);
                    self.loadData(ref, loop);
                }
            });
        } catch (e) {
            tgd.localLog(e);
        }
    };

    this.openHiddenBungieWindow = function() {
        window.ref = window.open("https://www.bungie.net/en/User/Profile", '_blank', 'location=no,hidden=yes');
        ref.addEventListener('loadstop', function(event) {
            //BootstrapDialog.alert("loadstop hidden");
            self.readBungieCookie(ref, 1);
        });
    };

    this.findReference = function(item, callback) {
        if (item && item.id > 0) {
            var subscriptions = [];
            var newItemHandler = function(items) {
                var foundItem = _.where(items, {
                    _id: item._id
                });
                if (foundItem.length > 0) {
                    _.each(subscriptions, function(sub) {
                        sub.dispose();
                    });
                    callback(foundItem[0]);
                }
            };
            var allItems = _.flatten(_.map(app.characters(), function(character) {
                subscriptions.push(character.items.subscribe(newItemHandler));
                return character.items();
            }));
            newItemHandler(allItems);
        }
    };

    this.clearCookies = function() {
        window.localStorage.setItem("bungie_cookies", "");
        try {
            window.cookies.clear(function() {
                tgd.localLog("Cookies cleared");
            });
        } catch (e) {}
    };

    this.openBungieWindow = function(type) {
        return function() {
            var loop;
            if (isNWJS) {
                var gui = require('nw.gui');
                var mainwin = gui.Window.get();
                window.ref = gui.Window.open('https://www.bungie.net/en/User/SignIn/' + type + "?bru=%252Fen%252FUser%252FProfile", 'Test Popup');
            } else if (isChrome || isMobile) {
                window.ref = window.open('https://www.bungie.net/en/User/SignIn/' + type + "?bru=%252Fen%252FUser%252FProfile", '_blank', 'location=yes');
            } else {
                //window.ref = window.open('about:blank');
                //window.ref.opener = null;
                window.ref = window.open('https://www.bungie.net/en/User/SignIn/' + type, '_blank', 'toolbar=0,location=0,menubar=0');
            }
            if (isMobile) {
                ref.addEventListener('loadstop', function(event) {
                    self.readBungieCookie(ref, loop);
                });
                ref.addEventListener('exit', function() {
                    if (_.isEmpty(self.bungie_cookies)) {
                        self.readBungieCookie(ref, loop);
                    }
                });
            } else if (isNWJS) {
                window.ref.on('loaded', function() {
                    location.reload();
                });
            } else {
                clearInterval(loop);
                loop = setInterval(function() {
                    if (window.ref.closed) {
                        clearInterval(loop);
                        if (!isMobile && !isChrome) {
                            $.toaster({
                                priority: 'success',
                                title: 'Loading',
                                message: "Please wait while Firefox acquires your arsenal",
                                settings: {
                                    timeout: tgd.defaults.toastTimeout
                                }
                            });
                            var event = new CustomEvent("request-cookie-from-ps", {});
                            window.dispatchEvent(event);
                            setTimeout(function() {
                                tgd.localLog("loadData");
                                self.loadData();
                            }, 5000);
                        } else {
                            self.loadData();
                        }
                    }
                }, 100);
            }
        };
    };

    this.scrollTo = function(distance, callback) {
        if (isWindowsPhone) {
            $('html,body').scrollTop(distance);
            if (callback) callback();
        } else {
            $("body").animate({
                scrollTop: distance
            }, 300, "swing", callback);
        }
    };

    this.scrollToActiveIndex = function(newIndex) {
        var index = $(".quickScrollView img").filter(function() {
            var classAttr = $(this).attr("class"),
                className = _.isUndefined(classAttr) ? "" : classAttr;
            return className.indexOf("activeProfile") > -1;
        }).index(".quickScrollView img");
        self.scrollTo($(".profile:eq(" + index + ")").position().top - 50, function() {
            $.toaster({
                priority: 'info',
                title: 'View',
                message: tgd.DestinyViews[newIndex],
                settings: {
                    timeout: tgd.defaults.toastTimeout
                }
            });
        });
    };

    this.shiftViewLeft = function() {
        var newIndex = parseInt(self.activeView()) - 1;
        if (newIndex < 0) newIndex = 3;
        self.activeView(newIndex);
        self.scrollToActiveIndex(newIndex);
    };

    this.shiftViewRight = function() {
        var newIndex = parseInt(self.activeView()) + 1;
        if (newIndex == 4) newIndex = 0;
        self.activeView(newIndex);
        self.scrollToActiveIndex(newIndex);
    };

    this.requests = {};
    var id = -1;
    this.apiRequest = function(params, callback) {
        var apiURL = tgd.remoteServer + "/api3.cfm";
        $.ajax({
            url: apiURL,
            data: params,
            type: "POST",
            success: function(data) {
                var response = (typeof data == "string") ? JSON.parse(data) : data;
                callback(response);
            }
        });
    };

    this.staticApiRequest = function(params, callback) {
        var apiURL = tgd.remoteServer + "/static_api.cfm";
        $.ajax({
            url: apiURL,
            data: params,
            type: "POST",
            success: function(data) {
                var response = (typeof data == "string") ? JSON.parse(data) : data;
                callback(response);
            }
        });
    };

    this.saveLoadouts = function(includeMessage) {
        var _includeMessage = _.isUndefined(includeMessage) ? true : includeMessage;
        if (self.activeUser() && self.activeUser().user && self.activeUser().user.membershipId) {
            var params = {
                action: "save",
                membershipId: parseFloat(self.activeUser().user.membershipId),
                loadouts: ko.toJSON(self.loadouts())
            };
            self.apiRequest(params, function(results) {
                if (_includeMessage === true) {
                    if (results.success) {
                        $.toaster({
                            priority: 'success',
                            title: 'Saved',
                            message: "Loadouts saved to the cloud",
                            settings: {
                                timeout: tgd.defaults.toastTimeout
                            }
                        });
                    } else BootstrapDialog.alert("Error has occurred saving loadouts");
                }
            });
        } else {
            BootstrapDialog.alert("Error reading your membershipId, could not save loadouts");
        }
    };

    this.loadLoadouts = function() {
        if (self.loadouts().length === 0) {
            var _loadouts = window.localStorage.getItem("loadouts");
            if (!_.isEmpty(_loadouts)) {
                _loadouts = _.map(JSON.parse(_loadouts), function(loadout) {
                    return new tgd.Loadout(loadout);
                });
            } else {
                _loadouts = [];
            }
            self.apiRequest({
                action: "load",
                //this ID is shared between PSN/XBL so a better ID is one that applies only to one profile
                membershipId: parseFloat(self.activeUser().user.membershipId)
                    /*this one applies only to your current profile
				accountId: self.bungie.getMemberId()*/
            }, function(results) {
                var _results = [];
                if (results && results.loadouts) {
                    _results = _.isArray(results.loadouts) ? results.loadouts : [results.loadouts];
                    _results = _.map(_results, function(loadout) {
                        loadout.ids = _.isArray(loadout.ids) ? loadout.ids : [loadout.ids];
                        loadout.equipIds = _.isEmpty(loadout.equipIds) ? [] : loadout.equipIds;
                        loadout.equipIds = _.isArray(loadout.equipIds) ? loadout.equipIds : [loadout.equipIds];
                        return new tgd.Loadout(loadout);
                    });
                }
                /* one time migrate joins the two arrays and clears the local one */
                if (_loadouts.length > 0) {
                    _results = _loadouts.concat(_results);
                    window.localStorage.setItem("loadouts", "");
                }
                self.loadouts(_results);
                /* one time migrate saves the new joined array to the cloud */
                if (_loadouts.length > 0) {
                    self.saveLoadouts(false);
                }
                /*if (results && results.itemDefs) {
					tgd.localLog("downloading locale update");
					self.downloadLocale(self.currentLocale(), results.itemDefs.version);
				}*/
            });
        }
    };

    this.showWhatsNew = function(callback) {
        var container = $("<div></div>");
        container.attr("style", "overflow-y: scroll; height: 480px");
        container.html(tgd.whatsNewTemplate());
        (new tgd.dialog()).title(self.activeText().whats_new_title).content(container).show(false, function() {
            if (_.isFunction(callback)) callback();
        });
    };

    this.whatsNew = function() {
        if ($("#showwhatsnew").text() == "true") {
            var version = parseInt(tgd.version.replace(/\./g, ''));
            var cookie = window.localStorage.getItem("whatsnew");
            if (_.isEmpty(cookie) || parseInt(cookie) < version) {
                self.showWhatsNew(function() {
                    window.localStorage.setItem("whatsnew", version.toString());
                });
            }
        }
    };

    this.normalizeSingle = function(description, characters, usingbatchMode, callback) {
        var itemTotal = 0;

        /* association of character, amounts to increment/decrement */
        var characterStatus = _.map(characters, function(c) {
            var characterTotal = _.reduce(
                _.filter(c.items(), {
                    description: description
                }),
                function(memo, i) {
                    return memo + i.primaryStat();
                },
                0);
            itemTotal = itemTotal + characterTotal;
            return {
                character: c,
                current: characterTotal,
                needed: 0
            };
        });
        //tgd.localLog(characterStatus);

        if (itemTotal < characterStatus.length) {
            if (usingbatchMode === false) {
                $.toaster({
                    priority: 'danger',
                    title: 'Warning',
                    message: "Cannot distribute " + itemTotal + " " + description + " between " + characterStatus.length + " characters.",
                    settings: {
                        timeout: tgd.defaults.toastTimeout
                    }
                });
            }
            if (callback !== undefined) {
                callback();
            }
            return;
        }

        var itemSplit = (itemTotal / characterStatus.length) | 0; /* round down */
        //tgd.localLog("Each character needs " + itemSplit + " " + description);

        /* calculate how much to increment/decrement each character */
        _.each(characterStatus, function(c) {
            c.needed = itemSplit - c.current;
        });
        //tgd.localLog(characterStatus);

        var getNextSurplusCharacter = (function() {
            return function() {
                return _.filter(characterStatus, function(c) {
                    return c.needed < 0;
                })[0];
            };
        })();

        var getNextShortageCharacter = (function() {
            return function() {
                return _.filter(characterStatus, function(c) {
                    return c.needed > 0;
                })[0];
            };
        })();

        /* bail early conditions */
        if ((typeof getNextSurplusCharacter() === "undefined") || (typeof getNextShortageCharacter() === "undefined")) {
            //tgd.localLog("all items normalized as best as possible");
            if (usingbatchMode === false) {
                $.toaster({
                    priority: 'success',
                    title: 'Result',
                    message: description + " already normalized as best as possible.",
                    settings: {
                        timeout: tgd.defaults.toastTimeout
                    }
                });
            }
            if (typeof callback !== "undefined") {
                callback();
            }
            return;
        }

        var adjustStateAfterTransfer = function(surplusCharacter, shortageCharacter, amountTransferred) {
            surplusCharacter.current = surplusCharacter.current - amountTransferred;
            surplusCharacter.needed = surplusCharacter.needed + amountTransferred;
            //tgd.localLog("[Surplus (" + surplusCharacter.character.classType + ")] current: " + surplusCharacter.current + ", needed: " + surplusCharacter.needed);

            shortageCharacter.needed = shortageCharacter.needed - amountTransferred;
            shortageCharacter.current = shortageCharacter.current + amountTransferred;
            //tgd.localLog("[Shortage (" + shortageCharacter.character.classType + ")] current: " + shortageCharacter.current + ", needed: " + shortageCharacter.needed);
        };

        var nextTransfer = function(callback) {
            var surplusCharacter = getNextSurplusCharacter();
            var shortageCharacter = getNextShortageCharacter();

            if ((typeof surplusCharacter === "undefined") || (typeof shortageCharacter === "undefined")) {
                //tgd.localLog("all items normalized as best as possible");
                if (usingbatchMode === false) {
                    //self.refresh();
                    $.toaster({
                        priority: 'success',
                        title: 'Result',
                        message: "All items normalized as best as possible",
                        settings: {
                            timeout: tgd.defaults.toastTimeout
                        }
                    });
                }
                if (callback !== undefined) {
                    callback();
                }
                return;
            }
            if (surplusCharacter.character.id == shortageCharacter.character.id) {
                //tgd.localLog("surplusCharacter is shortageCharacter!?");
                if (callback !== undefined) {
                    callback();
                }
                return;
            }
            /* all the surplus characters' items that match the description. might be multiple stacks. */
            var surplusItems = _.filter(surplusCharacter.character.items(), {
                description: description
            });
            var surplusItem = surplusItems[0];
            //TODO: TypeError: undefined is not an object (evaluating 'surplusItem.primaryStat')
            var maxWeCanWorkWith = Math.min(surplusItem.primaryStat(), (surplusCharacter.needed * -1));
            var amountToTransfer = Math.min(maxWeCanWorkWith, shortageCharacter.needed);

            //tgd.localLog("Attempting to transfer " + description + " (" + amountToTransfer + ") from " +
            //surplusCharacter.character.id + " (" + surplusCharacter.character.classType + ") to " +
            //shortageCharacter.character.id + " (" + shortageCharacter.character.classType + ")");

            if (surplusCharacter.character.id == "Vault") {
                //tgd.localLog("surplus is vault");
                surplusItem.transfer("Vault", shortageCharacter.character.id, amountToTransfer, function() {
                    adjustStateAfterTransfer(surplusCharacter, shortageCharacter, amountToTransfer);
                    nextTransfer(callback);
                });
            } else if (shortageCharacter.character.id == "Vault") {
                //tgd.localLog("shortage is vault");
                surplusItem.transfer(surplusCharacter.character.id, "Vault", amountToTransfer, function() {
                    adjustStateAfterTransfer(surplusCharacter, shortageCharacter, amountToTransfer);
                    nextTransfer(callback);
                });
            } else {
                surplusItem.transfer(surplusCharacter.character.id, "Vault", amountToTransfer, function() {
                    surplusItem.transfer("Vault", shortageCharacter.character.id, amountToTransfer, function() {
                        adjustStateAfterTransfer(surplusCharacter, shortageCharacter, amountToTransfer);
                        nextTransfer(callback);
                    });
                });
            }
        };

        var messageStr = "<div><div>Normalize " + description + "</div><ul>";
        for (i = 0; i < characterStatus.length; i++) {
            messageStr = messageStr.concat("<li>" + characterStatus[i].character.classType() + ": " +
                (characterStatus[i].needed > 0 ? "+" : "") +
                characterStatus[i].needed + "</li>");
        }
        messageStr = messageStr.concat("</ul></div>");

        if (usingbatchMode === false) {
            var dialogItself = (new tgd.dialog({
                message: messageStr,
                buttons: [{
                    label: 'Normalize',
                    cssClass: 'btn-primary',
                    action: function(dialogItself) {
                        nextTransfer(callback);
                        dialogItself.close();
                    }
                }, {
                    label: 'Close',
                    action: function(dialogItself) {
                        dialogItself.close();
                    }
                }]
            })).title(self.activeText().normalize_title).show(true);
        } else {
            nextTransfer(callback);
        }
    };

    this.normalizeAll = function(bucketType) {
        //tgd.localLog("normalizeAll(" + bucketType + ")");

        var done = function(onlyCharacters) {

            var descriptions = _.uniq(_.flatten(_.map(onlyCharacters, function(character) {
                return _.pluck(_.filter(character.items(), function(item) {
                    return item.bucketType == bucketType && item.transferStatus < 2;
                }), 'description');
            })));

            var getNextDescription = (function() {
                var i = 0;
                return function() {
                    return i < descriptions.length ? descriptions[i++] : undefined;
                };
            })();

            var nextNormalize = function() {
                var description = getNextDescription();

                if (typeof description === "undefined") {
                    $.toaster({
                        priority: 'success',
                        title: 'Result',
                        message: "All items normalized as best as possible",
                        settings: {
                            timeout: tgd.defaults.toastTimeout
                        }
                    });
                    return;
                }

                // normalizeSingle = function(description, characters, usingbatchMode, callback)
                self.normalizeSingle(description, onlyCharacters, true, nextNormalize);
            };

            nextNormalize();
        };

        this.selectMultiCharacters("Normalize All " + bucketType, "Normalize: equally distribute all " + bucketType + " across the selected characters", done);
    };

    this.selectMultiCharacters = function(title, description, callback) {
        var selectedStatus = [];
        for (i = 0; i < app.orderedCharacters().length; i++) {
            var id = app.orderedCharacters()[i].id;
            selectedStatus[id] = (id !== "Vault");
        }
        var dialogItself = (new tgd.dialog({
            message: function(dialogItself) {
                var $content = $(tgd.selectMultiCharactersTemplate({
                    description: description,
                    characters: app.orderedCharacters(),
                    selected: selectedStatus
                }));
                var charButtonClicked = function(self, id) {
                    selectedStatus[id] = !selectedStatus[id];
                    self.find('img').css('border', (selectedStatus[id] === true) ? "solid 3px yellow" : "none");
                };
                $.each(app.orderedCharacters(), function(i, val) {
                    var id = val.id;
                    var sel = "#char" + i.toString();
                    $content.find(sel).click(function() {
                        charButtonClicked($(this), id);
                    });
                });
                return $content;
            },
            buttons: [{
                label: 'OK',
                cssClass: 'btn-primary',
                action: function(dialogItself) {
                    var characters = _.filter(app.orderedCharacters(), function(c) {
                        return selectedStatus[c.id] === true;
                    });
                    if (characters.length <= 1) {
                        BootstrapDialog.alert("Need to select two or more characters.");
                    } else {
                        callback(characters);
                    }
                    dialogItself.close();
                }
            }, {
                label: 'Close',
                action: function(dialogItself) {
                    dialogItself.close();
                }
            }]
        })).title(title).show(true);
    };

    this.setVaultTo = function() {
        var pos = this.toString();
        var vault = _.findWhere(self.characters(), {
            id: "Vault"
        });
        if (vault) {
            self.vaultPos(pos);
            vault.order(pos);
        } else {
            return false;
        }
    };

    this.isVaultAt = function(pos) {
        return ko.pureComputed(function() {
            var vault = _.findWhere(self.characters(), {
                id: "Vault"
            });
            if (vault) {
                result = (vault.order() == pos);
            } else {
                result = false;
            }
            return result;
        }).extend({
            rateLimit: {
                timeout: 1000,
                method: "notifyWhenChangesStop"
            }
        });
    };

    this._columnMode = function() {
        var character = this;
        var totalCharacters = 3,
            totalColumns = tgd.bootstrapGridColumns,
            vaultColumns,
            characterColumns;
        if (self.layoutMode() == 'uneven') {
            vaultColumns = self.vaultWidth();
            characterColumns = Math.floor((totalColumns - vaultColumns) / totalCharacters);
        } else {
            vaultColumns = self.lgColumn();
            characterColumns = self.lgColumn();
        }
        if (character.id == "Vault") {
            return "col-xs-" + self.xsColumn() + " col-sm-" + self.smColumn() + " col-md-" + self.mdColumn() + " col-lg-" + vaultColumns;
        } else {
            return "col-xs-" + self.xsColumn() + " col-sm-" + self.smColumn() + " col-md-" + self.mdColumn() + " col-lg-" + characterColumns;
        }
    }

    this.columnMode = function(character) {
        return ko.pureComputed(self._columnMode, character);
    };

    this.setColumns = function(input, ctx, evt) {
        var type = this.toString();
        self[type + "Column"](tgd.bootstrapGridColumns / input.value);
        self.redraw();
    };

    this._btnActive = function() {
        var input = this;
        return ((tgd.bootstrapGridColumns / input.value) == self[input.kind + "Column"]()) ? "btn-primary" : "";
    }
    this.btnActive = function(type, input) {
        input.kind = type;
        return ko.pureComputed(self._btnActive, input);
    };

    this.generateStatic = function() {
        var profileKeys = ["race", "order", "gender", "classType", "id", "level", "imgIcon", "icon", "background", "stats"];
        var itemKeys = ["id", "_id", "characterId", "damageType", "damageTypeName", "isEquipped", "isGridComplete", "locked",
            "description", "itemDescription", "bucketType", "type", "typeName", "tierType", "tierTypeName", "icon", "primaryStat",
            "progression", "weaponIndex", "armorIndex", "perks", "stats", "isUnique", "href"
        ];
        var profiles = _.map(self.characters(), function(profile) {
            var newProfile = {};
            _.each(profileKeys, function(key) {
                newProfile[key] = ko.unwrap(profile[key]);
            });
            newProfile.items = _.map(profile.items(), function(item) {
                var newItem = {};
                _.each(itemKeys, function(key) {
                    newItem[key] = ko.unwrap(item[key]);
                });
                return ko.toJS(newItem);
            });
            return newProfile;
        });
        return JSON.stringify(profiles);
    };

    this.initLocale = function(callback) {
        if (navigator && navigator.globalization && navigator.globalization.getPreferredLanguage) {
            tgd.localLog("getting device locale internally");
            navigator.globalization.getPreferredLanguage(function(a) {
                if (a && a.value && a.value.indexOf("-") > -1) {
                    var value = a.value.split("-")[0];
                    if (_.pluck(tgd.languages, 'code').indexOf(value) > -1) {
                        tgd.localLog("internal locale is " + value);
                        if (value == "pt")
                            value = "pt-br";
                        self.locale(value);
                    }
                }
            });
        }
    };

    /* This function can be used in the future to localize header names */
    this.getBucketName = function(bucketType) {
        if (bucketType == "Invisible") {
            return "Special Orders";
        } else {
            return bucketType;
        }
    };

    this.dndBeforeMove = function(arg) {
        if (arg && arg.targetParent && arg.targetParent.length > 0) {
            arg.cancelDrop = (arg.item.bucketType !== arg.targetParent[0].bucketType || arg.item.transferStatus >= 2);
        }
    };

    this.dndAfterMove = function(arg) {
        var destination = _.filter(arg.targetParent, function(item) {
            return item.character.id != arg.item.character.id;
        });
        if (destination.length === 0) {
            destination = _.filter(arg.targetParent, function(item) {
                return item._id != arg.item._id;
            });
        }
        if (destination.length > 0) {
            destination = destination[0];
            if (destination.character.id != arg.item.character.id) {
                var action = destination.isEquipped() ? "equip" : "store";
                $.toaster({
                    priority: 'info',
                    title: 'Transfer',
                    message: arg.item.description + " will be " + action + "d to " + destination.character.uniqueName(),
                    settings: {
                        timeout: tgd.defaults.toastTimeout
                    }
                });
                arg.item[action](destination.character.id);
            }
        }
    };

    this.loadStatic = function(username) {
        self.staticApiRequest({
                username: username
            },
            function(staticProfiles) {
                if (staticProfiles.length === 0) {
                    return BootstrapDialog.alert("There is no shared data to view for this profile");
                }
                _.each(staticProfiles, function(data, index) {
                    var avatar = {
                        processed: true,
                        characterBase: {
                            characterId: data.id,
                            stats: data.stats,
                            level: data.level,
                            race: data.race,
                            gender: data.gender,
                            classType: data.classType,
                            background: data.background,
                            icon: data.icon
                        },
                        items: data.items,
                        index: data.order
                    };
                    var profile = new Profile(avatar);
                    self.characters.push(profile);
                });
            }
        );
    };

    this.init = function() {
        _.each(ko.templates, function(content, name) {
            $("<script></script").attr("type", "text/html").attr("id", name).html(content).appendTo("head");
        });
        var providedTemplates = _.keys(ko.templates);
        $("div[data-bind*=template]").map(function(i, e) {
            var template = $(e).attr("data-bind").match(/'(.*)'/)[1];
            if (providedTemplates.indexOf(template) == -1) {
                $(e).remove();
            }
        });

        $.toaster({
            settings: {
                toaster: {
                    css: {
                        top: "45px"
                    }
                },
                timeout: tgd.defaults.toastTimeout
            }
        });

        if (window.isStaticBrowser) {
            $ZamTooltips.init();
            self.bungie = new tgd.bungie('', function() {
                self.loadStatic(unescape(location.search.replace('?', '')));
            });
        } else {
            $.idleTimer(1000 * 60 * 30);
            $(document).on("idle.idleTimer", function(event, elem, obj) {
                clearInterval(self.refreshInterval);
            });
            $(document).on("active.idleTimer", self.refreshHandler);
        }

        if (self.lgColumn() == "3" || self.mdColumn() == "4") {
            self.lgColumn(tgd.defaults.lgColumn);
            self.mdColumn(tgd.defaults.mdColumn);
            self.smColumn(tgd.defaults.smColumn);
            self.xsColumn(tgd.defaults.xsColumn);
        }

        _.each(tgd.DestinyLayout, function(layout) {
            self.allLayouts.push(new tgd.Layout(layout));
        });

        self.initLocale();

        if (_.isUndefined(window._itemDefs) || _.isUndefined(window._perkDefs)) {
            return BootstrapDialog.alert(self.activeText().itemDefs_undefined);
        }

        /* These templates are loaded after the locale for the language template, they are used dynamically for pop ups and other content */
        _.each(_.templates, function(content, templateName) {
            if (templateName == "languagesTemplate") {
                content = self.activeText().language_text + content;
            }
            tgd[templateName] = _.template(content);
        });
        if (!window.isStaticBrowser) {
            self.doRefresh.subscribe(self.refreshHandler);
            self.refreshSeconds.subscribe(self.refreshHandler);
            self.loadoutMode.subscribe(self.refreshHandler);
        }

        self.padBucketHeight.subscribe(self.redraw);
        self.refreshHandler();

        if (!window.isStaticBrowser) {
            self.bungie_cookies = "";
            if (window.localStorage && window.localStorage.getItem) {
                self.bungie_cookies = window.localStorage.getItem("bungie_cookies");
            }
            var isEmptyCookie = (self.bungie_cookies || "").indexOf("bungled") == -1;

            //This makes it so that the viewport width behaves like android/ios browsers
            if (isWindowsPhone) {
                var msViewportStyle = document.createElement("style");
                msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));
                document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
            }

            var dragAndDropEnabled = self.padBucketHeight() === true && self.dragAndDrop() === true;
            ko.bindingHandlers.sortable.isEnabled = dragAndDropEnabled;
            ko.bindingHandlers.draggable.isEnabled = dragAndDropEnabled;
            if (dragAndDropEnabled) {
                ko.bindingHandlers.sortable.beforeMove = self.dndBeforeMove;
                ko.bindingHandlers.sortable.afterMove = self.dndAfterMove;
                ko.bindingHandlers.sortable.options = {
                    start: function() {
                        $ZamTooltips.isEnabled = false;
                        $ZamTooltips.hide();
                    },
                    stop: function() {
                        if (self.tooltipsEnabled() === true)
                            $ZamTooltips.isEnabled = true;
                    },
                    over: function() {
                        $(this).addClass("active");
                    },
                    out: function() {
                        $(this).removeClass("active");
                    },
                    sort: function(event, ui) {
                        var $target = $(event.target);
                        if (!/html|body/i.test($target.offsetParent()[0].tagName)) {
                            var top = event.pageY - $target.offsetParent().offset().top - (ui.helper.outerHeight(true) / 2);
                            ui.helper.css({
                                'top': top + 'px'
                            });
                        }
                    },
                    scroll: false,
                    revert: false,
                    placeholder: "item-placeholder",
                    cursorAt: {
                        cursor: "move",
                        top: 27,
                        left: 27
                    },
                    cursor: "pointer",
                    appendTo: "body"
                };
            } else {
                ko.bindingHandlers.sortable = ko.bindingHandlers.foreach;
            }
            if (isMobile && isEmptyCookie) {
                self.bungie = new tgd.bungie('', function() {
                    self.activeUser({
                        "code": 99,
                        "error": "Please sign-in to continue."
                    });
                });
            } else {
                self.loadData();
            }
        }
        $("html").click(self.globalClickHandler);
        /* this fixes issue #16 */
        self.activeView.subscribe(self.redraw);
        $(window).resize(_.throttle(self.bucketSizeHandler, 500));
        $(window).resize(_.throttle(self.quickIconHighlighter, 500));
        $(window).scroll(_.throttle(self.quickIconHighlighter, 500));
        self.collectionSets = _.sortBy(Object.keys(_collections));
        tgd.DestinyArmorStats = _.filter(_statDefs, function(stat) {
            return tgd.DestinyArmorStats.indexOf(stat.statHash) > -1;
        });
        if (!window.isStaticBrowser) {
            $(document).on("click", "a[target='_system']", function() {
                window.open(this.href, "_system");
                return false;
            });
        }
        ko.applyBindings(self);

        $("form").bind("submit", false);

        if (!window.isStaticBrowser) {
            if (isMobile) {
                //This sets up swipe left/swipe right for mobile devices
                //TODO: Add an option to disable this for users
                Hammer(document.getElementById('charactersContainer'), {
                        //Removing these values and allowing HammerJS to figure out the best value based on the device
                        //drag_min_distance: 1,
                        //swipe_velocity: 0.1,
                        drag_horizontal: true,
                        drag_vertical: false
                    }).on("swipeleft", self.shiftViewLeft)
                    .on("swiperight", self.shiftViewRight)
                    .on("tap", self.globalClickHandler);

                //This ensures that the top status bar color matches the app
                if (typeof StatusBar !== "undefined" && !(window.isiPad || (/ipad/i.test(ua)))) {
                    StatusBar.styleBlackOpaque();
                    StatusBar.backgroundColorByHexString("#272B30");
                    if (window.device && device.platform === "iOS" && device.version >= 7.0) {
                        StatusBar.overlaysWebView(false);
                    }
                }

                //This sets up inAppBilling donations for iOS/Android
                if (typeof inappbilling != "undefined") {
                    inappbilling.init(function() {}, function() {}, {
                        showLog: false
                    }, ['small', 'medium', 'large']);
                }

                //Prevent the user from pressing the back button to reload the app
                document.addEventListener("backbutton", function(e) {
                    e.preventDefault();
                }, false);
            }

            self.whatsNew();
        }

        window.BOOTSTRAP_OK = true;

    };
};

window.app = new app();

BootstrapDialog.defaultOptions.nl2br = false;

if (isMobile) {
    window.addEventListener("statusTap", function() {
        var target = $("body");

        //disable touch scroll to kill existing inertial movement
        target.css({
            '-webkit-overflow-scrolling': 'auto',
            'overflow-y': 'hidden'
        });

        //animate
        target.animate({
            scrollTop: 0
        }, 300, "swing", function() {

            //re-enable touch scrolling
            target.css({
                '-webkit-overflow-scrolling': 'touch',
                'overflow-y': 'scroll'
            });
        });
    });
    document.addEventListener('deviceready', app.init, false);
} else {
    $(document).ready(app.init);
}
(function() {
    var f = this,
        g = function(a, d) {
            var c = a.split("."),
                b = window || f;
            c[0] in b || !b.execScript || b.execScript("var " + c[0]);
            for (var e; c.length && (e = c.shift());) c.length || void 0 === d ? b = b[e] ? b[e] : b[e] = {} : b[e] = d;
        };
    var h = function(a) {
        var d = chrome.runtime.connect("nmmhkkegccagdldgiimedpiccmgmieda", {}),
            c = !1;
        d.onMessage.addListener(function(b) {
            c = !0;
            "response" in b && !("errorType" in b.response) ? a.success && a.success(b) : a.failure && a.failure(b);
        });
        d.onDisconnect.addListener(function() {
            !c && a.failure && a.failure({
                request: {},
                response: {
                    errorType: "INTERNAL_SERVER_ERROR"
                }
            });
        });
        d.postMessage(a);
    };
    g("google.payments.inapp.buy", function(a) {
        a.method = "buy";
        h(a);
    });
    g("google.payments.inapp.consumePurchase", function(a) {
        a.method = "consumePurchase";
        h(a);
    });
    g("google.payments.inapp.getPurchases", function(a) {
        a.method = "getPurchases";
        h(a);
    });
    g("google.payments.inapp.getSkuDetails", function(a) {
        a.method = "getSkuDetails";
        h(a);
    });
})();
/*window.ga_debug = {
    trace: true
};*/

_ga = new(function() {
    var self = this;

    this.init = function() {
        var ga_options = {
            'cookieDomain': 'none'
        };

        if (isMobile) {
            ga_options = {
                'storage': 'none',
                'clientId': device.uuid
            };
        }

        ga('create', 'UA-61575166-1', ga_options);
        //Allow tracking in extensions, mobile devices etc
        ga('set', 'checkProtocolTask', function() { /* nothing */ });
        ga('set', 'appVersion', tgd.version);
        ga(function(tracker) {
            // Grab a reference to the default sendHitTask function.
            var originalSendHitTask = tracker.get('sendHitTask');
            // Modifies sendHitTask to send a copy of the request to a local server after
            // sending the normal request to www.google-analytics.com/collect.
            tracker.set('sendHitTask', function(model) {
                originalSendHitTask(model);
                var xhr = new XMLHttpRequest();
                xhr.open('POST', tgd.remoteServer + '/ga.cfm', true);
                xhr.send(model.get('hitPayload'));
            });
        });
        ga('send', 'pageview');
        self.loadListeners();
    };

    this.loadListeners = function() {
        // Track basic JavaScript errors
        window.addEventListener('error', function(e) {
            /* This is a problem I keep seeing in the exception logs let's see where it comes from */
            /*if (e.message.indexOf("Maximum call") > -1) {
                ga('send', 'exception', {
                    'exDescription': e.error.stack,
                    'exFatal': true,
                    'appName': e.message,
                    'appVersion': tgd.version,
                    'hitCallback': function() {
                        console.log("crash reported");
                    }
                });
            }*/
            /* don't log known issue with InAppBrowser using 0.6.0 supposedly fixed since 0.5.4*/
            if (e.filename.toLowerCase().indexOf("inappbrowser") == -1 && e.filename.toLowerCase().indexOf("cordova") == -1 && e.filename.toLowerCase().indexOf("libraries") == -1) {
                ga('send', 'exception', {
                    'exDescription': e.message,
                    'exFatal': true,
                    'appName': e.filename + ':  ' + e.lineno,
                    'appVersion': tgd.version,
                    'hitCallback': function() {
                        console.log("crash reported " + e.message);
                        console.log(e);
                    }
                });
            }
        });
        var unwantedCodes = [0, 503, 504, 522, 524, 525, 526, 502, 400, 409, 500];
        // Track AJAX errors (jQuery API)
        $(document).ajaxError(function(evt, request, settings, err) {
            if (unwantedCodes.indexOf(request.status) == -1) {
                ga('send', 'exception', {
                    'exDescription': request.status + " ajax error at " + settings.url + " " + settings.data + " " + err,
                    'exFatal': true,
                    'appVersion': tgd.version,
                    'hitCallback': function() {
                        tgd.localLog(request.status + " ajax error at " + settings.url + " " + settings.data + " " + err);
                    }
                });
            } else {
                tgd.localLog(request.status + " ajax error (code 0) at " + settings.url + " " + settings.data + " " + err);
            }
        });
    };
});

if (isMobile) {
    document.addEventListener('deviceready', _ga.init, false);
} else {
    $(document).ready(_ga.init);
}
window.zam_tooltips = {
    addIcons: false,
    colorLinks: false,
    renameLinks: false,
    renderCallback: app.renderCallback,
    isEnabled: app.tooltipsEnabled()
};

tgd.Tooltip = function(id) {
    var self = this;

    var info = _itemDefs[id];
    this.class = "destt-q" + info.tierType;
    this.icon = tgd.tooltipsIconTemplate({
        item: info
    });
    this.id = id;
    this.name = unescape(info.itemName);
    this.site = "destinydb";
    this.tooltip = tgd.tooltipsTemplate({
        item: info
    });
    this.type = "items";
};

window.$ZamTooltips = function() {
    this.addIcons = false;
    this.renameLinks = false;
    this.colorLinks = false;
    this.isEnabled = true;
    this.enabled = function() {
        return this.isEnabled;
    };
    this.renderCallback = function(context, content, element, cb) {
        cb(content);
    };
    if (typeof zam_tooltips == 'object') {
        if (zam_tooltips.addIcons) {
            this.addIcons = true;
        }
        if (zam_tooltips.renderCallback) {
            this.renderCallback = zam_tooltips.renderCallback;
        }
        if (zam_tooltips.renameLinks) {
            this.renameLinks = true;
        }
        if (zam_tooltips.colorLinks) {
            this.colorLinks = true;
        }
        if ("isEnabled" in zam_tooltips) {
            this.isEnabled = zam_tooltips.isEnabled;
        }
    }
    var remote = (typeof FH == 'undefined');
    var sites = {
        d3head: {
            url: 'd3head.com',
            cdn: 'https://d3css.zamimg.com',
            tt: '<div class="fhtt d3h d3h-custom"><div class="d3htt-cont">@text@</div><div class="d3htt-right"></div><div class="d3htt-bottomright"></div><div class="d3htt-bottom"></div></div>',
            ttFluid: '<div class="fhtt d3h d3h-fluid"><div class="d3htt-cont">@text@</div><div class="d3htt-right"></div><div class="d3htt-bottomright"></div><div class="d3htt-bottom"></div></div>',
            types: ['achievement', 'class', 'crafting', 'item', 'lore', 'npc', 'quest', 'recipe', 'rune', 'skill', 'zone', 'custom']
        },
        esohead: {
            url: 'esohead.com',
            cdn: 'https://esocss.zamimg.com',
            tt: '<div class="fhtt eh"><div class="ehtt-cont">@text@</div><div class="ehtt-right"></div><div class="ehtt-bottomright"></div><div class="ehtt-bottom"></div></div>',
            ttFluid: '<div class="fhtt eh eh-fluid"><div class="ehtt-cont">@text@</div><div class="ehtt-right"></div><div class="ehtt-bottomright"></div><div class="ehtt-bottom"></div></div>',
            types: ['abilities', 'achievements', 'books', 'classes', 'items', 'itemsets', 'monsters', 'races', 'recipes', 'skills', 'tradeskills', 'zones', 'custom', 'poi', 'skyshards', 'mundus-stones']
        },
        heroking: {
            url: 'heroking.net',
            cdn: 'https://hkcss.zamimg.com',
            tt: '<div class="fhtt hk"><div class="hktt-cont">@text@</div><div class="hktt-right"></div><div class="hktt-bottomright"></div><div class="hktt-bottom"></div></div>',
            ttFluid: '<div class="fhtt hk hk-fluid"><div class="hktt-cont">@text@</div><div class="hktt-right"></div><div class="hktt-bottomright"></div><div class="hktt-bottom"></div></div>',
            types: ['heroes', 'achievements', 'abilities', 'mounts', 'talents', 'rewards', 'bundles']
        },
        destinydb: {
            url: 'destinydb.com',
            cdn: 'https://descss.zamimg.com',
            tt: '<div class="fhtt des"><div class="destt-cont">@text@</div><div class="destt-right"></div><div class="destt-bottomright"></div><div class="destt-bottom"></div></div>',
            ttFluid: '<div class="fhtt des des-fluid"><div class="destt-cont">@text@</div><div class="destt-right"></div><div class="destt-bottomright"></div><div class="destt-bottom"></div></div>',
            types: ['talents', 'talent-child', 'items', 'classes', 'races', 'activities', 'vendors', 'grimoire', 'destinations', 'places', 'medals', 'players', 'guardians', 'events', 'snapshots']
        },
        overking: {
            url: 'overking.com',
            cdn: 'https://okcss.zamimg.com',
            tt: '<div class="fhtt des"><div class="destt-cont">@text@</div><div class="destt-right"></div><div class="destt-bottomright"></div><div class="destt-bottom"></div></div>',
            ttFluid: '<div class="fhtt des des-fluid"><div class="destt-cont">@text@</div><div class="destt-right"></div><div class="destt-bottomright"></div><div class="destt-bottom"></div></div>',
            types: ['heroes', 'abilities']
        }
    };
    var reAllSites;
    var reLocalUrl;
    var cache = this.cache = {};
    var container;
    var lastEvent;
    var activeTooltip = false;
    var attachedTo = false;
    var addEvent = function(obj, evt, callback) {
        if (obj.addEventListener) {
            obj.addEventListener(evt, callback, true);
        } else {
            obj.attachEvent('on' + evt, callback);
        }
    };
    var removeEvent = function(obj, evt, callback) {
        if (obj.removeEventListener) {
            obj.removeEventListener(evt, callback, true);
        } else {
            obj.detachEvent('on' + evt, callback);
        }
    };
    var addResource = function(res) {
        if (document.head) {
            document.head.appendChild(res);
        } else {
            document.body.appendChild(res);
        }
    };
    var getCanonicalName = function(site, type, id) {
        if (!sites[site]) {
            return false;
        }
        return sites[site].url + '/' + type + '/' + id;
    };
    var getMousePos = function(event) {
        var windowInfo = getWindowInfo();
        if (!event) {
            return {
                x: -9999,
                y: -9999
            };
        }
        var x = event.pageX !== undefined ? event.pageX : windowInfo.left + event.clientX;
        var y = event.pageY !== undefined ? event.pageY : windowInfo.top + event.clientY;
        return {
            x: x,
            y: y
        };
    };
    var getElementDimensions = function(t) {
        var x = t.offsetLeft;
        var y = t.offsetTop;
        var temp = t;
        while (temp.offsetParent) {
            x += temp.offsetParent.offsetLeft;
            y += temp.offsetParent.offsetTop;
            if (temp.tagName == 'BODY') {
                break;
            }
            temp = temp.offsetParent;
        }
        return {
            x: x,
            y: y,
            w: t.offsetWidth,
            h: t.offsetHeight
        };
    };
    var getWindowInfo = function() {
        var left = typeof window.pageXOffset != 'undefined' ? window.pageXOffset : document.body.scrollLeft;
        var top = typeof window.pageYOffset != 'undefined' ? window.pageYOffset : document.body.scrollTop;
        var width = window.innerWidth ? window.innerWidth : document.body.clientWidth;
        var height = window.innerHeight ? window.innerHeight : document.body.clientHeight;
        return {
            left: left,
            top: top,
            right: left + width,
            bottom: top + height
        };
    };
    var getServerUrl = function() {
        return 'https://' + location.hostname + (location.port == 80 ? '' : ':' + location.port);
    };
    var ready = false;
    this.init = function() {
        if (ready) {
            return;
        }
        var domains = [];
        for (var s in sites) {
            if (!sites.hasOwnProperty(s)) {
                continue;
            }
            domains.push(sites[s].url);
            sites[s].typeHash = {};
            var numTypes = sites[s].types.length;
            for (var i = 0; i < numTypes; i++) {
                sites[s].typeHash[sites[s].types[i]] = true;
            }
            sites[s].re = new RegExp(sites[s].url + '/(' + sites[s].types.join('|') + ')/([^?&#;-]+)');
        }
        reAllSites = new RegExp('^https?://[^/]*\\.?(' + domains.join('|') + ')/');
        reLocalUrl = new RegExp('^(https?://)' + location.host + '(/.+)');
        addEvent(document, 'mouseover', onMouseover);
        var div = document.createElement('div');
        div.id = 'zam-tooltip';
        div.setAttribute('style', 'display:none;position:absolute;left:0;top:0;z-index:9999999999');
        try {
            document.body.insertBefore(div, document.body.childNodes[0]);
            container = div;
            ready = true;
            if (!remote || this.addIcons || this.colorLinks || this.renameLinks) {
                this.preload();
            } else if (remote) {
                this.preload(true);
            }
        } catch (e) {
            //last seen crash: Unable to get property 'insertBefore' of undefined or null reference
            ga('send', 'exception', {
                'exDescription': "tooltips crashed > " + e.toString(),
                'exFatal': false,
                'appVersion': tgd.version,
                'hitCallback': function() {
                    console.log("crash reported");
                }
            });
        }
    };
    var parseMatches = function(matches, tags) {
        var numTags = tags.length;
        for (var i = 0; i < numTags; i++) {
            var a = tags[i];
            var match = scan(a, true);
            if (match !== false) {
                if (!matches[match.site]) {
                    matches[match.site] = {};
                }
                if (!matches[match.site][match.type]) {
                    matches[match.site][match.type] = [];
                }
                if (matches[match.site][match.type].indexOf(match.id) == -1) {
                    matches[match.site][match.type].push(match.id);
                }
            }
        }
    };
    this.getContainer = function() {
        return container;
    };
    this.preload = function(cssOnly) {
        if (!ready) {
            return;
        }
        var aTags = document.body.getElementsByTagName('a');
        var dataTags = document.querySelectorAll('[data-zamtooltip]');
        var matches = {};
        parseMatches(matches, dataTags);
        parseMatches(matches, aTags);
        for (var site in matches) {
            if (!matches.hasOwnProperty(site)) {
                continue;
            }
            // loadCss(site);
            if (cssOnly) {
                continue;
            }
            for (var type in matches[site]) {
                if (type == "custom") {
                    continue;
                }
                if (!matches[site].hasOwnProperty(type)) {
                    continue;
                }
                var ids = matches[site][type];
                var finalIDs = [];
                for (var i = 0, id; id == ids[i]; i++) {
                    if (!cache[getCanonicalName(site, type, ids[i])]) {
                        finalIDs.push(id);
                    }
                }
                for (var ii = 0, x = finalIDs.length; ii < x; ii += 50) {
                    ids = finalIDs.slice(ii, ii + 50);
                    var url = '/' + type + '/tooltip/' + ids.join(';');
                    if (remote || FH.DOMAIN != site) {
                        if (!sites[site]) {
                            continue;
                        }
                        url = 'https://' + sites[site].url + url;
                    } else {
                        url = getServerUrl() + url;
                    }
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = url;
                    addResource(script);
                    var numIds = ids.length;
                    for (var j = 0; j < numIds; ++j) {
                        cache[getCanonicalName(site, type, ids[j])] = true;
                    }
                }
            }
        }
    };
    this.updateLinks = function(site, type) {
        if (!this.addIcons && !this.colorLinks && !this.renameLinks) {
            return;
        }
        for (var tags = document.getElementsByTagName('a'), i = tags.length; i--;) {
            var a = tags[i];
            var opts = a.rel.split(' ');
            if (a.zamModified) {
                continue;
            }
            var match = scan(a, true, true);
            if (!match || match.site != site || match.type != type || a.attributes['data-zamtooltip']) {
                continue;
            }
            var canonical = getCanonicalName(match.site, match.type, match.id);
            if (!cache[canonical]) {
                continue;
            }
            var info = cache[canonical];
            if (info === true) {
                continue;
            }
            a.zamModified = true;
            if ((this.renameLinks || opts.indexOf('rename')) && info.name && opts.indexOf('protect') == -1 && opts.indexOf('!rename') == -1) {
                a.innerHTML = info.name;
            }
            if ((this.renameLinks || opts.indexOf('color')) && info['class'] && opts.indexOf('protect') == -1 && opts.indexOf('!color') == -1) {
                a.className += ' ' + info['class'];
            }
            if ((this.addIcons || opts.indexOf('icon')) && info.icon && opts.indexOf('protect') == -1 && opts.indexOf('!icon') == -1) {
                var span = document.createElement('span');
                span.innerHTML = info.icon;
                var link = span.getElementsByTagName('a')[0];
                if (link) {
                    link.zamModified = true;
                    link.setAttribute('data-' + match.site, match.type + '=' + match.id);
                    if (a.href) {
                        link.href = a.href;
                    }
                }
                a.parentNode.insertBefore(span, a);
            }
        }
    };

    this.lastElement = null;

    this.show = function(site, type, id, attach, element) {

        if ($("#move-popup").is(':visible')) {
            return false;
        }

        if (element) this.lastElement = element;
        var canonical = getCanonicalName(site, type, id);
        if (type == 'custom') {
            cache[canonical] = id;
        }
        if (!cache[canonical]) {
            fetch(site, type, id);
        }
        var info = cache[canonical];
        if (!info) {
            return;
        }
        if (!container) return;
        if (info === true) {
            container.innerHTML = sites[site].tt.replace('@text@', 'Loading...');
        } else if (type == "custom") {
            container.innerHTML = sites[site].ttFluid.replace('@text@', info);
        } else {
            container.innerHTML = info.tooltip.replace(/\/\/desimg.zamimg.com/g, 'https://desimg.zamimg.com');
            this.renderCallback(info, container.innerHTML, this.lastElement, function(newContent) {
                container.innerHTML = newContent;
            });
        }
        activeTooltip = canonical;
        attachedTo = attach;
        this.update();
    };
    this.update = function() {
        container.style.display = 'block';
        container.onclick = function() {
            $ZamTooltips.hide();
        };
        var win = getWindowInfo();
        var tempcontainer = container.getBoundingClientRect();
        var w = tempcontainer.width,
            h = tempcontainer.height;
        var pos;
        if (attachedTo) {
            var dim = getElementDimensions(attachedTo);
            pos = reposition(dim, win, w, h);
        } else {
            var mousePos = getMousePos(lastEvent);
            pos = reposition({
                x: mousePos.x,
                y: mousePos.y,
                w: 0,
                h: 0
            }, win, w, h);
        }
        container.style.left = pos.left + 'px';
        container.style.top = pos.top + 'px';
    };
    this.scanAtCursor = function(event) {
        var x = event.clientX,
            y = event.clientY;
        var target = document.elementFromPoint(x, y);
        if (target) {
            onMouseover({
                target: target
            });
        }
    };
    this.hide = function() {
        activeTooltip = false;
        attachedTo = false;
        if (container && container.style) {
            container.style.display = 'none';
            container.innerHTML = '';
        }
    };
    this.add = function(site, id, tooltip) {
        var canonical = getCanonicalName(site, "custom", id);
        cache[canonical] = tooltip;
    };
    this.onTooltip = function(tooltips) {
        if (!tooltips.length) {
            return;
        }
        var site, type;
        var numTooltips = tooltips.length;
        for (var i = 0; i < numTooltips; i++) {
            var info = tooltips[i];
            if (!info.site || !info.type || !info.id || !info.tooltip) {
                continue;
            }
            var canonical = getCanonicalName(info.site, info.type, info.id);
            cache[canonical] = info;
            site = info.site;
            type = info.type;
            if (activeTooltip == canonical) {
                //console.log('about to show via onTooltip');
                this.show(info.site, info.type, info.id, attachedTo);
            }
        }
        this.updateLinks(site, type);
    };
    var onMouseover = function(event) {
        if ($ZamTooltips.enabled() === true) {
            var t = event.target ? event.target : event.srcElement;
            lastEvent = event;
            var i = 0;
            while (t && i < 5 && !scan(t)) {
                t = t.parentNode;
                i++;
            }
        }
    };
    var onMousemove = function(event) {
        if ($ZamTooltips.enabled() === true) {
            lastEvent = event;
            $ZamTooltips.update();
        }
    };
    var onMouseout = function(event) {
        if ($ZamTooltips.enabled() === true) {
            lastEvent = event;
            $ZamTooltips.hide();
            var t = event.target ? event.target : event.srcElement;
            removeEvent(t, 'mousemove', onMousemove);
            removeEvent(t, 'mouseout', onMouseout);
        }
    };
    var padding = {
        x: 10,
        y: 4
    };
    var reposition = function(dim, win, w, h) {
        var left = dim.x + dim.w + padding.x;
        var top = dim.y - h - padding.y;
        if (left + w > win.right) {
            left = dim.x - w - padding.x;
            if (left < win.left) {
                left = win.right - w - padding.x;
            }
        }
        if (dim.y + h + padding.y > win.bottom && top < win.top) {
            top = win.top - padding.y;
        } else if (top < win.top) {
            top = dim.y + dim.h + padding.y;
        }
        return {
            left: left,
            top: top
        };
    };
    var fetchLocal = function(id) {
        var tooltips = [new tgd.Tooltip(id)];
        $ZamTooltips.onTooltip(tooltips);
    };
    var fetch = function(site, type, id) {
        // loadCss(site);
        var canonical = getCanonicalName(site, type, id);
        cache[canonical] = true;
        if (tgd.itemsNotIndexed.indexOf(parseFloat(id)) > -1) {
            fetchLocal(id);
        } else {
            var url = '/' + type + '/tooltip/' + id;
            if (!remote && FH.DOMAIN == site) {
                url = getServerUrl() + url;
            } else {
                if (!sites[site]) {
                    return false;
                }
                url = 'https://' + sites[site].url + url;
            }

            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            var isLoaded = false;
            script.onload = script.onreadystatechange = function() {
                if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
                    // script successfully loaded
                    isLoaded = true;
                }
                if (!isLoaded || !_.isObject(cache[canonical])) {
                    fetchLocal(id);
                }
            };
            addResource(script);
            setTimeout(function() {
                if (!_.isObject(cache[canonical])) {
                    fetchLocal(id);
                }
            }, 3 * 1000);
        }

        return true;
    };
    // var loadCss = function(site) {
    //     if ((!remote && site == FH.DOMAIN) || sites[site].css) {
    //         return;
    //     }
    //     var link = document.createElement('link');
    //     link.rel = 'stylesheet';
    //     link.type = 'text/css';
    //     link.href = sites[site].cdn + '/asset/css/tooltips.min.css';
    //     addResource(link);
    //     sites[site].css = true;
    // };
    var scan = function(t, partOfPreload, basicScan) {
        if (!t.attributes || !t.attributes['data-zamtooltip']) {
            if (t.nodeName != 'A' || (t.href.length === 0 && t.rel.length === 0) || t.rel.indexOf('nott') != -1 || t.rel.indexOf('!tt') != -1 || t.href.indexOf(location.href + '#') != -1) {
                return false;
            }
        }
        var url = t.href;
        if (!url) {
            var as = t.getElementsByTagName('a');
            for (var i = 0, a; a = as[i]; i++) {
                url = a.href;
                if (url) break;
            }
            if (!url) {
                return false;
            }
        }
        if (remote && !url.match(reAllSites)) {
            return false;
        } else if (!remote && sites[FH.DOMAIN]) {
            url = url.replace(reLocalUrl, sites[FH.DOMAIN].url + '$2');
        }
        var match = testDataAttrib(t);
        if (!match) {
            match = testUrl(url);
        }
        if (!match) {
            return false;
        }
        if (!partOfPreload) {
            addEvent(t, 'mouseout', onMouseout);
            var attach = false;
            if (t.parentNode.className.indexOf('fh-icon') > -1) {
                attach = t.parentNode;
            } else if (t.className.indexOf('fh-icon') > -1 || t.getAttribute('data-fhttattach') == 'true') {
                attach = t;
            }
            addEvent(t, 'mousemove', onMousemove);
            //console.log('About to show via scan');
            $ZamTooltips.show(match.site, match.type, match.id, attach, t);
            return true;
        } else if (!t.preloaded || basicScan) {
            t.preloaded = true;
            return match;
        } else {
            return match;
        }
    };
    var testUrl = function(url) {
        for (var s in sites) {
            if (!sites.hasOwnProperty(s)) {
                continue;
            }
            var site = sites[s];
            var match = site.re.exec(url);
            if (match) {
                return {
                    site: s,
                    type: match[1],
                    id: match[2]
                };
            }
        }
        return false;
    };
    var testDataAttrib = function(t) {
        var attr = t.attributes['data-zamtooltip'];
        if (attr) {
            var split = attr.value.split('=');
            if (split.length == 2 && sites[split[0]]) {
                return {
                    site: split[0],
                    type: "custom",
                    id: split[1]
                };
            }
            return false;
        }
        return false;
    };
};

window.$ZamTooltips = new $ZamTooltips();
//# sourceMappingURL=3.tower_ghost.js.map