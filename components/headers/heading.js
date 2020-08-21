import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React, { useState } from "react";
import "../../css/styles.css";
import "../../css/header.css";
import { useTransition, animated as a } from "react-spring";

function Heading() {
  var _useState = useState([{
    key: 1,
    text: "I'm "
  }, {
    key: 2,
    text: "Nathaniel "
  }, {
    key: 3,
    text: "Detsicas"
  }]),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var _useState3 = useState([{
    key: 1,
    name: '(det-see-cas)'
  }]),
      _useState4 = _slicedToArray(_useState3, 2),
      names = _useState4[0],
      setNames = _useState4[1];

  var _useState5 = useState([{
    key: 0,
    text: " a programmer"
  }, {
    key: 2,
    text: " & "
  }, {
    key: 3,
    text: 'designer'
  }]),
      _useState6 = _slicedToArray(_useState5, 2),
      subHeadings = _useState6[0],
      setSub = _useState6[1];

  var transitions = useTransition(items, function (items) {
    return items.key;
  }, {
    from: {
      opacity: 0,
      paddingLeft: -20
    },
    enter: {
      opacity: 1,
      paddingLeft: 0
    },
    config: {
      mass: 2,
      tension: 100,
      friction: 75
    },
    trail: 550
  });
  var transitionsTwo = useTransition(names, function (names) {
    return names.key;
  }, {
    from: {
      opacity: 0,
      paddingLeft: -20
    },
    enter: {
      opacity: 1,
      padding: 0
    },
    config: {
      mass: 5,
      tension: 50,
      friction: 75
    }
  });
  var transitionThree = useTransition(subHeadings, function (subHeadings) {
    return subHeadings.key;
  }, {
    from: {
      opacity: 0,
      transform: "translate(-100)"
    },
    enter: {
      opacity: 1,
      transform: "translate(0)"
    },
    config: {
      mass: 5,
      tension: 50,
      friction: 75
    }
  });
  return /*#__PURE__*/React.createElement(a.div, {
    className: "heading"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title-heading"
  }, transitions.map(function (_ref) {
    var item = _ref.item,
        key = _ref.key,
        props = _ref.props;
    return /*#__PURE__*/React.createElement(a.span, {
      className: "title-span",
      key: key,
      style: props
    }, item.text);
  })), /*#__PURE__*/React.createElement("h4", {
    className: "name"
  }, transitionsTwo.map(function (_ref2) {
    var item = _ref2.item,
        key = _ref2.key,
        props = _ref2.props;
    return /*#__PURE__*/React.createElement(a.span, {
      class: "name-title",
      key: key,
      style: props
    }, item.name);
  })), /*#__PURE__*/React.createElement("h2", {
    className: " subtitle-1"
  }, transitionThree.map(function (_ref3) {
    var item = _ref3.item,
        key = _ref3.key,
        props = _ref3.props;
    return /*#__PURE__*/React.createElement(a.span, {
      className: "title-span",
      key: key,
      style: props
    }, item.text);
  })));
}

export default Heading;