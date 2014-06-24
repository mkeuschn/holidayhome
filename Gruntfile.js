'use strict';

module.exports = function (grunt) {
    grunt.initConfig({

        // pkg: grunt.file.readJSON('package.json'),

        'ftp-deploy': {
            build: {
                auth: {
                    host: 'w01215ad.kasserver.com',
                    port: 21,
                    authKey: 'key'
                },
                src: 'app',
                dest: '.',
                exclusions: ['app/**/.DS_Store', 'app/**/Thumbs.db']
            }
        }
    });

    grunt.loadNpmTasks('grunt-ftp-deploy');

    grunt.registerTask('default', ['ftp-deploy']);
};