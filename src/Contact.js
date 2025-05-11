import React from "react";
import SiteMenu from "./SiteMenu";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact">
      <SiteMenu />

      <section className="ContactForm">
        <form>
          <h2>Contact Me</h2>
          <div className="InboxInfo">
            <label>Full Name</label>
            <input
              type="text"
              className="Field"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="InboxInfo">
            <label>Email Address</label>
            <input
              type="email"
              className="Field"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="InboxInfo">
            <label>Your Message</label>
            <textarea
              name=""
              id=""
              className="Field Mess"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}
