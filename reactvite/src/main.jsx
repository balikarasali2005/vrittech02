import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from "./store/store.jsx";
import PersistGate from'redux-persist/integration/react';
import { persistor,store } from "./store/store.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);