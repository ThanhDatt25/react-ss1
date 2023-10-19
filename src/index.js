import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
import "./styles/global.scss";

// Import Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import reduxReducer from "./store/reducer/reduxReducer";

// Để tạo 1 store phải dùng hàm createStore()
const reduxStore = createStore(
  reduxReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); // Nạp dữ liệu từ file reduxReducer

ReactDOM.render(
  <React.StrictMode>
    {/* Provider - Khiến ứng dụng <App /> chạy cùng với redux */}
    {/* Store - Nạp dữ liệu cho redux từ file Reducer */}
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
