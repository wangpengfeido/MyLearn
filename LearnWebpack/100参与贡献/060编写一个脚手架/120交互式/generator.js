const Generator = require("yeoman-generator");
const List = require("@webpack-cli/webpack-scaffold").List;

module.exports = class WebpackGenerator extends Generator {
  constructor(args, opts) {
    super(args, opts);
    opts.env.configuration = {
      dev: {},
    };
  }

  prompting() {
    return this.prompt([
      List("confirm", "this is demo.Is ready?", ["Yes", "No"]),
    ]).then((answer) => {
      if (answer["confirm"] === "yes") {
        //
      }
    });
  }
};
