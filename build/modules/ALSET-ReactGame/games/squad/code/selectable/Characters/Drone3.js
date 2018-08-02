"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Sprite = require("./Sprite");

var _Sprite2 = _interopRequireDefault(_Sprite);

var _mobxReact = require("mobx-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drone2 = function (_Component) {
  _inherits(Drone2, _Component);

  function Drone2() {
    _classCallCheck(this, Drone2);

    return _possibleConstructorReturn(this, (Drone2.__proto__ || Object.getPrototypeOf(Drone2)).apply(this, arguments));
  }

  _createClass(Drone2, [{
    key: "getAnimationState",
    value: function getAnimationState() {
      switch (this.props.direction) {
        case "up":
          this.animState = 3;
          break;
        case "down":
          this.animState = 2;
          break;
        case "left":
          this.animState = 0;
          break;
        case "right":
          this.animState = 1;
          break;
        default:
          this.animState = 1;
          break;
      }
    }
  }, {
    key: "getWrapperStyles",
    value: function getWrapperStyles() {
      this.getAnimationState();
      var targetX = this.props.position.x;
      var targetY = this.props.position.y;
      return {
        position: "absolute",
        transform: "translate(" + targetX + "px, " + targetY + "px)",
        transformOrigin: "left top",
        width: "64px",
        height: "64px"
      };
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { id: "character", style: this.getWrapperStyles() },
        _react2.default.createElement(_Sprite2.default, {
          repeat: true,
          tileWidth: 160,
          tileHeight: 160,
          src: "https://rawgit.com/MKoth/react-game-kit-demos/1d17ea84d5eb15cf2f46de95a49522bd07c21f42/editableSquadGame/static/characters/drone3.png",
          ticksPerFrame: 4,
          state: this.animState,
          scale: 0.5,
          steps: [0, 0, 0, 0]
        })
      );
    }
  }]);

  return Drone2;
}(_react.Component);

exports.default = (0, _mobxReact.observer)(Drone2);