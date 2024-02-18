// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LangProvider } from "./langContext.jsx";
import App from "./App.jsx";
import "./index.css";
// import 'react-international-phone/style.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <LangProvider>
      <App />
    </LangProvider>
  </BrowserRouter>
  // </React.StrictMode>
);

// import React from 'react'
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App.jsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter basename={import.meta.env.BASE_URL}>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
