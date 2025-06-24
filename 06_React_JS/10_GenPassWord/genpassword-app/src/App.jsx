import { useState, useCallback, useEffect, useRef } from "react";
import copySvg from "./assets/copy.svg";

function App() {
  const [length, setLength] = useState(8);
  const [upperCaseInclude, setUpperCaseInclude] = useState(true);
  const [lowerCaseInclude, setLowerCaseInclude] = useState(false);
  const [numbersInclude, setNumbersInclude] = useState(false);
  const [symbolsInclude, setSymbolsInclude] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNM";

    if (lowerCaseInclude) str += "qwertyuiopasdfghjklzxcvbnm";
    if (numbersInclude) str += "1234567890";
    if (symbolsInclude) str += `~!@#$%^&*()_+-=[]{};':"\|,.<>/?`;

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [
    length,
    upperCaseInclude,
    lowerCaseInclude,
    numbersInclude,
    symbolsInclude,
    setPassword,
  ]);

  useEffect(() => {
    passwordGenerator();
  }, [
    length,
    upperCaseInclude,
    lowerCaseInclude,
    numbersInclude,
    symbolsInclude,
    passwordGenerator,
  ]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="GenPassWord_container">
      <h1>GenPassWord</h1>
      <div className="display_container">
        <input
          type="text"
          value={password}
          readOnly
          placeholder="Password"
          data_password_display=""
          ref={passwordRef}
        />

        <button data_copybtn="">
          <img
            src={copySvg}
            alt="copySvg"
            width={30}
            height={30}
            onClick={copyPassword}
          />
        </button>
      </div>

      <div className="input_container">
        <div className="password_length_container">
          <p>Password Length</p>
          <p data_length="">{length}</p>
        </div>
        <input
          data_length_slider=""
          className="length_slider"
          type="range"
          min={1}
          max={20}
          step={1}
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <div className="checkbox_container">
          <div className="check">
            <input
              id="uppercase"
              type="checkbox"
              defaultChecked={upperCaseInclude}
              onChange={() => {
                setUpperCaseInclude((prev) => !prev);
              }}
            />
            <label htmlFor="uppercase">Includes UpperCase Letters</label>
          </div>
          <div className="check">
            <input
              id="lowercase"
              type="checkbox"
              defaultChecked={lowerCaseInclude}
              onChange={() => {
                setLowerCaseInclude((prev) => !prev);
              }}
            />
            <label htmlFor="lowercase">Includes LowerCase Letters</label>
          </div>
          <div className="check">
            <input
              id="numbers"
              type="checkbox"
              defaultChecked={numbersInclude}
              onChange={() => {
                setNumbersInclude((prev) => !prev);
              }}
            />
            <label htmlFor="numbers">Includes Numbers Letters</label>
          </div>
          <div className="check">
            <input
              id="symbols"
              type="checkbox"
              defaultChecked={symbolsInclude}
              onChange={() => {
                setSymbolsInclude((prev) => !prev);
              }}
            />
            <label htmlFor="symbols">Includes Symbols Letters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
