import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // React.StrictMode는 기본생성 태그로 render시 자손까지 검사하는 역할을 한다.
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
