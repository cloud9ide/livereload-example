module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    
    grunt.initConfig({
        connect: {
          all: {
            options:{
              port: 8080,
              hostname: "0.0.0.0",
              livereload: 8081
            }
          }
        },
        sass: {
            dist: {
                files: {
                    'style.css': 'style.scss',
                },
            }
        },
        watch: {
            options: {
                livereload: 8081
            },
            sass: {
                files: 'style.scss',
                tasks: ['sass'],
            },
            js: {
                files: 'script.js'
            },
            html: {
                files: ['index.html']
            }
        }
    });
    
    grunt.registerTask('default', ['sass', 'connect', 'watch']);
};