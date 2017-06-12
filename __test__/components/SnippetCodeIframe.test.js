import React from 'react';
import { shallow } from 'enzyme';
import SnippetCodeIframe from '../../src/compontents/snippetComponents/SnippetCodeIframe/SnippetCodeIframe';


describe('<SnippetCodeIframe />', () => {
  it('SnippetCell - constructor test', () => {
    const wrapper = shallow(
      <SnippetCodeIframe />
    );
    expect(wrapper.html()).toEqual("<div class=\"snippet-code-iframe\"><iframe class=\"codeIframe\"></iframe></div>");
  });
});
