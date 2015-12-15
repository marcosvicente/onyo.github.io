module.exports = function (grunt) {
  'use strict';
  // Configurations
  grunt.initConfig({
    watch: {
      css: {
        files: ['assets/scss/*.scss','assets/scss/**/*.scss','assets/images/icon/*'],
        tasks: ['sass', 'autoprefixer'],
        options: {
          livereload: true
        }
      },
      gruntfile: {
        files: ['./gruntfile.js'],
        options: {
          reload: true
        }
      }
    },
    sass: {
      options:{
        sourcemap: 'file',
        style: 'compressed'
      },
      files: {
        expand: true,
        cwd: 'assets/scss/',
        src: [
        '**/*.scss'
        ],
        dest: 'assets/css',
        ext: '.css',
        extDot: 'last'
      }
    },
    autoprefixer: {
      options: {
        map: true,
        browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 1%']
      },
      files: {
            expand: true,
            cwd: 'assets/css/',
            src: [
                '**/*.css'
            ],
            dest: 'assets/css',
            ext: '.css',
            extDot: 'last'
        }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
          'assets/css/*.css',
          'assets/js/*.js',
          'pt/*.html',
          '*.html'
          ]
        },
        options: {
          watchTask: true,
          proxy: 'local.onyo.com',
          open: false
        }
      }
    }
  });

  // load tasks
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['browserSync', 'watch']);
};