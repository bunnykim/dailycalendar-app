import React from "react";
import "./App.css";
import moment from "moment";

export const CurrentDate = () => {
  var date = moment().format("MMM.D.YYYY");

  return (
    <div className="appContents">
      <div id="dateStyle">{date}</div>
    </div>
  );
};
