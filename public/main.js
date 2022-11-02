import { ButtonComponent } from './component/Button.js';
var container = document.getElementById('root');
var ReactDomRoot = ReactDOM.createRoot(container);
ReactDomRoot.render(React.createElement(React.StrictMode, null, React.createElement(ButtonComponent, {
  type: "upload"
}, "\uC5C5\uB85C\uB4DC"), React.createElement(ButtonComponent, {
  type: "uploading"
}, "\uC5C5\uB85C\uB4DC \uC911"), React.createElement(ButtonComponent, {
  type: "complete"
}, "\uC644\uB8CC"), React.createElement(ButtonComponent, {
  type: "failed"
}, "\uC2E4\uD328"), React.createElement(ButtonComponent, {
  type: "disabled"
}, "\uC5C5\uB85C\uB4DC")));
//# sourceMappingURL=main.js.map