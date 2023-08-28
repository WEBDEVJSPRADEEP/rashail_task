import React from "react";
import "../Style/Cart.css";

export default function Cart() {
  let obj = localStorage.getItem("cart");
  let data = JSON.parse(obj);
  console.log(data);
  return (
    <>
      <div className="blank"></div>
      <div className="item_header">
        <ul>
          <li>S NO.</li>
          <li>Image</li>
          <li>Item Name</li>
          <li>Price</li>
          <li>quantity</li>
          <li>Remove</li>
        </ul>
      </div>
      <div className="item_details">
        <ul>
          <li>1</li>
          <li>
            <img
              src={
                "https://dhruvj02.pythonanywhere.com/media/images/WhatsApp_Image_2023-06-28_at_4.48.37_PM_lQx6u63.jpeg"
              }
              alt=""
              style={{
                height: "100px",
                width: "50px",
                objectFit: "contain",
              }}
            />
          </li>
          <li>{data.product_name}</li>
          <li>{data.product_price}</li>
          <li>1</li>
          <li style={{ cursor: "pointer" }}>&times;</li>
        </ul>
      </div>
      <div className="amount">
        <br />
        <p>
          <b>Amount Payable</b>
        </p>
        <ul>
          <li>MRP TOTAL</li>
          <li>Rs. 399</li>
        </ul>
        <ul>
          <li>Additional Discount</li>
          <li>Rs.0.00 </li>
        </ul>
        <ul style={{ color: "#1273b8" }}>
          <li>Total Amount</li>
          <li>Rs.399</li>
        </ul>
        <ul style={{ color: "#1273b8" }}>
          <li>Total Payable</li>
          <li>Rs.399</li>
        </ul>
        <button className="next_btn">Next</button>
      </div>
    </>
  );
}
