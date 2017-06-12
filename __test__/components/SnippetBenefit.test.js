import React from 'react';
import { shallow } from 'enzyme';
import SnippetBenefit from '../../src/compontents/snippetComponents/SnippetBenefit/SnippetBenefit';


describe('<SnippetBenefit />', () => {
  it(' ImagePath - constructor test', () => {
    const component = shallow(<SnippetBenefit name="test" title="test" description="test"/>);
    expect(component.contains(<img className="benefit-image" src="/images/snippetImages/test.png" alt="foo"/>)).toEqual(true);
  });

  it('Title - constructor test', () => {
    const component = shallow(<SnippetBenefit name="test" title="test" description="test"/>);
    expect(component.contains(<h1 className="benefit-title">test</h1>)).toEqual(true);
  });

  it('Description - constructor test', () => {
    const component = shallow(<SnippetBenefit name="test" title="test" description="test"/>);
    expect(component.contains(<p className="benefit-description">test</p>)).toEqual(true);
  });
});