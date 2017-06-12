import React from 'react';
import { shallow } from 'enzyme';
import SnippetBenefits from '../../src/compontents/snippetComponents/SnippetBenefits/SnippetBenefits';


describe('<SnippetBenefits />', () => {
  it('Snipperbenefits - constructor test', () => {
    const wrapper = shallow(
    <SnippetBenefits benefits={[{ name: "bene", title:"beneTitle", description: "bedeDesc"}]}/>
    );
    expect(wrapper.html()).toEqual(`<section class=\"snippet-benefits\"><div class=\"container\"><div class=\"col-md-4 col-sm-6\"><div class=\"snippet-benefit\"><img class=\"benefit-image\" src=\"/images/snippetImages/bene.png\" alt=\"foo\"/><h1 class=\"benefit-title\">beneTitle</h1><p class=\"benefit-description\">bedeDesc</p></div></div></div></section>`)});
});
