import React, {Component} from 'react';
import './app.css';
import {Link, Route} from "react-router-dom";
import {AagDesc} from './aag-desc/index.jsx';
import {AaqBase} from "./aaq-base/aaa-base.jsx";
import {AbaAdvancedTourial} from "./aba-advanced-tourial/aba-advanced-tourial";

export class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="menu">
          <ul>
            <li><Link to="/aag-desc">简介</Link></li>
            <li>
              <div><Link to="/aaq-base">基础</Link></div>
              <ul>
                <li><Link to="/aaq-base/aaa-action">action</Link></li>
                <li><Link to="/aaq-base/aba-reducer">reducer</Link></li>
                <li><Link to="/aaq-base/aca-store">store</Link></li>
                <li><Link to="/aaq-base/ada-data-flow">data flow</Link></li>
                <li><Link to="/aaq-base/aea-with-react">with react</Link></li>
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
          <Route path="/aag-desc" component={AagDesc}></Route>
          <Route path='/aaq-base' component={AaqBase}></Route>
          <Route path='/aba-advanced-tourial' component={AbaAdvancedTourial}></Route>
        </div>
      </div>
    );
  }
}