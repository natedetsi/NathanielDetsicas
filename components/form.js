import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";

function Form(props) {
  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      toggle = _useState2[0],
      setToggle = _useState2[1];

  var _useState3 = useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      textError = _useState4[0],
      setTextError = _useState4[1];

  var _useState5 = useState(""),
      _useState6 = _slicedToArray(_useState5, 2),
      errorState = _useState6[0],
      setErrorState = _useState6[1]; //state of form inputs


  var _useState7 = useState({
    email: "",
    company: "",
    message: ""
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      mail = _useState8[0],
      setMail = _useState8[1]; //handles the form input changes


  function handleChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    setMail(function (prevMail) {
      return _objectSpread(_objectSpread({}, prevMail), {}, _defineProperty({}, name, value));
    });
  }

  var highLightInputEmail = useSpring({
    border: toggle ? '1px solid #5f5f5f' : '2px  solid rgba(255,51,51,0.9)'
  });
  var highLightTextArea = useSpring({
    border: textError ? '1px solid #5f5f5f' : '2px  solid rgba(255,51,51,0.9)'
  }); //sends form to backend route if email is filled out

  function sendForm(e) {
    e.preventDefault();

    if (mail.email.indexOf('@' && '.') > -1 && mail.message.length > 40) {
      // axios.post('http://localhost:5000/send', {mail});
      window.location.href = "mailto:nathaniel.detsicas@outlook.com" + "?subject=".concat(mail.company) + "&body=".concat(mail.message);
      setMail({
        email: "",
        company: "",
        message: ""
      });
      props.onClicked();
      setErrorState("");
    } else if (mail.message.length < 40) {
      setErrorState("Message Must be atleast 40 charaters");

      if (mail.email.indexOf('@' && '.') === -1) {
        setToggle(false);
        setTextError(false);
        setErrorState("Email must contain @ and ." + " " + "Message Must be atleast 40 charaters");
      }
    } else {
      setToggle(false);
      setErrorState("Email must contain @ and .");
    }
  }

  return /*#__PURE__*/React.createElement(a.div, {
    className: "form",
    style: props.style
  }, /*#__PURE__*/React.createElement("form", {
    className: "contact-me-form"
  }, /*#__PURE__*/React.createElement(a.h6, {
    className: "error"
  }, errorState), /*#__PURE__*/React.createElement(a.input, {
    style: highLightInputEmail,
    name: "email",
    className: "email",
    type: "email",
    placeholder: "Email",
    onChange: handleChange,
    onClick: handleChange,
    value: mail.email,
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    name: "company",
    className: "company-name",
    type: "text",
    placeholder: "Company Name",
    onChange: handleChange,
    value: mail.company,
    required: true
  }), /*#__PURE__*/React.createElement(a.textarea, {
    style: highLightTextArea,
    className: "msg",
    name: "message",
    cols: "3",
    rows: "10",
    placeholder: "Type your message...",
    required: true,
    onChange: handleChange,
    value: mail.message
  }), /*#__PURE__*/React.createElement("input", {
    className: "sub-btn",
    type: "submit",
    onClick: sendForm
  })));
}

export default Form;