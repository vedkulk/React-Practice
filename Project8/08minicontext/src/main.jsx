import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserContextProvider from "./context/UserContextProvider";

createRoot(document.getElementById('root')).render(
  <UserContextProvider>
  <App />
</UserContextProvider>,
)
