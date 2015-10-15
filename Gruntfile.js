"use strict";

var SRC_PATH = "client";
var BUILD_PATH = "build";

module.exports = function (grunt) {

  grunt.initConfig({
    browserify: {
      build: {
          dest: BUILD_PATH + "/js/application.js",
          src: SRC_PATH + "/jsx/browser_bundle.jsx",
          options: {
            debug: true
          } 
      }
    },

    connect: {
      server: {
        options: {
          port: 3000,
          base: BUILD_PATH
        }
      }
    },
      
    watch: {
      files: ["client/jsx/**/*.jsx"],
      tasks: ["browserify"],
      options: { livereload: true }
    }
  });

  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["browserify:build", "connect", "watch"]);
};
