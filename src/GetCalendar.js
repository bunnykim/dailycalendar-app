import React from "react";
import moment from "moment";
import dotenv from "dotenv";

dotenv.config();

export const GetCalendar = () => {
  var year = moment().format("YYYY");

  console.log(process.env.REACT_APP_CALENDARIFIC_URL)
  // var finnishHolidays = 
  fetch(
    "https://calendarific.com/api/v2/holidays?api_key=" + process.env.REACT_APP_CALENDARIFIC_URL + "&country=FI&year=" + year
  )
    .then(res => res.json())
    .then(json => {

      if (json.response.holidays.iso == moment().format("Y-M-D")){
        console.log("It's a holiday!");
        document.getElementsByTagName("BODY")[0].classList.add('rubyRed');

      }else {
        console.log("It's not a holiday.");
        document.getElementsByTagName("BODY")[0].classList.add('powderBlue');
      }
    }
    );

    // console.log (finnishHolidays);

  function isWeekend() {
    var day = moment().format("d");

    if (day === "0" || day === "6") {
      console.log("it's weekend!");
      document.getElementsByTagName("BODY")[0].style.backgroundColor =
        "#a31621";
    } else if (day === "5") {
      console.log("it's friday");
      document.getElementsByTagName("BODY")[0].style.backgroundImage =
        "url(https://media.giphy.com/media/TxVVB6PfWMjE4/source.gif";
    }
  }

  isWeekend();

  return (
    <div>
      {/* <button>get calendar</button> */}
      {/* <p>{isWeekend}</p> */}
    </div>
  );
};
