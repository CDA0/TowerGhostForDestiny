module.exports = function (grunt) {
	grunt.registerTask('default', ['generate-version:show','codeformat','combineKOTemplates','jsonmanifest']);
};