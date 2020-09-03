function component() {
  var element = document.createElement("div");

  element.innerHTML = join(["Hello", "webpack"], " ");

  this.alert("this is alert");

  return element;
}

document.body.appendChild(component());
