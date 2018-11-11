import React, { Component } from 'react';
import BpmfText from '../BpmfText/BpmfText.js';
import styled from 'styled-components';

const BlockContainer = styled.div`
  writing-mode: ${props => {
    if (props.vertical) return 'horizontal-tb';
    else return 'vertical-lr';
  }};
  display: block;
  text-orientation: upright;
`;

export default class BpmfTextBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var roman = '';
    var textArr = this.props.text.split('').reduce(function(acc, cur, i, arr) {
        if (i === 1) {
          acc = [arr[0]];
        }

        if (cur.match(/[\u4E00-\u9FCC]/) !== null) {
          if (roman.length) {
            acc.push(roman);
            roman = '';
          }
          acc.push(cur);
        }
        else {
          roman += cur;

          if (i == arr.length - 1) acc.push(roman);
        }
        return acc;
      }),
      pronArr = this.props.pronunciation.split(' '),
      vert1 = this.props.container_vertical,
      vert2 = this.props.text_vertical,
      retval = [];
    for (var i = 0; i < textArr.length && i < pronArr.length; i++) {
      var tone = pronArr[i].match(/[ˊˇˋ˙]/);
      tone = tone && tone[0] || "";
      retval.push({
        char: textArr[i],
        pron: pronArr[i].replace(tone, ''),
        tone: tone
      });
    }
    var self = this.props;
    return (
      <BlockContainer vertical={vert1}>
        {retval.map(function(char, n) {
          return <BpmfText key={n} string={char.char} pronunciation={char.pron}
            tone={char.tone}
            fontSize={self.fontSize}
            vertical={vert2} />;
        })}
      </BlockContainer>
    );
  }
}
