const Generator = require("yeoman-generator");
const List = require("@webpack-cli/webpack-scaffold").List;
const Input = require("@webpack-cli/webpack-scaffold").Input;
const createDevConfig = require("./dev-config.js");

module.exports = class WebpackGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);
    opts.env.configuration = {
      dev: {
        webpackOptions: {},
      },
    };
  }

  prompting() {
    return this.prompt([
      List("confirm", "this is demo.Is ready?", ["Yes", "No"]),
      Input('entry','what is the entry point?')
    ]).then((answer) => {
      if (answer["confirm"] === "yes") {
        this.options.env.configuration.dev.webpackOptions = createDevConfig(
          answer
        );
      }
    });
  }
};
