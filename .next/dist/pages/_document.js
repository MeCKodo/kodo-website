"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _document = require("next/dist/server/document.js");

var _document2 = _interopRequireDefault(_document);

var _styledComponents = require("styled-components");

var _index = require("../styles/index.css");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/kodo/WebstormProjects/kodo-website/pages/_document.js?entry";


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: "render",
    value: function render() {
      var sheet = new _styledComponents.ServerStyleSheet();
      var main = sheet.collectStyles(_react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }));
      var styleTags = sheet.getStyleElement();
      return _react2.default.createElement("html", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, "My page"), _react2.default.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _index2.default), styleTags), _react2.default.createElement("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement("div", { className: "root", __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, main), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })));
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkhlYWQiLCJNYWluIiwiTmV4dFNjcmlwdCIsIlNlcnZlclN0eWxlU2hlZXQiLCJzdHlsZXNoZWV0IiwiTXlEb2N1bWVudCIsInNoZWV0IiwibWFpbiIsImNvbGxlY3RTdHlsZXMiLCJzdHlsZVRhZ3MiLCJnZXRTdHlsZUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWSxBQUFNLEFBQU07Ozs7QUFDL0IsQUFBUzs7QUFDVCxBQUFPOzs7Ozs7Ozs7SUFFYyxBOzs7Ozs7Ozs7Ozs2QkFDVixBQUNQO1VBQU0sUUFBTixBQUFjLEFBQUksQUFDbEI7VUFBTSxhQUFPLEFBQU0sOEJBQWMsQUFBQzs7b0JBQUQ7c0JBQWpDLEFBQWEsQUFBb0IsQUFDakM7QUFEaUM7QUFBQSxPQUFBLENBQXBCO1VBQ1AsWUFBWSxNQUFsQixBQUFrQixBQUFNLEFBQ3hCOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDRCQUFBLGNBQUE7O29CQUFBO3NCQUZGLEFBRUUsQUFBUSxBQUNQO0FBREQ7QUFBQSwyQkFISixBQUNFLEFBS0EsNEJBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUF1QjtBQUF2QjtTQURGLEFBQ0UsQUFDQSx1QkFBQSxBQUFDOztvQkFBRDtzQkFUTixBQUNFLEFBTUUsQUFFRSxBQUlQO0FBSk87QUFBQTs7Ozs7QUFkOEIsQTs7a0JBQW5CLEEiLCJmaWxlIjoiX2RvY3VtZW50LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rb2RvL1dlYnN0b3JtUHJvamVjdHMva29kby13ZWJzaXRlIn0=