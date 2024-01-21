import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <form className="search-form" id="search-form">
        <input
          type="search"
          placeholder="Enter a city..."
          required
          className="search-form-input"
        />
        <input type="submit" value="Search" className="search-form-button" />
      </form>
    </div>
  );
}
