import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import {
  Facebook,
  Instagram,
  Linkedin,
  Whatsapp,
  Youtube,
} from "react-bootstrap-icons";
import Contact from "./Contact";

export default function Home() {
  const [data, setData] = useState({});
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://dhruvj02.pythonanywhere.com/api/product/5394efab-9533-415b-a9204147d7d7893e",
        {
          headers: {
            Authorization: "Token 543c793bba983edb993f167c8f01586cc4fbd49b",
          },
        }
      )
      .then(function (response) {
        // console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://dhruvj02.pythonanywhere.com/api/store/7d9f6272-781e-4a33-9cc1-020167be40b3/product",
        {
          headers: {
            Authorization: "Token 543c793bba983edb993f167c8f01586cc4fbd49b",
          },
        }
      )
      .then(function (response) {
        // console.log(response.data);
        setProduct(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleCart = (item) => {
    setCart(item);
    // console.log(item);
    window.localStorage.setItem("cart", JSON.stringify(item));
    alert(
      "item successfully added to cart" +
        "                                                                                   " +
        "please go to cart section"
    );
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="row_third">
            <div className="mobile">
              <img
                src={
                  "https://dhruvj02.pythonanywhere.com/media/images/WhatsApp_Image_2023-06-28_at_4.48.37_PM_lQx6u63.jpeg"
                }
                alt=""
                style={{
                  height: "300px",
                  width: "400px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="text">
              <h5>
                <b>{data?.product_name}</b>
              </h5>
              <span style={{ color: "#1273b8" }}>Available</span>
              <br />
              <span>{data?.product_discount} % OFF</span>
              <br />
              <span>
                <span style={{ textDecoration: "line-through" }}>
                  Rs.{data?.product_price}
                </span>{" "}
                <span style={{ color: "#1273b8" }}>Rs.359</span>
              </span>
              <br />
              <span> {data?.extra_data} </span>
              <br />
              <br />
            </div>
          </div>
          <div>
            <button
              className="a_btn"
              size={cart.length}
              onClick={() => handleCart(data)}
            >
              Add To Cart
            </button>{" "}
            <button className="a_btn">Buy Now</button>
          </div>
          <div className="row_four">
            <div className="left2">
              <h6>
                <b>Technical Details </b>
              </h6>
              <span>Phase</span>
              <span>
                {data?.product_downloads?.technical_details[0]?.Phase}
              </span>
              <br />
              <span>Power Require</span>
              <span>415v</span>
            </div>
            <div className="right2">
              <h6>
                <b>Additional Information</b>
              </h6>
              <span>Power Consumption</span>
              <span>2 W</span>
              <br />
              <span>Moter Power</span>
              <span>up to 7 hp</span>
            </div>
          </div>

          {/* card Details */}

          <div className="row_five">
            <h3 style={{ color: "#1273b8" }}>OTHER PRODUCT DETAILS</h3>
            <p>* 3 Months Domestic Warranty</p>
            <p>* No Return Applicable</p>
            <br />
            <br />
            <h3 style={{ color: "#1273b8" }}>IMPORTANT INFORMATION </h3>
            <p>
              <b> Safety Information:</b>
            </p>
            <p>Call +91 8349503619 | +91 7725858277 before purchase</p>
            <br />
            <p>
              <b> Legal Disclaimer:</b>
            </p>
            <p>
              Please call +91 8349503619 | +91 7725858277 for installation and
              compatibility check.
            </p>
            <br />
            <h3 style={{ color: "#1273b8" }}>PRODUCT VIDEO</h3>
            <div style={{ width: "100%", height: "400px" }}>
              <iframe
                style={{ width: "85%", height: "400px" }}
                src="https://www.youtube.com/embed/ZKbDOEWoXf0?autoplay=1&amp;mute=1"
              ></iframe>
              <br />
              <br />

              <h4
                style={{
                  textAlign: "center",
                  color: "#1273b8",
                  fontWeight: "bold",
                }}
              >
                REVIEWS
              </h4>
              <br />
              <div className="main_card">
                <div className="data">
                  <img
                    style={{
                      height: "200px",
                      width: "260px",
                      borderRadius: "10px",
                    }}
                    src="https://dhruvj02.pythonanywhere.com/media/images/mq1_1_yXgqhtk.jpg"
                    alt=""
                  />
                  <span>GSM Motor Controller</span>
                  <br />

                  <span>Indore (mp)</span>
                </div>
                <div className="data">
                  <img
                    style={{
                      height: "200px",
                      width: "260px",
                      borderRadius: "10px",
                    }}
                    src="https://dhruvj02.pythonanywhere.com/media/images/mq2.jpg"
                    alt=""
                  />
                  <span>GSM Motor Controller</span>
                  <br />
                  <span>Bhopal (mp)</span>
                </div>
                <div className="data">
                  <img
                    style={{
                      height: "200px",
                      width: "260px",
                      borderRadius: "10px",
                    }}
                    src="https://dhruvj02.pythonanywhere.com/media/images/mq3.jpg"
                    alt=""
                  />
                  <span>GSM Motor Controller</span>
                  <br />
                  <span>Dewas (mp)</span>
                </div>
                <div className="data">
                  <img
                    style={{
                      height: "200px",
                      width: "260px",
                      borderRadius: "10px",
                    }}
                    src="https://dhruvj02.pythonanywhere.com/media/images/mq1.jpg"
                    alt=""
                  />
                  <span>GSM Motor Controller</span>
                  <br />
                  <span>Ujjain (mp)</span>
                </div>
              </div>
              <br />
              <br />
              <br />
              {/* product data */}
              <div className="back_ground">
                <br />
                <h4
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  SIMILAR PRODUCTS
                </h4>
                <br />
                <div className="main">
                  <div className="card_data">
                    {product?.slice((4 * 4) / 10).map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="card_d">
                            <img
                              src={item?.product_images[0].image}
                              alt=""
                              style={{
                                height: "150px",
                                width: "200px",
                                borderRadius: "20px",
                              }}
                            />
                            <span>{item?.category_name}</span>
                            <br />
                            <span>Available</span>
                            <br />

                            <span style={{ textDecoration: "line-through" }}>
                              Rs.{item?.product_price}
                            </span>
                            <br />
                            <span style={{ color: "#1273b8" }}>Rs.359</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <h4
                  style={{
                    textAlign: "center",
                    color: "#1273b8",
                    fontWeight: "bold",
                  }}
                >
                  CONTACT US
                </h4>
                <p
                  style={{
                    textAlign: "center",
                    marginRight: "100px",
                  }}
                >
                  Let our years of expertise help you get back on track.
                </p>
                <br />
                <Contact />
                <div className="Footer">
                  <ul>
                    <li>
                      <img
                        src="https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg?w=2000"
                        alt="#"
                        style={{
                          height: "50px",
                          width: "50px",
                          marginTop: "10px",
                        }}
                      />
                      <span className="logo1">RASHAIL</span>
                      <br />
                      <span className="logo2">AUTOMETION</span>
                    </li>
                    <li>
                      About Us
                      <br />
                      Products
                    </li>
                    <li>
                      Terms & Conditions
                      <br />
                      Privacy Policy
                    </li>
                    <li>
                      <Facebook /> <Instagram /> <Youtube /> <Whatsapp />{" "}
                      <Linkedin />
                    </li>
                  </ul>
                  <p style={{ textAlign: "center" }}>
                    Rashail Automation and R-Tech are Product Brands of Rashail
                    Tech Labs Private Limited
                  </p>
                </div>
                <div className="footer2">
                  <span>© Copyright 2023 - Rashail Tech Labs Pvt. Ltd.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
