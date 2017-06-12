import React from 'react';
import { shallow, mount } from 'enzyme';
import SnippetSmallBox from '../../src/compontents/snippetComponents/SnippetSmallBox/SnippetSmallBox';


describe('<SnippetSmallBox />', () => {
  it(' Constructor test', () => {
    const wrapper = shallow(
      <SnippetSmallBox
        name="test"
        title="testTitle"
        description="testDesc" />
    );
    expect(wrapper.html()).toEqual(
      "<div class=\"snippet-small-box\">" +
      "<div>" +
      "<div>" +
      "<div class=\"box-image\">" +
      "<img src=\"/images/test.png\" alt=\"foo\"/>" +
      "</div>" +
      "<div class=\"box-text\">" +
      "<h1 class=\"snippet-text\">testTitle</h1>" +
      "<p class=\"snippet-text\">testDesc</p>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>");
  });
  it(' MouseOver', () => {
    const wrapper = mount(
      <SnippetSmallBox
        name="test"
        title="testTitle"
        description="testDesc" />
    );
    wrapper.find('.snippet-small-box').simulate('mouseOver');
    expect(wrapper.exists('test.gif')).toEqual(true);
  });
  it(' MouseOut', () => {
    const wrapper = mount(
      <SnippetSmallBox
        name="test"
        title="testTitle"
        description="testDesc" />
    );
    wrapper.find('.snippet-small-box').simulate('mouseOut');
    expect(wrapper.exists('test.png')).toEqual(true);
  });
});
