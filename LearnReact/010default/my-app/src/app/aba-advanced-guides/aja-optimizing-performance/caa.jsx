import React, { Component } from "react";
import { CaaCaa } from "./caa-caa.jsx";
import { CaaCba } from "./caa-cba.jsx";
import { CaaCca } from "./caa-cca.jsx";
import { CaaCda } from "./caa-cda.jsx";

export class Caa extends Component {
  render() {
    return (
      <fieldset>
        <h3>避免协调、shouldComponentUpdate、不可变数据</h3>
        <CaaCaa></CaaCaa>
        <CaaCba></CaaCba>
        <CaaCca></CaaCca>
        <CaaCda></CaaCda>
      </fieldset>
    );
  }
}
