/**
 * Created by ivanders on 4/13/15.
 */

'use strict';

module.exports = function(grunt){


	grunt.initConfig({

		clean : ["dist"],


		'babel': {
			options: {
				sourceMap: true,
				modules : 'common'
			},
			dist: {
				files: [{
					"expand": true,
					"cwd": "src/",
					"src": ["**/*.js"],
					"dest": "dist/",
					"ext": ".js"
				}]
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-babel');

	grunt.registerTask('build', ['clean', 'babel']);

}