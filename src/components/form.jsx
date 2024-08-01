import React, { useState } from "react";
import "./form.css";
import { nanoid } from "nanoid";

// Generate a unique ID
const id = nanoid();

const INITIAL_STATE = {
  id: id,
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

const ContactUsForm = ({ submitForm }) => {
  const [form, setForm] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });

    console.log(
      form.firstName +
        " " +
        form.lastName +
        " " +
        form.email +
        " " +
        form.subject +
        " " +
        form.message
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission
    submitForm(form);

    setForm(INITIAL_STATE);
  };

  return (
      <div className="form-wrapper">
        <h2>CONTACT_US</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group Name-group">
            <div className="name-input-wrapper">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="name-input-wrapper">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group email-input-wrapper">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group subject-input-wrapper">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group message-input-wrapper">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              cols="30"
              rows="10"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="btn-wrapper">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
  );
};

export default ContactUsForm;
