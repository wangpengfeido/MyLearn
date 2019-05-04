import React, {Component} from 'react';
import './app.css';
import {Link, Route} from "react-router-dom";
import {Components} from "./components/components";

export class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="menu">
          <ul>
            <li><Link to="/components/aya-select">select</Link></li>
          </ul>
        </div>
        <div className="content">
          <Route path='/components' component={Components}></Route>
        </div>
      </div>
    );
  }
}