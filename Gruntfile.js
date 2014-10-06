module.exports = function ( grunt ) {
  grunt.loadNpmTasks('grunt-aws');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  var taskConfig = {
    conf: require( './configuration.json' ),

    clean: [
        './build/'
    ],

    copy: {
      src: {
        files: [
          {
            src: ['./**'],
            dest: 'build/',
            cwd: './src',
            expand: true
          }
       ]
      }
    },

    /**
     * Deploy build dir in S3
     */
    s3: {
      options: {
        accessKeyId: "<%= conf.aws.accessKeyId %>",
        secretAccessKey: "<%= conf.aws.secretAccessKey %>",
        cache: false,
        access: "public-read",
        bucket: "<%= conf.aws.bucket %>"
      },
      build: {
        cwd: "./build/",
        src: "**"
      }
    }

  };

  grunt.initConfig(taskConfig);

  grunt.registerTask( 'deploy', ['clean', 'copy', 's3']);
};
