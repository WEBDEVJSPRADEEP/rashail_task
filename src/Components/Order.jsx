import React from "react";
import "../Style/Order.css";
import { Search } from "react-bootstrap-icons";
import { BiChevronDown } from "react-icons/bi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { list } from "./Data";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
export default function Order() {
  return (
    <>
      <div className="main_class">
        <Sidebar />
        <div className="min_class">
          <Navbar />
          <div className="order_main">
            <div className="max_width">
              <div className="first_nav">
                <div className="header">
                  <h2>Orders</h2>
                  <p className="date">All Orders Details Available Here.</p>
                </div>
                <span className="tabs">
                  <ul>
                    <span>All</span>
                    <span>Requested</span>
                    <span>Processing</span>
                    <span>Dispatched</span>
                    <span>Delivered</span>
                    <span>Cancelled</span>
                  </ul>
                </span>
              </div>
              {/* <div className="first_nav"> */}
              <div className="first_nav1">
                <div className="search_div">
                  <input
                    type="search"
                    className="search_input"
                    placeholder="Search for Orders..."
                  />
                  <span className="icon">
                    <Search />
                  </span>
                </div>
                <span className="calender">
                  {" "}
                  <span>-Date-</span> <input type="date" />
                </span>
              </div>
              {/* </div> */}
              <div className="table_back">
                <div className="table_header">
                  <ul className="t_head">
                    <li>S.No</li>
                    <li>Date</li>
                    <li>Name</li>
                    <li>Zip/Address</li>
                    <li>Quantity</li>
                    <li>Amount</li>
                    <li>Payment Status</li>
                    <li>Delivery Status</li>
                    <li>Action</li>
                  </ul>
                  <hr />
                  {list.map((item) => {
                    return (
                      <>
                        <ul className="t_data">
                          <li>{item.s_no}</li>
                          <li>{item.date}</li>
                          <li>{item.name}</li>
                          <li>
                            {item.zip} /{" "}
                            <span style={{ color: "blue", cursor: "pointer" }}>
                              {item.address}{" "}
                            </span>
                          </li>
                          <li>{item.quantity}</li>
                          <li>{item.amount}/-</li>
                          <li>{item.payment_status}</li>
                          <li
                            className={
                              item.delivery_status === "Delivered"
                                ? "status_g "
                                : "status_r "
                            }
                          >
                            {item.delivery_status}
                          </li>
                          <li>
                            {item.action} <MdOutlineKeyboardDoubleArrowRight />
                          </li>
                        </ul>
                        <hr />
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="bottom">
                <span>Showing 1 - 8 results of 298</span>
                <span>
                  <span className="arrow">&lt;</span> <span> Page 01</span>
                  <BiChevronDown />
                  <span className="arrow">&gt;</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
