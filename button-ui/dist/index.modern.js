import React from 'react';

var styles = {"container":"_1Lxpd","center-content":"_n4jsd","btn":"_1Pz2d","primary":"_3ljpl","default":"_3UK6o","dashed":"_27xYC","text":"_5bXm4","link":"_71S8l"};

var Button = function Button(_ref) {
  var type = _ref.type,
    text = _ref.text;
  return /*#__PURE__*/React.createElement("button", {
    className: styles.btn + " " + styles[type]
  }, text);
};

export { Button };
//# sourceMappingURL=index.modern.js.map
