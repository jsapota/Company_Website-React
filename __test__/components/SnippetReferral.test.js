import React from 'react';
import { mount } from 'enzyme';
import SnippetReferral from '../../src/compontents/snippetComponents/SnippetReferral/SnippetReferral';


describe('<SnippetReferral />', () => {
  it(' Constructor test', () => {
    const wrapper = mount(
      <SnippetReferral key={1}
                       name={"john doe"}
                       description={"test"}
                       author={"author"}/>
    );
    expect(wrapper.html()).toEqual(`<div class=\"row referral-data\"><div class=\"col-xs-12 col-sm-4 col-md-2\"><div class=\"referral-image\"><img src=\"/images/snippetImages/john doe.jpg\" alt=\"referral\"></div></div><div class=\"col-xs-12 col-sm-8 col-md-10\"><div class=\"referral-opinion\"><p>test</p><p>author</p></div></div></div>`);
  });
});
