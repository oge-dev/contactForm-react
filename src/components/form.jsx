import React, { useState } from "react";
import "./form.css";
import Header from "./header/header";
import { nanoid } from "nanoid";

// Generate a unique ID
const id = nanoid();

const INITIAL_STATE = {
  id: id,
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactUsForm = ({ submitForm }) => {
  const [form, setForm] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
    console.log(
      form.name + " " + form.email + " " + form.subject + " " + form.message
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (form.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (form.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (form.message.trim() === "") {
      newErrors.message = "Message is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setFormErrors(newErrors);
      setSuccessMessage(false);
    } else {
      // Handle form submission
      setFormErrors({});
      submitForm(form);
      // Start loading
      setLoading(true);
      setSuccessMessage("Form submitted successfully");
      console.log("Form submitted");
      // Perform any additional actions like API calls or redirects

      console.log("Name" + form.name);
      console.log("Email" + form.email);
      console.log("Subject" + form.subject);
      console.log("Message" + form.message);
    }

    setForm(INITIAL_STATE);
    // Stop loading
    setLoading(false);
  };

  return (
    <>
      <Header />
      <div className="form-wrapper">
        <h2>CONTACT_US</h2>
        {successMessage && <div className="success">{successMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="name-input-wrapper">
            <label htmlFor="name">NAME:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            {formErrors.name && (
              <span className="error">{formErrors.name}</span>
            )}
          </div>
          <div className="email-input-wrapper">
            <label htmlFor="email">EMAIL:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <span className="error">{formErrors.email}</span>
            )}
          </div>
          <div className="subject-input-wrapper">
            <label htmlFor="subject">SUBJECT:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
            />
          </div>
          <div className="message-input-wrapper">
            <label htmlFor="message">MESSAGE:</label>
            <textarea
              id="message"
              name="message"
              cols="30"
              rows="10"
              value={form.message}
              onChange={handleChange}
            />
            {formErrors.message && (
              <span className="error">{formErrors.message}</span>
            )}
          </div>
          {Object.keys(formErrors).length > 0 && (
            <div className="error">Please fix the form errors.</div>
          )}
          <div className="btn-wrapper">
            <button type="submit">
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUsForm;
