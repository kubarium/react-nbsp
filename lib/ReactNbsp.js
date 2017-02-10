'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Space = function Space(props) {
    var count = props.count;
    var space = "";
    do {
        space = space.concat(' ');
    } while (--count);
    return _react2['default'].createElement(
        'span',
        null,
        space
    );
};

Space.propTypes = {
    count: _react.PropTypes.number
};

exports['default'] = Space;
module.exports = exports['default'];