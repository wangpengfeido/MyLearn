import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import {AyaBaaWithSearch} from "./aya-baa-with-search/aya-baa-with-search";
import {AyaAaaBase} from "./aya-aaa-base/aya-aaa-base";

export class AyaSelect extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to='/components/aya-select/aya-aaa-base'>基本使用</Link>&nbsp;&nbsp;&nbsp;
          <Link to='/components/aya-select/aya-baa-with-search'>带搜索框</Link>
        </div>
        <Route path='/components/aya-select/aya-aaa-base' component={AyaAaaBase}></Route>
        <Route path='/components/aya-select/aya-baa-with-search' component={AyaBaaWithSearch}></Route>
      </div>
    );
  }
}