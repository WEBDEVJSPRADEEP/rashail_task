import React from "react";
import "../Style/Product.css";
import "../Style/Order.css";
import { Search } from "react-bootstrap-icons";
import { BiChevronDown } from "react-icons/bi";
import { list_3 } from "./Data";
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
                  <h2>Product</h2>
                  <p className="date">All Orders Details Available Here.</p>
                </div>
                <span className="tabs">
                  <ul>
                    <span>All</span>
                    <span>In Stock</span>
                    <span>Out Of Stock</span>
                  </ul>
                </span>
                <div className="Add_btn">
                  <span>+ Add Product</span>
                </div>
              </div>
              <div className="Product_search_btn">
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
                <span className="category_div">
                  <select className="category">
                    <option>-Category-</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </span>
              </div>
              <div className="table_back">
                <div className="table_header">
                  <ul className="t_head">
                    <li>Shn No</li>
                    <li>Product</li>
                    <li>Category</li>
                    <li>Availability</li>
                    <li>Stock</li>
                    <li>MRP</li>
                    <li>Discount</li>
                    <li>Price</li>
                    <li>Edit</li>
                  </ul>
                  <hr />
                  {list_3.map((item) => {
                    return (
                      <>
                        <ul className="t_data">
                          <li>{item.shn}</li>
                          <li>{item.Product}</li>
                          <li>{item.category}</li>
                          <li
                            className={
                              item.availability === "In Stock"
                                ? "status_g"
                                : "status_r"
                            }
                          >
                            {item.availability}
                          </li>
                          <li>{item.stock}</li>
                          <li>{item.mrp}</li>
                          <li>{item.discount}%</li>
                          <li>{item.price}</li>
                          <li style={{ color: "blue" }}>{item.edit}</li>
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
