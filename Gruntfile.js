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
                ],
                dest: 'assets/js/dependencies.js'
            },
            css: {
                src: [
                    'assets/css/*.css'
                ],
                dest: 'assets/css/concat.css'
            }
        },
        uglify: {
            js: {
                files: {
                    'assets/js/dependencies.min.js': ['assets/js/dependencies.js']
                }
            },
        },
        cssmin: {
            combine: {
                files: {
                  'assets/css/concat.min.css': ['assets/css/concat.css']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat', 'uglify']);
    grunt.registerTask('css', ['concat:css', 'cssmin']);
}