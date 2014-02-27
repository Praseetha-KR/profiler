'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},
		watch: {
			compass: {
				files: ['app/**/*.scss',
					'app/**/*.sass'
					],
				tasks: ['compass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['compass']);
};
