import React, {Component} from 'react';
import {Select} from 'antd';

const Option = Select.Option;

export class AyaBaaWithSearch extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: true
    };
  }

  render() {
    return (
      <div>
        <Select
          showSearch
          style={{width: 200}}
          placeholder="Select a person"
          optionFilterProp="children"
          // onChange={onChange}
          // onFocus={onFocus}
          // onBlur={onBlur}
          // onSearch={onSearch}
          // filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          <Option value="jack">Jack1</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      </div>
    );
  }
}





