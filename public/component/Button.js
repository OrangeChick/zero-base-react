function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { Icon } from './Icon.js';
export var ButtonComponent = function ButtonComponent(props) {
  var styles = {
    color: '#525577',
    fontSize: '12px',
    fontWeight: 'bold',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    width: '89px',
    height: '30px',
    background: '#FFFFFF',
    border: 'none',
    boxShadow: '0px 4px 4px #DBDDF0',
    borderRadius: '30px',
    padding: '9px 12px',
    marginBottom: '20px',
    cursor: 'pointer'
  };
  var disabledColor = {
    color: '#ADAEB6'
  };
  return React.createElement("button", {
    style: props.type === 'disabled' ? _extends({}, styles, disabledColor) : styles
  }, props.children, React.createElement(Icon, {
    type: props.type
  }));
};
//# sourceMappingURL=Button.js.map