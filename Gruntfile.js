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
                dest: 'assets/js/dist/dependencies.js'
            },
            css: {
                src: [
                    'assets/css/vendor/*.css',
                    'assets/css/*.css'
                ],
                dest: 'assets/css/dist/concat.css'
            }
        },
        uglify: {
            js: {
                files: {
                    'assets/js/dist/dependencies.min.js': ['assets/js/dist/dependencies.js']
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
            files: ['assets/js/*', 'assets/css/*'],
            tasks: ['concat', 'cssmin', 'uglify']
        },
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
    grunt.registerTask('css', ['concat:css', 'cssmin']);
}