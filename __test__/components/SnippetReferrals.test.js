import React from 'react';
import { shallow } from 'enzyme';
import SnippetReferrals from '../../src/compontents/snippetComponents/SnippetReferrals/SnippetReferrals';


describe('<SnippetReferrals />', () => {
  it(' Constructor test', () => {
    const wrapper = shallow(
      <SnippetReferrals referrals={[
        {"key": 1, "name": "John Doe", "description": "test desc", "author": "test author"}]}/>
    );
    expect(wrapper.html()).toEqual(`<section class=\"snippet-referrals\"><div class=\"container\"><div class=\"row\"><div class=\"referrals-side\"><div class=\"referral-style\"><div class=\"row referral-data\"><div class=\"col-xs-12 col-sm-4 col-md-2\"><div class=\"referral-image\"><img src=\"/images/snippetImages/John Doe.jpg\" alt=\"referral\"/></div></div><div class=\"col-xs-12 col-sm-8 col-md-10\"><div class=\"referral-opinion\"><p>test desc</p><p>test author</p></div></div></div></div></div></div></div></section>`);
  });
});
