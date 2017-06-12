import React from 'react';
import { shallow } from 'enzyme';
import SnippetRow from '../../src/compontents/snippetComponents/SnippetRow/SnippetRow';


describe('<SnippetRow />', () => {
  it('SnippetRow - constructor test', () => {
    const wrapper = shallow(
      <SnippetRow rowNumber="1"
                  cellStyle={
                    [
                      {"width": "10%"},
                      {"width": "10%"},
                      {"width": "10%"},
                      {"width": "10%"},
                      {"width": "10%"}
                    ]
                  }/>
    );
    expect(wrapper.html()).toEqual(`<tr><td class=\"num dont-copy\" data-pseudo-content=\"1\"></td><td style=\"width:10%;\"><input value=\"\"/></td><td style=\"width:10%;\"><input value=\"\"/></td><td style=\"width:10%;\"><input value=\"\"/></td><td style=\"width:10%;\"><input value=\"\"/></td></tr>`);
  });
});
