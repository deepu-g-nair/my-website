import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div id="contact">
      <div className="title">
        <h1 style={{ paddingLeft: "4px" }}>Contact</h1>
      </div>
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
        onload="if(submitted) {window.location='http://localhost:3000/';}"
      ></iframe>
      <form
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSewQkzSKvW28_WolSaifVdkLoltm-DF5LySL9Bkfvci8WhsLg/formResponse"
        method="post"
        target="hidden_iframe"
      >
        <div className="form-name">
          <label>Name</label>
          <input
            type="text"
            placeholder="Full name"
            required
            name="entry.537712746"
          />
        </div>
        <div className="form-email">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email ID"
            required
            name="entry.1093613672"
          />
        </div>
        <div className="form-message">
          <label>Message</label>
          <textarea
            placeholder="Write your message..."
            name="entry.1624417320"
            id=""
            cols="40"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="form-submit">
          <input
            type="submit"
            value="Send"
            onClick={() => alert("submitted")}
          />
        </div>
      </form>
    </div>
  );
}

export default Contact;
