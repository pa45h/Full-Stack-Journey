import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Hello from "./components/First.jsx";
import React from "react";

const myElement = (
  <a href="https://react.dev/" target="_blank">
    react.org (custom element)
  </a>
);

function funcElement() {
  return (
    <div>
      <h3>Custom element using function</h3>
    </div>
  );
}

const anotherChild = " (custom react element)";
const customReactElement = React.createElement(
  "a",
  { href: "https://react.dev/", target: "_blank" },
  "react.org",
  anotherChild
);


createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Hello />
    {myElement}
    {funcElement()}
    {customReactElement}
  </>
);
