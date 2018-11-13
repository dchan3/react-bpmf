import React, { Component } from 'react';
import BpmfText from '../BpmfText/BpmfText.js';
import convert from '../../utils/convert.js';
import PropTypes from 'prop-types';

export default class BpmfAutoTextUnit extends Component {
  static propTypes = {
    vertical: PropTypes.bool,
    fontSize: PropTypes.string,
    string: PropTypes.string.isRequired,
  }

  static defaultProps = {
    vertical: true,
    fontSize: '16px'
  }

  constructor(props) {
    super(props);
  }

  render() {
    var pron = convert(this.props.string),
      tone = pron.match(/[ˊˇˋ˙]/);
    tone = tone && tone[0] || "";
    pron = pron.replace(tone, '');

    return (
      <BpmfText string={this.props.string}
        pronunciation={pron}
        tone={tone}
        fontSize={this.props.fontSize}
        vertical={this.props.vertical} />
    );
  }
}
