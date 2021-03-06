//Gruntfile
module.exports = function(grunt) {

    // requirejs compile options
    var compileOptions = {

        mainConfigFile: 'app/js/main.js',
        baseUrl: 'app/js',
        include: ['main'],
        out: 'dist/main.min.js',
        removeCombined: false,
        findNestedDependencies: true,

        replaceRequireScript: [{
            files: ['app/index.html'],
            module: 'main'
        }],

        //Removes console.logs for production
        onBuildWrite: function (moduleName, path, contents) {
            if(/(.*)js\/modules\/(.*)/.test(path)) return contents.replace(/console.log(.*);/g, ';');
            return contents;
        }
    }

    //Initializing the configuration object
    grunt.initConfig({

        // Task configuration
        less: {
            development: {
                options: {
                    compress: false,  // no minification in dev
                    relativeUrls: true
                },
                files: {
                    //compiling base.less into styles.css
                    "./app/styles/styles.css":"./app/styles/base.less"
                }
            },
            production: {
                options: {
                    cleancss: true, // minify css
                    // compress: true, // minify css
                    relativeUrls: true
                },
                files: {
                    //compiling base.less into main.min.css
                    "./dist/main.min.css": "./app/styles/base.less"
                }
            }
        },
        requirejs: {
            compile: {
                options : compileOptions
            }
        },
        handlebars: {
            compile: {
                options: {
                    amd: true
                },
                src: ['app/templates/**/*.hbs'],
                dest: 'dist/precompiled.handlebars.js'
            }
        },
        jsdoc : {
            dist : {
                src: ['app/js/**/*.js', '!app/js/lib/**/*.js'],
                options: {
                    destination: 'doc',
                    readme: 'README.md'
                }
            }
        },
        watch: {
            less: {
                // Watch all .less files from the styles directory)
                files: ['app/styles/*.less'],
                tasks: ['less'],
                // Reloads the browser
                options: {
                    livereload: true
                }
            },
            requirejs: {
                // Watch only main.js so that we do not constantly recompile the .js files
                files: [ 'app/js/main.js' ],
                tasks: [ 'requirejs' ],
                // Reloads the browser
                options: {
                    livereload: true
                }
            },
            handlebars: {
                // Watch only main.js so that we do not constantly recompile the .js files
                files: [ 'app/templates/**/*.hbs' ],
                tasks: [ 'handlebars' ],
                // Reloads the browser
                options: {
                    livereload: true
                }
            },
            jsdoc: {
                // Watch only main.js so that we do not constantly jsDoc the .js files
                files: [ 'app/js/main.js' ],
                tasks: [ 'jsdoc' ]
            },
        }
    });

    // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-jsdoc');

    // Task definition
    grunt.registerTask('default', ['watch']);

};
