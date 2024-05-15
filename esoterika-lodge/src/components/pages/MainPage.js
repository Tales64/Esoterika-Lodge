
import '../assets/css/style.css';
import logo from '../assets/images/EsoterikaSeal.jpg';
import { useState} from 'react';


export default function MainPage () {
  const [textState, setTextState] = useState("SEATTLE'S      PREMIER     ESOTERIC    LODGE");

  
    // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
    const timeoutId = setInterval(() => {
      setTextState((state) => (state === "AESTIMATIO SIBI HONOSQUE FRATERNITATI" ? "SEATTLE'S      PREMIER     ESOTERIC    LODGE" : "AESTIMATIO SIBI HONOSQUE FRATERNITATI"));;
    return () => (timeoutId);}, 4000);

    return (
        <div className="Home">
          <nav>

          </nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className='Esoterika'>
            ESOTERIKA LODGE
          </h1>
          
          <h2 className='phrase1'>
            {textState}
          </h2>
          
        </header>
      </div>
    )
}