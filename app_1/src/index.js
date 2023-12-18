import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
// import "./styles.css";

import App from "./App";
import Menubar from "./Menubar";


const photo = createRoot(document.getElementById("photo"));
photo.render(
  <StrictMode>
    <App  />
  </StrictMode>
);

const menu = createRoot(document.getElementById("menu"));
menu.render(
  <StrictMode>
    <Menubar />
  </StrictMode>
);