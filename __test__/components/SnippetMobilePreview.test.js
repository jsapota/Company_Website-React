import React from 'react';
import { shallow } from 'enzyme';
import SnippetMobilePreview from '../../src/compontents/snippetComponents/SnippetMobilePreview/SnippetMobilePreview';


describe('<SnippetMobilePreview />', () => {
  it('SnipperMobilePreview - constructor test', () => {
    const wrapper = shallow(
      <SnippetMobilePreview />
    );
    expect(wrapper.html()).toEqual( "<div class=\"snippet-mobile-preview\"><div class=\"mobile-preview\"><div class=\"snippet-live\"><div class=\"snippet-code-iframe\"><iframe class=\"codeIframe\"></iframe></div></div></div></div>");
  });
});
