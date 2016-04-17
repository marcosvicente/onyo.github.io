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
    concat:{
        dist:{
            src: ['assets/js/**/*.js'],
            dest: 'assets/js/scripts.js'
        }
    },
    uglify:{
        scripts:{
            src:['assets/js/scripts.js'],
            dest: 'assets/js/scripts.min.js'
        }
    },
    cssmin :{
        all:{
            src: ['assets/css/**/*.css'],
            dest: 'assets/css/styles.min.css'
        }
    },
    htmlmin: {
        options: {
            removeComments: true,
            collapseWhitespace: true
        },
        pt:{
            expand: true,
            cwd: 'pt/',
            src : ['*.html'],
            dest: 'pt/'
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
          tunnel: true,
          tunnel: 'onyo',
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.registerTask('default', ['browserSync', 'watch']);
};