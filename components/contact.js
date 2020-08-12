import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
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