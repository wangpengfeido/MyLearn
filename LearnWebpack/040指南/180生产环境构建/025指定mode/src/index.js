import { cube } from "./math";

console.log("process.env.NODE_ENV", process.env.NODE_ENV);

function component() {
  var element = document.createElement("pre");

  element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + cube(5)].join(
    "\n\n"
  );

  return element;
}

document.body.appendChild(component());
