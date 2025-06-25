import Card from "./components/Card";
import { ThemeContext, ThemeProvider } from "./contexts/Theme";
import { useState, useEffect } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="h-screen flex justify-center items-center bg-gray-900">
        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App;
