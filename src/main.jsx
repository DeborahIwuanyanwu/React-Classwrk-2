import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import Form from "./Javscript/Form.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Form/> */}
  </StrictMode>
);
