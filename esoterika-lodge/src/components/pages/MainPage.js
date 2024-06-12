import '../assets/css/style.css';
import logo from '../assets/images/EsoterikaSeal.jpg';
import { useState, useEffect } from 'react';

export default function MainPage() {
  const [textState, setTextState] = useState("SEATTLE'S PREMIER ESOTERIC LODGE");

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setTextState((state) =>
        state === "AESTIMATIO SIBI HONOSQUE FRATERNITATI" ? "SEATTLE'S PREMIER ESOTERIC LODGE" : "AESTIMATIO SIBI HONOSQUE FRATERNITATI"
      );
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timeoutId);
  }, []);

  return (
    <div className="Home">
      <nav>
        {/* Add navigation content here */}
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="Esoterika">
          ESOTERIKA LODGE
        </h1>
        <h2 className="phrase1">
          {textState}
        </h2>
      </header>
    </div>
  );
}
