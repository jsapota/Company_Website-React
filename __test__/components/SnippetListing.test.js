import React from 'react';
import { shallow, mount } from 'enzyme';
import SnippetsListing from '../../src/compontents/snippetComponents/SnippetsListing/SnippetsListing';


describe('<SnippetsListing />', () => {
  it('SnippetsListing - constructor test', () => {
    const wrapper = shallow(
      <SnippetsListing />
    );
    expect(wrapper.find('.snippet-listing').exists()).toEqual(true);
  });
  it('SnippetsListing - listing not empty test', () => {
    const wrapper = mount(
      <SnippetsListing />
    );
    expect(wrapper.find('.row').children().exists()).toEqual(true);
  });
});
