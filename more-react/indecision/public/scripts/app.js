"use strict";

var app = {
  title: "Indecision App",
  subtitle: "What do you want to do?",
  options: ["Learn React More", "Practice with the app more"]
};

var onSubmitHandler = function onSubmitHandler(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }

  renderCounterApp();
};

var onRemoveHandler = function onRemoveHandler() {
  app.options = [];
  renderCounterApp();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  console.log(option);
};

var appRoot = document.getElementById("root");

var renderCounterApp = function renderCounterApp() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", null, app.title), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("button", {
    disabled: app.options.length === 0,
    onClick: onMakeDecision
  }, "What should I do?"), app.options.length > 0 ? /*#__PURE__*/React.createElement("ol", null, app.options.map(function (op) {
    return /*#__PURE__*/React.createElement("li", {
      key: op
    }, op);
  })) : /*#__PURE__*/React.createElement("p", null, "No data found"), /*#__PURE__*/React.createElement("form", {
    onSubmit: onSubmitHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option"
  }), /*#__PURE__*/React.createElement("button", null, "Add Option")), /*#__PURE__*/React.createElement("button", {
    onClick: onRemoveHandler
  }, "Remove All")));
  ReactDOM.render(template, appRoot);
};

renderCounterApp();
