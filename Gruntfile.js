module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            js: {
                src: [  
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'bower_components/bluebird/js/browser/bluebird.js',
                    'bower_components/lodash/dist/lodash.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-google-maps/dist/angular-google-maps.js',
                    'bower_components/angular-sanitize/angular-sanitize.min.js',
                    'bower_components/angular-route/angular-route.min.js',
                    'bower_components/ngAutocomplete/src/ngAutocomplete.js',
                ],
                dest: 'assets/js/dist/dependencies.js'
            },
            app: {
                src: [  
                    "app/app.js",

                    // Controllers
                    "app/**/controllers/**.js",

                    // Services
                    "app/**/services/**.js",

                    // Factories
                    "app/map/factories/*.js",

                    // Directives
                    "app/directives/*.js",
                    "app/map/directives/*.js",
                ],
                dest: 'assets/js/dist/app.js'
            },
            css: {
                src: [
                    'assets/css/vendor/*.css',
                    'assets/css/*.css',
                    'bower_components/fontawesome/css/font-awesome.min.css'
                ],
                dest: 'assets/css/dist/concat.css'
            }
        },
        uglify: {
            js: {
                files: {
                    'assets/js/dist/dependencies.min.js': ['assets/js/dist/dependencies.js'],
                    'assets/js/dist/app.min.js': ['assets/js/dist/app.js']
                }
            },
        },
        cssmin: {
            combine: {
                files: {
                  'assets/css/dist/concat.min.css': ['assets/css/dist/concat.css']
                }
            }
        },
        watch: {
            files: ['assets/css/*', 'app/**'],
            tasks: ['concat', 'cssmin'],
            options: {
                livereload: true
            }
        },
        clean: {
            js: ['assets/js/dist/*'],
            copy: ['assets/css/dist/fonts']
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                      {expand: true, cwd: 'assets/css/fonts/', src:['**'], dest: 'assets/css/dist/fonts'},
                  ]
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'copy']);
    grunt.registerTask('css', ['concat:css', 'cssmin', 'copy']);
}