import React from 'react';
import { shallow, mount } from 'enzyme';
import SnippetRows from '../../src/compontents/snippetComponents/SnippetRows/SnippetRows';


describe('<SnippetRows />', () => {
  it('SnippetRows - constructor test', () => {
    const inputTable = [["name", "ingredients", "price", "image"]];
    const wrapper = mount(
      <SnippetRows
        numberOfRows={1}
        tableData={inputTable}
        cellStyle={
          [
            {"width": "10%"},
            {"width": "10%"},
            {"width": "10%"},
            {"width": "10%"},
          ]}/>
    );
    expect(wrapper.html()).toEqual( "<tbody><tr><td class=\"num dont-copy\" data-pseudo-content=\"1\"></td><td style=\"width: 10%;\"><input id=\"Eundefined\" value=\"\"></td><td style=\"width: 10%;\"><input id=\"Eundefined\" value=\"\"></td><td style=\"width: 10%;\"><input id=\"Eundefined\" value=\"\"></td><td style=\"width: 10%;\"><input id=\"Eundefined\" value=\"\"></td></tr></tbody>");
  });
});
