import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      This project was coded by{" "}
      <a href="https://github.com/tetianattl" target="_blank" rel="noreferrer">
        Tetiana Tiukhta
      </a>{" "}
      and is open-sourced on{" "}
      <a
        href="https://github.com/tetianattl/weather-app-react"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>{" "}
      and website hosted on{" "}
      <a
        href="https://ttl-weather-app-react.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Netlify
      </a>
    </div>
  );
}
