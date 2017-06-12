import 'lodash'
var _ = require('lodash');
/* eslint-disable */
  export function ParsePage() {
    this.call = function() {
      var elements = [],
        iframes = document.getElementsByClassName('codeIframe');

      for(var i=0; i<iframes.length; ++i) {
        var doc = (iframes[i].contentWindow || iframes[i].contentDocument);
        if (doc.document)doc = doc.document;

        var elementsInIframe = doc.querySelectorAll("[" + companyAttribute() + "]");

        for (var j=0; j<elementsInIframe.length; ++j) {
          elements.push(elementsInIframe[j]);
        }
      }

      return elements;
    };

    var companyAttribute = function() {
      return "company";
    };
  };

  export function ChangeElements(table) {
    this.call = function() {
      var elements = (new ParsePage()).call();

      for (var i=0; i<elements.length; ++i){
        if (isForm(elements[i])) {
        } else {
          (new ChangeGetElement(elements[i],table).call())
        }
      };
    };

    var isForm = function(element) {
      return (element.tagName === "FORM");
    };
  };

  export function SwapGetElement(element, data) {
    var element = element,
      data = data;

    this.call = function() {
      var newInnerHtml = "";

      for (var i=0; i<data.length; ++i) {
        newInnerHtml += swapInnerElementWithDataRow(element.innerHTML, data[i]);
      };

      element.innerHTML = newInnerHtml;
    };

    var swapInnerElementWithDataRow = function(innerElementHtml, dataRow) {
      var key, newInnerHtml = innerElementHtml;

      for (key in dataRow) {
        newInnerHtml = swapHandlebarsWithValue(newInnerHtml, key, dataRow[key]);
      };

      return newInnerHtml;
    };

    var swapHandlebarsWithValue = function(innerElementHtml, key, value) {
      return innerElementHtml.replace("{{" + key + "}}", value);
    };
  }

  export function ElementOptions(element) {
    var element = element;

    this.call = function() {
      return parseAttributes(onlycompanyAttributes(getElementAttributes(element)));
    };

    var getElementAttributes = function(element) {
      var attributes = {},
        attrs = element.attributes;

      for (var i=0; i<attrs.length; ++i) {
        attributes[attrs[i].nodeName] = attrs[i].value;
      }

      return attributes;
    };

    var parseAttributes = function(attributes) {
      var key, attrs = {};

      for (key in attributes) {
        attrs[parseKey(key)] = attributes[key];
      };

      return attrs;
    };

    var onlycompanyAttributes = function(attributes) {
      var key, companyAttributes = {};

      for (key in attributes) {
        if (iscompanyAttribute(key)) {
          companyAttributes[key] = attributes[key];
        };
      }

      return companyAttributes;
    };

    var iscompanyAttribute = function(name) {
      return companyAttributeRegexp().test(name);
    };

    var companyAttributeRegexp = function() {
      return new RegExp(/^company-?/i);
    };

    var parseKey = function(key) {
      if (key === "company") { return "slug"; }
      return key.replace("company-", "");
    };
  };

  export function useOptionsOnData(data, options) {
    if (options["limit"]) {
      data = _.slice(data, 0, parseInt(options["limit"]));
    }

    if (options["search"]) {
      var searchParams = JSON.parse(options["search"]);
      data = _.filter(data, searchParams);
    }

    return data;
  }

  export function ChangeGetElement(element,table) {
    var element = element;
    var table = table;
    this.call = function() {
      var options = (new ElementOptions(element,table)).call();
      var data = useOptionsOnData(table, options);

      (new SwapGetElement(element, data)).call();
    };
  }
