"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Indecision = /*#__PURE__*/function (_React$Component) {
  _inherits(Indecision, _React$Component);

  var _super = _createSuper(Indecision);

  function Indecision() {
    _classCallCheck(this, Indecision);

    return _super.apply(this, arguments);
  }

  _createClass(Indecision, [{
    key: "render",
    value: function render() {
      var title = "Indecision";
      var subtitle = "What do you want to do?";
      var options = ["Learn React More", "Practice with the app more"];
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        title: title
      }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(ActionButton, {
        label: subtitle,
        options: options
      }), /*#__PURE__*/React.createElement(Options, {
        options: options
      }), /*#__PURE__*/React.createElement(Form, null)));
    }
  }]);

  return Indecision;
}(React.Component);

var ActionButton = /*#__PURE__*/function (_React$Component2) {
  _inherits(ActionButton, _React$Component2);

  var _super2 = _createSuper(ActionButton);

  function ActionButton() {
    _classCallCheck(this, ActionButton);

    return _super2.apply(this, arguments);
  }

  _createClass(ActionButton, [{
    key: "onMakeDecision",
    value: function onMakeDecision() {}
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
        disabled: this.props.options.length === 0,
        onClick: this.onMakeDecision
      }, this.props.label));
    }
  }]);

  return ActionButton;
}(React.Component);

var Form = /*#__PURE__*/function (_React$Component3) {
  _inherits(Form, _React$Component3);

  var _super3 = _createSuper(Form);

  function Form() {
    _classCallCheck(this, Form);

    return _super3.apply(this, arguments);
  }

  _createClass(Form, [{
    key: "onSubmitHandler",
    value: function onSubmitHandler(e) {
      e.preventDefault();
      var option = e.target.elements.option.value;

      if (option) {
        // app.options.push(option);
        e.target.elements.option.value = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        onSubmit: this.onSubmitHandler
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "option"
      }), /*#__PURE__*/React.createElement("button", null, "Add Option"));
    }
  }]);

  return Form;
}(React.Component);

var Options = /*#__PURE__*/function (_React$Component4) {
  _inherits(Options, _React$Component4);

  var _super4 = _createSuper(Options);

  function Options(props) {
    var _this;

    _classCallCheck(this, Options);

    _this = _super4.call(this, props);
    _this.onRemoveHandler = _this.onRemoveHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Options, [{
    key: "onRemoveHandler",
    value: function onRemoveHandler() {
      console.log("Onremove: ", this.props);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.props.options.length > 0 ? /*#__PURE__*/React.createElement("ol", null, this.props.options.map(function (op) {
        return /*#__PURE__*/React.createElement("li", {
          key: op
        }, op);
      })) : /*#__PURE__*/React.createElement("p", null, "No data found"), /*#__PURE__*/React.createElement("button", {
        onClick: this.onRemoveHandler
      }, "Remove All"));
    }
  }]);

  return Options;
}(React.Component);

var Header = /*#__PURE__*/function (_React$Component5) {
  _inherits(Header, _React$Component5);

  var _super5 = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super5.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("header", null, this.props.title);
    }
  }]);

  return Header;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(Indecision, null), document.getElementById("root"));
