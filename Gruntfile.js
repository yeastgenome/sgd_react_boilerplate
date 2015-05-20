"use strict";

var SRC_PATH = "client";
var BUILD_PATH = "build";

module.exports = function (grunt) {

  grunt.initConfig({

    browserify: {
    	build: {
	        dest: BUILD_PATH + "/js/application.js",
	        src: SRC_PATH + "/jsx/app.jsx",
	        options: {
	        	debug: true
	        }	
    	}
    },

    express: {
  		dev: {
        options: {
          port: 3000,
          server: "./server_instance.js"  
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
  grunt.loadNpmTasks("grunt-express");

  grunt.registerTask("default", ["express:dev", "watch"]);
};
