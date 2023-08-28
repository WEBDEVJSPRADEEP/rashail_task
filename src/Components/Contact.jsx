import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Whatsapp,
  Youtube,
  Telephone,
  Mailbox,
  Google,
} from "react-bootstrap-icons";
import "../Style/Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [nameE, setNameE] = useState(false);
  const [email, setEmail] = useState("");
  const [emailE, setEmailE] = useState(false);
  const [number, setNumber] = useState("");
  const [numberE, setNumberE] = useState(false);
  const [message, setMessage] = useState("");
  const [messageE, setMessageE] = useState(false);
  const [subject, setSubject] = useState("");
  const [subjectE, setSubjectE] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setNameE(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailE(false);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
    setNumberE(false);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
    setMessageE(false);
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
    setSubjectE(false);
  };

  const handleSubmit = () => {
    if (name === "") {
      setNameE(true);
    } else if (email === "") {
      setEmailE("please enter email");
    } else if (!email.includes("@gmail.com")) {
      setEmailE("Please enter  valid email");
    } else if (number === "") {
      setNumberE(true);
    } else if (message === "") {
      setMessageE(true);
    } else if (subject === "") {
      setSubjectE(true);
    } else {
      let obj = {
        name: name,
        email: email,
        number: number,
        message: message,
        subject: subject,
      };
      window.localStorage.setItem("data", JSON.stringify(obj));
      alert("data successfully submitted");
      setName("");
      setEmail("");
      setNumber("");
      setMessage("");
      setSubject("");
    }
  };
  return (
    <div>
      <div className="Contact-Form">
        <div className="l_Form">
          <div className="form">
            <label>Full Name</label>
            <br />
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleName}
              placeholder="Enter Your Name Here..."
            />
            <br />
            {nameE ? <span className="error">please enter name</span> : ""}
            <br />
            <label>E-mail</label>
            <br />
            <input
              type="email"
              name=""
              value={email}
              onChange={handleEmail}
              placeholder="User@gmail.com"
            />
            <br />
            {emailE ? <span className="error">{emailE}</span> : ""}
            <br />
            <label>Phone Number</label>
            <br />
            <input
              type="number"
              name="number"
              value={number}
              onChange={handleNumber}
              placeholder="+91 0123456789"
            />
            <br />
            {numberE ? <span className="error">please enter number</span> : ""}
            <br />
            <label>Message</label>
            <br />
            <input
              type="message"
              name="message"
              value={message}
              onChange={handleMessage}
              placeholder="write your message here..."
            />
            <br />
            {messageE ? <span className="error">please type message</span> : ""}
            <br />
            <label>Select Subject</label>
            <br />
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={handleSubject}
              placeholder="Select subject"
            />
            <br />
            {subjectE ? (
              <span className="error">please select subject</span>
            ) : (
              ""
            )}
            <br />
          </div>
          <button className="form_btn" onClick={handleSubmit}>
            Send Message
          </button>
        </div>
        <div className="r_Form">
          <div className="map_data">
            <h4
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              Contact Information
            </h4>
            <i>
              <Telephone />
            </i>{" "}
            <span>12345678910</span>
            <br />
            <i>
              <Mailbox />
            </i>{" "}
            <span>sales@rashailautomation.com</span>
            <br />
            <i>
              <Google />
            </i>{" "}
            <span>
              S1,2nd Floor,Malwa Tower,Ashok
              Nagar,Indore,Madhya-Pradesh,India,452001
            </span>
            <br />
            <br />
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin"
            ></iframe>
            <i style={{ marginLeft: "20px", fontSize: "25px" }}>
              <Facebook /> <Instagram /> <Youtube /> <Whatsapp /> <Linkedin />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
