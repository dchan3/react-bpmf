import React, { Component } from 'react';
import BpmfTextBlock from '../BpmfTextBlock/BpmfTextBlock.js';
import convert from '../../utils/convert.js';
import PropTypes from 'prop-types';

export default class BpmfAutoText extends Component {
  static propTypes = {
    container_vertical: PropTypes.bool,
    text_vertical: PropTypes.bool,
    fontSize: PropTypes.string,
    text: PropTypes.string,
  }

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
