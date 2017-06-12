import React from 'react';
import { mount } from 'enzyme';
import SnippetTitleAndDescription from '../../src/compontents/snippetComponents/SnippetTitleAndDescription/SnippetTitleAndDescription';


describe('<SnippetTitleAndDescription />', () => {
  it(' Constructor test', () => {
    const wrapper = mount(
      <SnippetTitleAndDescription
        name="test"
        title="testTitle"
        subtitle="testSubtitle"
        description="testDesc" />
    );
    expect(wrapper.html()).toEqual(`<section class=\"snippet-title-description\"><div class=\"snippet-titles\"><div class=\"container\"><h1>testTitle</h1><h2>testSubtitle</h2></div></div><div class=\"snippet-header\"><div class=\"container\"><div class=\"row\"><div class=\"col-lg-6 col-md-12\"><div class=\"row\"><div class=\"snippet-gif\"><img src=\"/images/snippetImages/test.png\" alt=\"foo\"></div></div><div class=\"row\"><div class=\"col-md-6\"><a class=\"btn btn-company btn-block\" href=\"/preview/restaurant-menu\">Live preview</a></div><div class=\"col-md-6\"><a class=\"btn btn-company btn-block\" href=\"#section-snippet-customizer\">Use it</a></div></div></div><div class=\"col-lg-6  col-md-12 left-side\"><div class=\"text-align-left\"><h1 class=\"snippet-title\">testTitle</h1></div><div class=\"text-align-left\"><h3 class=\"snippet-desc\">testDesc</h3></div></div></div></div></div></section>`);
  });

  it(' MouseOver', () => {
    const wrapper = mount(
      <SnippetTitleAndDescription
        name="test"
        title="testTitle"
        subtitle="testSubtitle"
        description="testDesc" />
    );
    wrapper.find('.snippet-gif').simulate('mouseOver');
    expect(wrapper.exists('test.gif')).toEqual(true);
  });

  it(' MouseOut', () => {
    const wrapper = mount(
      <SnippetTitleAndDescription
        name="test"
        title="testTitle"
        subtitle="testSubtitle"
        description="testDesc" />
    );
    wrapper.find('.snippet-gif').simulate('mouseOut');
    expect(wrapper.exists('test.png')).toEqual(true);
  });

});
