import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";

import {
  Facebook,
  Instagram,
  Linkedin,
  Whatsapp,
  Youtube,
} from "react-bootstrap-icons";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="fixed">
            <div className="first_navbar">
              <ul>
                <li className="icons">
                  <Facebook /> <Instagram /> <Linkedin /> <Whatsapp />{" "}
                  <Youtube />
                </li>
                <li>12345678910 | Sales@gmail.com</li>
              </ul>
            </div>
            <div className="row_second_navbar">
              <div className="left">
                <div>
                  <img
                    src="https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg?w=2000"
                    alt="#"
                    style={{ height: "50px", width: "50px", marginTop: "10px" }}
                  />
                </div>
                <div>
                  <span className="logo1">RASHAIL</span>
                  <br />
                  <span className="logo2">AUTOMETION</span>
                </div>
              </div>
              <div className="right">
                <span
                  onClick={() => {
                    navigate("/AboutUs");
                  }}
                >
                  About us
                </span>
                <span
                  onClick={() => {
                    navigate("/Products");
                  }}
                >
                  Products
                </span>

                <span
                  onClick={() => {
                    navigate("/Cart");
                  }}
                >
                  Cart
                </span>
                <span className="contact_btn">Contact us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
