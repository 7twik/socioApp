import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
// import {createRoot} from 'react-dom/client';
// import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <div className="bgro">
      <App />
      </div>
    </AuthProvider>
  </React.StrictMode>
);

