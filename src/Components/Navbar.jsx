import React from "react";
import "../Style/Navbar.css";
import { BiChevronDown } from "react-icons/bi";
import { Search } from "react-bootstrap-icons";

export default function Navbar() {
  let currDate = new Date().toLocaleDateString();
  let currTime = new Date().toLocaleTimeString();
  return (
    <div className="navbar">
      <div className="navbar_data">
        <div className="search1">
          <input
            type="search"
            className="search_input"
            placeholder="Search for anything here..."
          />
          <span className="icons">
            <Search />
          </span>
        </div>
        <span style={{ cursor: "pointer" }}>
          <img
            className="translate_img"
            src={require("./translate.png")}
            alt="#"
          />{" "}
          <span style={{ fontSize: "13px" }}> English (US)</span>{" "}
          <BiChevronDown />
        </span>
        <span className="date_time">
          <span className="yellow_circle"></span>{" "}
          <span style={{ fontFamily: "sans-serif" }}>Good Morning</span>
          <br />
          <span className="date">{currDate}</span>{" "}
          <span className="date">{currTime}</span>
        </span>
      </div>
    </div>
  );
}
