module.exports = function (grunt) {
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-clean");	
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-sass");		
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.initConfig({

		sass: {
			dist: {
				files: {
					'www/css/style.css': 'src/style.scss'
				},
				options: {
					outputStyle: 'compressed'
				}
			}
		},

		jshint: {
			src: "src/app.js"
		},

		clean: {
			js: {
				src: [
					'www/js/',
					'www/css/'
				]
			}
		},

		copy: {
			jquery: {
				expand: true,
				src: [
					"jquery.min.js",
					"jquery.min.map"
				],
				dest: "www/js/",
				cwd: "src/vendor/jquery/dist"
			},
			alertifyJS: {
				expand: true,
				src: [
					"alertify.min.js"
				],
				dest: "www/js",
				cwd: "src/vendor/alertify"
			},
			alertifyCSS: {
				expand: true,
				src: [
					"*.css"
				],
				dest: "www/css",
				cwd: "src/vendor/alertify/themes"
			},
			app: {
				expand: true,
				src: [
					"app.js"
				],
				dest: "www/js/",
				cwd: "src/"
			}			
		},

		watch: {
			build: {
				files: ['src/*.js', 'src/*.scss'],
				tasks: ['default']
			}
		}

	});

	grunt.registerTask("default", ["clean", "copy", "sass"]);

}