import React from "react";
import SiteMenu from "./SiteMenu";
import "./Contact.css";

export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e32146bc-af1d-40dd-9267-c98c6f84b02b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <div className="Contact">
      <SiteMenu />

      <section className="ContactForm">
        <form onSubmit={onSubmit}>
          <h2>Contact Me</h2>
          <div className="InboxInfo">
            <label>Full Name</label>
            <input
              type="text"
              className="Field"
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>
          <div className="InboxInfo">
            <label>Email Address</label>
            <input
              type="email"
              className="Field"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>
          <div className="InboxInfo">
            <label>Your Message</label>
            <textarea
              name="message"
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
