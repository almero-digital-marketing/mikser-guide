module.exports = function(grunt) {

	grunt.initConfig({
		copy: {
			dev: {
				files: [{
					src: 'node_modules/tipso/src/tipso.css',
					dest: 'browser/vendor/tipso/tipso.css'
				}, {
					src: 'node_modules/font-awesome/fonts/*',
					dest: 'browser/vendor/font-awesome/fonts/'
				}, {
					src: 'node_modules/font-awesome/css/font-awesome.css',
					dest: 'browser/vendor/font-awesome/css/font-awesome.css'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask('default', ['copy']);
};