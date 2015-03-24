module.exports = function(grunt) {
	'use strict';
 
	// configuração do projeto
	var gruntConfig = {
		
		pkg: grunt.file.readJSON('package.json'),
		
		uglify: {
			target: {
				files: {
					'assets/js/app.min.js': [
						'bower_components/slicknav/jquery.slicknav.min.js',
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
	          'assets/css/app.css': 'front/sass/app.scss',
	          'assets/css/home.css': 'front/sass/home.scss'
	        }
	      }
	    },

		cssmin: {
			target: {
				files: {
					'assets/css/app.min.css': [
						'bower_components/slicknav/slicknav.css',
						'assets/css/app.css'
					],
					
					'assets/css/home.min.css': 'assets/css/home.css'
				}
			}
		},

        cachebreaker: {
            dev: {
                options: {
                    match: [
                    	'assets/js/app.min.js',
                    	
                    	'assets/css/app.min.css'
                    ]
                },
                files: {
                    src: ['*.php']
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

	    watch : {
	      minsass : {
	        files : [
	          'front/sass/**/*'
	        ],

	        tasks : [ 'sass', 'cssmin' ]
	      },

	      minjs : {
	        files : [
	          'front/js/**/*'
	        ],

	        tasks : [ 'uglify' ]
	      }
	    } // watch

	};
 
	grunt.initConfig(gruntConfig);

  	// plugins
  	grunt.loadNpmTasks('grunt-contrib-uglify');
   	grunt.loadNpmTasks('grunt-contrib-sass');
  	grunt.loadNpmTasks('grunt-contrib-cssmin');
  	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks('grunt-cache-breaker');

	// tarefas
	grunt.registerTask('default', ['uglify', 'sass', 'cssmin']);
	grunt.registerTask('deploy', ['cachebreaker']);
  	
  	// Tarefa para Watch
  	grunt.registerTask( 'w', [ 'watch' ] );
};