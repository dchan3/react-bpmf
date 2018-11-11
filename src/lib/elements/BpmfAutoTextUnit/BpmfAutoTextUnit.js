import React, { Component } from 'react';
import BpmfText from '../BpmfText/BpmfText.js';
import convert from '../../utils/convert.js';
import PropTypes from 'prop-types';

export default class BpmfAutoTextUnit extends Component {
  static propTypes = {
    vertical: PropTypes.bool,
    fontSize: PropTypes.string,
    string: PropTypes.string,
    tone: PropTypes.string
  }

  constructor(props) {
    super(props);
  }

  render() {
    var pron = this.props.convert(this.props.string),
      tone = pron.match(/[ˊˇˋ˙]/);
    tone = tone && tone[0] || "";

    return (
      <BpmfText string={this.props.string}
        pronunciation={convert(this.props.string)}
        tone={tone}
        fontSize={this.props.fontSize}
        vertical={this.props.vertical} />
    );
  }
}
