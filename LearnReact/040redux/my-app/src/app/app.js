import React, {Component} from 'react';
import './app.css';
import {Link, Route} from "react-router-dom";
import {AaaBase} from "./aaa-base/aaa-base";
import {AbaAdvancedTourial} from "./aba-advanced-tourial/aba-advanced-tourial";

export class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="menu">
          <ul>
            <li>
              <div><Link to="/aaa-base">基础</Link></div>
              <ul>
                <li><Link to="/aaa-base/aaa-action">action</Link></li>
                <li><Link to="/aaa-base/aba-reducer">reducer</Link></li>
                <li><Link to="/aaa-base/aca-store">store</Link></li>
                <li><Link to="/aaa-base/ada-data-flow">data flow</Link></li>
                <li><Link to="/aaa-base/aea-with-react">with react</Link></li>
              </ul>
            </li>
            <li>
              <div><Link to="/aba-advanced-tourial">高级</Link></div>
              <ul>
                <li><Link to="/aba-advanced-tourial/aba-async-actions">异步action</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="content">
          <Route path='/aaa-base' component={AaaBase}></Route>
          <Route path='/aba-advanced-tourial' component={AbaAdvancedTourial}></Route>
        </div>
      </div>
    );
  }
}