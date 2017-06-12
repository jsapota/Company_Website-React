import React from 'react';
import { shallow } from 'enzyme';
import SnippetCodeSource from '../../src/compontents/snippetComponents/SnippetCodeSource/SnippetCodeSource';


describe('<SnippetCodeSource />', () => {
  it('Constructor test', () => {
    const wrapper = shallow(
      <SnippetCodeSource initialHtml="dummyHTML"/>
    );
    expect(wrapper.html()).toEqual(
      "<div class=\"snippet-code-source-textarea\">" +
      "<textarea id=\"textareaID\">dummyHTML</textarea>" +
      "</div>");
  });
});
