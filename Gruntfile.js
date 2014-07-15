'use strict';

module.exports = function (grunt) {
    grunt.initConfig({

        // pkg: grunt.file.readJSON('package.json'),

        'ftp-deploy': {
            src: {
                auth: {
                    host: 'w01215ad.kasserver.com',
                    port: 21,
                    authKey: 'key'
                },
                src: 'app',
                dest: '.',
                exclusions: ['app/**/.DS_Store', 'app/**/Thumbs.db', 'app/lib']
            },

            lib: {
                auth: {
                    host: 'w01215ad.kasserver.com',
                    port: 21,
                    authKey: 'key'
                },
                src: 'app/lib/.',
                dest: './lib/.',
                exclusions: ['app/**/.DS_Store', 'app/**/Thumbs.db']
            }
        }
    });

    grunt.loadNpmTasks('grunt-ftp-deploy');

    grunt.registerTask('deploy-libraries', ['ftp-deploy:lib']);

    grunt.registerTask('default', ['ftp-deploy:src']);
};