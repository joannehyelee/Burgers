module.exports = function (grunt) {

    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

            // Tasks
            sass: {
                dist: {
                    files: {
                        'public/css/style.css' : 'public/css/sass/style.scss'
                    }
                }
            }
    });

    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-sass');

    // Register tasks
    grunt.registerTask('default', ['sass']);
}