'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		web_server: {
			options: {
				cors: true,
				port: 8000,
				nevercache: true,
				logRequests: true
			},
			foo: 'bar'
		},
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},
		concurrent: {
			target: {
				tasks: ['compass', 'web_server', 'watch'],
				options: {
					logCurrentOutput: true
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

	grunt.loadNpmTasks('grunt-web-server');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concurrent:target']);
};
