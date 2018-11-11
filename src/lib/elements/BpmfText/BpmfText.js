import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BpmfWrap = styled.div`
  font-size: ${props => props.fontSize};
  writing-mode: ${props => {
    if (props.vertical) return 'vertical-lr';
    else return 'horizontal-tb';
  }};
  text-orientation: upright;
  margin: 0;
  font-family: "STKaiti", sans-serif;
`;

const BpmfContent = styled.ruby`
  font-size: 1em;
`;

const BpmfReading = styled.rt`
  font-size: .333em;
  font-family: "STKaiti", sans-serif;
  display: block;
  text-align: center;
  max-height: 100%;
  writing-mode: vertical-lr;
`;

const BpmfTone = styled.span`
  font-family: "STKaiti", sans-serif;
  display: block;
  text-align: ${props => {
    if (props.tone.match(/[ˊˇˋ]/)) {
      if (props.pronLength === 3)  { return 'right'; }
      else if (props.pronLength === 2) { return 'center'; }
      else if (props.pronLength === 1) { return 'left'; }
    }
    else { return 'left'; }
  }};
  margin-top: ${props =>
    'calc(' + props.fontSize + ' / ' +
      ((props.tone.match(/[ˊˇˋ]/)) ? 4 : 16)+ ')'};
  position: relative;
  right: ${props => {
    if (props.tone.match(/[ˊˋ]/)) return '0';
    else if (props.tone === 'ˇ') return ('calc(' + props.fontSize + ' / 12)');
    else return ('calc(' + props.fontSize + ' / 3)');
  }};
`;

export default class BpmfText extends Component {
  static propTypes = {
    vertical: PropTypes.bool,
    fontSize: PropTypes.string,
    string: PropTypes.string,
    pronunciation: PropTypes.string,
    tone: PropTypes.string
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BpmfWrap vertical={this.props.vertical} fontSize={this.props.fontSize}>
        <BpmfContent>
          {this.props.string}
          <BpmfReading>{this.props.pronunciation}
            <BpmfTone
              pronLength={this.props.pronunciation.length}
              tone={this.props.tone}
              fontSize={this.props.fontSize}>
              {(this.props.tone) !== '' ? (this.props.tone) : '\u00A0' }
            </BpmfTone>
          </BpmfReading>
        </BpmfContent>
      </BpmfWrap>
    );
  }
}
