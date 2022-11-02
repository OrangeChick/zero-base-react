import { ButtonComponent } from './component/Button.js';

const container = document.getElementById('root');
const ReactDomRoot = ReactDOM.createRoot(container);

ReactDomRoot.render(
  <React.StrictMode>
    <ButtonComponent type="upload">업로드</ButtonComponent>
    <ButtonComponent type="uploading">업로드 중</ButtonComponent>
    <ButtonComponent type="complete">완료</ButtonComponent>
    <ButtonComponent type="failed">실패</ButtonComponent>
    <ButtonComponent type="disabled">업로드</ButtonComponent>
  </React.StrictMode>
);
