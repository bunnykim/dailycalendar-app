import React, { useState, useEffect } from "react";
import "./App.css";
import { CurrentDate } from "./CurrentDate.js";
import { GetCalendar } from "./GetCalendar.js";

function App() {
  const [quote, setQuote] = useState("");

  const getNewQuote = () => {
    fetch("https://programming-quotes-api.herokuapp.com/quotes/random/lang/en")
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setQuote(json.en + " -" + json.author);
      });
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <div className="App">
      <CurrentDate />
      <div className="appContents" id="quoteStyle">
        {quote}
      </div>
      <GetCalendar />
    </div>
  );
}

export default App;
