'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getModeText = function getModeText(mode) {
  switch (mode) {
    case 'player-vs-player':
      {
        return 'Player vs Player';
      }
    case 'player-vs-bot':
      {
        return 'Player vs Bot';
      }
    case 'bot-vs-bot':
      {
        return 'Bot vs Bot';
      }
    default:
      {
        return 'Bot vs Custom';
      }
  }
};
var Info = (_temp = _class = function (_Component) {
  _inherits(Info, _Component);

  function Info() {
    _classCallCheck(this, Info);

    return _possibleConstructorReturn(this, (Info.__proto__ || Object.getPrototypeOf(Info)).apply(this, arguments));
  }

  _createClass(Info, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'info-wraper' },
        getModeText(this.props.mode)
      );
    }
  }]);

  return Info;
}(_react.Component), _class.propTypes = {
  mode: _propTypes2.default.string
}, _class.contextTypes = {
  engine: _propTypes2.default.object,
  scale: _propTypes2.default.number
}, _temp);
exports.default = (0, _mobxReact.observer)(Info);