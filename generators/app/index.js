'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the grand ' + chalk.red('generator-nunit') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'Which is the name of your project?',
      default: 'NUnitTestProject'
    }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('Foo.cs'),
      this.destinationPath('Foo.cs'),
      { namespace: this.props.projectName }
    );
    this.fs.copyTpl(
      this.templatePath('FooTest.cs'),
      this.destinationPath('FooTest.cs'),
      { namespace: this.props.projectName }
    );
    this.fs.copyTpl(
      this.templatePath('project.json'),
      this.destinationPath('project.json')
    );
  },

  /*
  check if run dotnet restore
  install: function () {
    this.installDependencies();
  }
  */
});
