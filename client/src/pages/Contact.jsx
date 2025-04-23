import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { team } from "../data";
import "../styles/Contact.scss";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/mail/send", formData);
      if (res.data.success) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      console.error("Mail error:", err);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <h3 className="Our-team">Contact Our Team</h3>
      <div className="container-team">
        {team.map((val, index) => (
          <div className="box" key={index}>
            <div className="details">
              <div className="img">
                <img src={val.cover} alt={`Team member: ${val.name}`} />
              </div>
              <i className="fa fa-location-dot"></i>
              <label>{val.address}</label>
              <h4>{val.name}</h4>
              <ul>
                {val.icon.map((icon, index) => (
                  <li key={index}>{icon}</li>
                ))}
              </ul>
              <div className="button">
                <button>
                  <i className="fa fa-envelope"></i>
                </button>
                <button className="btn4">
                  <i className="fa fa-phone-alt"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container-form">
        <form className="shadow" onSubmit={handleSubmit}>
          <h3>You have a Query?</h3>
          <h4>Drop us a Line</h4> <br />
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit Request</button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
