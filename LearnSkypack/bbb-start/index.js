import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

console.log("react:", React);
console.log("ReactDOM:", ReactDOM);

ReactDOM.render(
  React.createElement("div", {}, "Hello skypack. Rendered by react."),
  document.getElementById("root")
);
