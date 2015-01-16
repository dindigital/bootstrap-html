module.exports = function(grunt) {
	'use strict';
 
	// configuração do projeto
	var gruntConfig = {
		
		pkg: grunt.file.readJSON('package.json'),
		
		uglify: {
			target: {
				files: {
					'assets/js/modernizr.min.js': 'front/vendor/modernizr/modernizr.js',
					'assets/js/ie.min.js': [
						'front/vendor/selectivizr/selectivizr.js',
						'front/vendor/html5shiv/dist/html5shiv.js',
						'front/vendor/respond/src/respond.js',
					],
					'assets/js/app.min.js': [
						'front/vendor/jquery/dist/jquery.js',
						'front/js/app.js'
					],
					'assets/js/home.min.js': 'front/js/home.js',
				}
			}
		},
		
	    sass: {
	      dist: {
	        options: {
	          compass: true,
	          style: 'expanded'
	        },
	        files: {
	          'assets/css/app.css': 'front/sass/app.scss'
	        }
	      }
	    },

		cssmin: {
			target: {
				files: {
					'assets/css/app.min.css': [
						'front/vendor/normalize.css/normalize.css',
						'assets/css/app.css'
					]
				}
			}
		},

		/*cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'assets/css',
		      src: ['*.css', '!*.min.css'],
		      dest: 'assets/css',
		      ext: '.min.css'
		    }]
		  }
		}*/

	};
 
	grunt.initConfig(gruntConfig);

  	// plugins
  	grunt.loadNpmTasks('grunt-contrib-uglify');
   	grunt.loadNpmTasks('grunt-contrib-sass');
  	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// tarefas
	grunt.registerTask('default', ['uglify', 'sass', 'cssmin']);
};