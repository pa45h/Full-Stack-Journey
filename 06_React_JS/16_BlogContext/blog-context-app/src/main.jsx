import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BlogContextProvider } from "./contexts/BlogContext.jsx";

createRoot(document.getElementById("root")).render(
  <BlogContextProvider>
    <App />
  </BlogContextProvider>
);
