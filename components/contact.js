function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from "react";
import Form from ".././components/form.jsx";

function Contact(props) {
  //contact me title change on form submit
  var _useState = useState({
    title: 'Get In Touch',
    sub: 'Fill in the below form',
    text: 'I aim to reply within 48 hours'
  }),
      _useState2 = _slicedToArray(_useState, 2),
      contact = _useState2[0],
      setContact = _useState2[1]; //change the contact me title text on form submit for 10seconds then change back


  function open() {
    props.onClicked();
    setContact({
      title: 'Thank you! ',
      sub: "",
      text: "Your information has been submitted"
    });
    setTimeout(function changeBack() {
      setContact({
        title: 'Get In Touch',
        sub: 'Fill in the below form',
        text: 'I aim to reply within 48 hours'
      });
    }, 10000);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "bottom-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-me"
  }, /*#__PURE__*/React.createElement("h2", null, contact.title), /*#__PURE__*/React.createElement("h3", null, contact.sub), /*#__PURE__*/React.createElement("p", null, contact.text), /*#__PURE__*/React.createElement("button", {
    className: "btn-contact",
    href: "in",
    onClick: props.onClicked
  }, "CONTACT ME")), /*#__PURE__*/React.createElement(Form, {
    style: props.style,
    onClicked: open
  }));
}

export default Contact;