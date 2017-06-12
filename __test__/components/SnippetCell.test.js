import React from 'react';
import { shallow } from 'enzyme';
import SnippetCell from '../../src/compontents/snippetComponents/SnippetCell/SnippetCell';


describe('<SnippetCell />', () => {
  it('SnippetCell - constructor test', () => {
    const wrapper = shallow(
      <SnippetCell />
    );
    expect(wrapper.html()).toEqual("<td><input value=\"\"/></td>");
  });
});
