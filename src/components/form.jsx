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
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

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

    const newErrors = {};
    if (form.firstName.trim() === "") {
      newErrors.firstName = "first Name is required";
    }

    if (form.lastName.trim() === "") {
      newErrors.lastName = "last Name is required";
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

      console.log("Name" + form.firstName);
      console.log("Name" + form.lastName);
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
      <div className="form-wrapper">
        <h2>CONTACT_US</h2>
        {successMessage && <div className="success">{successMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group Name-wrapper">
            <div className="name-input-wrapper">
              <label htmlFor="name">First Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.firstName}
                onChange={handleChange}
              />
              {formErrors.firstName && (
                <span className="error">{formErrors.firstName}</span>
              )}
            </div>
            <div className="name-input-wrapper">
              <label htmlFor="name">Last Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.lastName}
                onChange={handleChange}
              />
              {formErrors.lastName && (
                <span className="error">{formErrors.lastName}</span>
              )}
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
            />
            {formErrors.email && (
              <span className="error">{formErrors.email}</span>
            )}
          </div>
          <div className="form-group subject-input-wrapper">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
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
