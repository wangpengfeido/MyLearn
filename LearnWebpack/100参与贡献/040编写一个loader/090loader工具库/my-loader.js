const loaderUtils = require("loader-utils");
const schemaUtils = require("schema-utils");

const schema = {
  type: "object",
  properties: {
    replaceStr: {
      type: "string",
    },
  },
};

module.exports = function (value) {
  // loader-utils 中包含一系列工具
  // 例如，获取 loader 的 options 选项
  const options = loaderUtils.getOptions(this);

  // 配合 schema-utils 进行结构校验
  schemaUtils(schema, options);

  value = value.replace(
    "??????",
    `!!!changed by loader1:${options.replaceStr}!!!??????`
  );
  this.callback(null, value);
};
