import React from "react";
import "./App.css";

export const [quote, setQuote] = useState("");

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
