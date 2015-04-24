module.exports = function(grunt) {
    'use strict';

    var assetsPath = '../../assets/frontend/';

    // configuração do projeto
    var gruntConfig = {

        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            target: {
                files: {
                    '../../public/frontend/assets/js/app.min.js': [
                        assetsPath + 'bower_components/slicknav/dist/jquery.slicknav.min.js',
                        assetsPath + 'js/app.js'
                    ],
                    '../../public/frontend/assets/js/home.min.js': assetsPath + 'js/home.js',
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
              '../../public/frontend/assets/css/app.css': assetsPath + 'sass/app.scss',
              '../../public/frontend/assets/css/home.css': assetsPath + 'sass/home.scss'
            }
          }
        },

        cssmin: {
            target: {
                files: {
                    '../../public/frontend/assets/css/app.min.css': [
                        assetsPath + 'bower_components/slicknav/slicknav.css',
                        '../../public/frontend/assets/css/app.css'
                    ],

                    '../../public/frontend/assets/css/home.min.css': '../../public/frontend/assets/css/home.css'
                }
            }
        },

        cachebreaker: {
            dev: {
                options: {
                    match: [
                        'app.min.js',
                        'app.min.css'
                    ]
                },
                files: {
                    src: ['../../public/*.php']
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
              assetsPath + 'sass/**/*'
            ],

            tasks : [ 'sass', 'cssmin' ]
          },

          minjs : {
            files : [
              assetsPath + 'js/**/*'
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
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-cache-breaker');

    // tarefas
    grunt.registerTask('default', ['uglify', 'sass', 'cssmin']);
    grunt.registerTask('deploy', ['cachebreaker']);

    // Tarefa para Watch
    grunt.registerTask( 'w', [ 'watch' ] );
};