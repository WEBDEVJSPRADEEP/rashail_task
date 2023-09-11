import React, { useState } from "react";
import "../Style/Sidebar.css";
import { AiFillSetting, AiOutlineAccountBook } from "react-icons/ai";
import { BiWallet } from "react-icons/bi";
import {
  MdOutlineSpaceDashboard,
  MdOutlineManageAccounts,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { GrNotification } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState("Orders");

  const handleItemClick = (item) => {
    setSelectedItem(item);
    if (item === "Enquiry") {
      navigate("/Enquiry");
    }
    if (item === "Orders") {
      navigate("/");
    }
    if (item === "Product") {
      navigate("/Product");
    }
  };

  return (
    <>
      <div className="sidebar_main">
        <div className="side_data">
          <div className="side_div1">
            <img
              style={{ height: "62px", marginLeft: "10px" }}
              src={require("./logo.png")}
              alt="img"
            />
            <span className="online_sine"></span>
          </div>
          <div className="side_div2">
            <div className="img_data">
              <span>
                <img
                  className="img"
                  src={require("./Rectangle 7.jpg")}
                  alt="#"
                />
              </span>
              <span>
                <span className="Admin_name">Admin Name</span>
                <p className="Super_admin">Super Admin</p>
              </span>
            </div>
          </div>
          <div className="side_div3">
            {/* Dashboard */}
            <div
              className={`nav-item ${
                selectedItem === "Dashboard" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Dashboard")}
            >
              <span className="left-icon">
                <MdOutlineSpaceDashboard />
              </span>
              <span className="text">Dashboard</span>
              <span className="right-icon">
                <MdOutlineKeyboardArrowRight />
              </span>
            </div>

            {/* Orders */}
            <div
              className={`nav-item ${
                selectedItem === "Orders" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Orders")}
            >
              <span className="left-icon">
                <BiWallet />
              </span>
              <span className="text">Orders</span>
              <span className="right-icon">
                <MdOutlineKeyboardArrowRight />
              </span>
            </div>
            <div
              className={`nav-item ${
                selectedItem === "Enquiry" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Enquiry")}
            >
              <span className="left-icon">
                <MdOutlineManageAccounts />
              </span>
              <span className="text">Enquiry</span>
              <span className="right-icon">
                <MdOutlineKeyboardArrowRight />
              </span>
            </div>
            <div
              className={`nav-item ${
                selectedItem === "Accounts" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Accounts")}
            >
              <span className="left-icon">
                <AiOutlineAccountBook />
              </span>
              <span className="text">Accounts</span>
              <span className="right-icon">
                <MdOutlineKeyboardArrowRight />
              </span>
            </div>
            <div
              className={`nav-item ${
                selectedItem === "Notification" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Notification")}
            >
              <span className="left-icon">
                <GrNotification />
              </span>
              <span className="text">Notification</span>
              <span className="right-icon">
                <MdOutlineKeyboardArrowRight />
              </span>
            </div>
            <div className="dropdown">
              <div
                className={`nav-item ${
                  selectedItem === "Settings" ? "active" : ""
                }`}
                onClick={() => handleItemClick("Settings")}
              >
                <span className="left-icon">
                  <AiFillSetting />
                </span>
                <span className="text">Settings</span>
                <span className="right-icon">
                  <MdOutlineKeyboardArrowRight />
                </span>
              </div>
              {/* <button className="dropbtn">Left</button> */}
              <div className="dropdown-content">
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
              </div>
            </div>
            <span className="f_text">@ Devloped at Rashail Infotech</span>
          </div>
        </div>
      </div>
    </>
  );
}
