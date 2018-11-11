import React, { Component } from 'react';
import BpmfTextBlock from '../BpmfTextBlock/BpmfTextBlock.js';
import convert from '../../utils/convert.js';

export default class BpmfAutoText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BpmfTextBlock text={this.props.text}
        pronunciation={convert(this.props.text)}
        fontSize={this.props.fontSize}
        container_vertical={this.props.container_vertical}
        text_vertical={this.props.text_vertical}/>
    );
  }
}
