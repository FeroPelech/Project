import ReactDOM from "react-dom/client";
import React from "react";
import EventComponent from "./events/EventComponent";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <EventComponent />
  </React.StrictMode>
);
