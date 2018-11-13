import React from 'react';
import { expect } from 'chai';
import { BpmfAutoText, BpmfAutoTextUnit, BpmfText, BpmfTextBlock }
  from '../src';
import convert from '../src/lib/utils/convert.js';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('Convert function - single character', function() {
  it('first tone renders correctly', function() {
    expect(convert('珠')).to.equal('ㄓㄨ');
  });
  it('second tone renders correctly', function() {
    expect(convert('流')).to.equal('ㄌㄧㄡˊ');
  });
  it('third tone renders correctly', function() {
    expect(convert('廣')).to.equal('ㄍㄨㄤˇ');
  });
  it('fourth tone renders correctly', function() {
    expect(convert('大')).to.equal('ㄉㄚˋ');
  });
})

describe('General', function() {
  it('correctly renders non-ruby text', function() {
    const wrapper = render(<BpmfAutoTextUnit string="東" />);
    expect(wrapper.text()).to.contain("東");
  });
});
