import * as snippet_iframe from '../scripts/snippet-iframe';

const updateIframes = (tableData,source) => {
  var iframes = document.getElementsByClassName('codeIframe');

  for(var i=0; i<iframes.length; ++i) {
    var y = (iframes[i].contentWindow || iframes[i].contentDocument);
    if (y.document)y = y.document;

    y.body.innerHTML = source;
  }
  (new snippet_iframe.ChangeElements(tableData).call());
};

export default updateIframes


