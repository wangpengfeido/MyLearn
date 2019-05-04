import React, {Component} from 'react';
import {Select} from 'antd';

const Option = Select.Option;

export class AyaAaaBase extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      isOpen: false,
    };
  }

  handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  handleChangeIsLoading = () => {
    this.setState((prevState) => ({
      isLoading: !prevState.isLoading,
    }));
  };

  handleChangeIsOpen = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <div>
        <Select defaultValue="lucy" style={{width: 120}} onChange={this.handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select defaultValue="lucy" style={{width: 120}} disabled>
          <Option value="lucy">Lucy</Option>
        </Select>

        <div>
          <div>isLoading:
            <button onClick={this.handleChangeIsLoading}>{this.state.isLoading.toString()}</button>
          </div>
          <Select defaultValue="lucy" style={{width: 120}} loading={this.state.isLoading}>
            <Option value="lucy">Lucy</Option>
          </Select>
        </div>

        <div>
          <div>isOpen:
            <button onClick={this.handleChangeIsOpen}>{this.state.isOpen.toString()}</button>
          </div>
          <Select defaultValue="lucy" style={{width: 120}} open={this.state.isOpen}>
            <Option value="lucy">Lucy</Option>
          </Select>
        </div>
      </div>
    );
  }
}


