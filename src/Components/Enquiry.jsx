import React from "react";
import "../Style/Enquiry.css";
import { Search } from "react-bootstrap-icons";
import { BiChevronDown } from "react-icons/bi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { list_2 } from "./Data";
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
                  <h2>Enquiry</h2>
                  <p className="date">All Orders Details Available Here.</p>
                </div>
                <span className="tabs">
                  <ul>
                    <span>All</span>
                    <span>Requested</span>
                    <span>Ongoing</span>
                    <span>Closed</span>
                    <span>Pending</span>
                  </ul>
                </span>
              </div>
              <div className="first_nav">
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
                  <span className="calender_1">
                    <div>
                      <span>-Form Date-</span> <input type="date" />
                    </div>
                  </span>

                  <span className="calender_2">
                    <div>
                      <span>-To Date-</span> <input type="date" />
                    </div>
                  </span>
                </div>
              </div>
              <div className="table_back">
                <div className="table_header">
                  <ul className="t_head">
                    <li>S.No</li>
                    <li>Date</li>
                    <li>Name</li>
                    <li>Contact No.</li>
                    <li>Subject</li>
                    <li>Status</li>
                    <li>Action</li>
                  </ul>
                  <hr />
                  {list_2.map((item) => {
                    return (
                      <>
                        <ul className="t_data">
                          <li>{item.s_no}</li>
                          <li>{item.date}</li>
                          <li>{item.name}</li>
                          <li>
                            {item.number}
                            <span style={{ color: "blue", cursor: "pointer" }}>
                              {item.address}{" "}
                            </span>
                          </li>
                          <li>{item.subject}</li>
                          <li
                            className={
                              item.status === "Delivered"
                                ? "status_g"
                                : "status_r"
                            }
                          >
                            {item.status}
                          </li>
                          <li>
                            {item.action} <MdOutlineKeyboardDoubleArrowRight />
                          </li>{" "}
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
                  <span className="arrow">&lt;</span> Page 01
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
