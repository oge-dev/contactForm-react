import React, { useState } from "react";
import "./form.css";
import { nanoid } from "nanoid";

const INITIAL_STATE = {
  // Generate a unique ID
  id: nanoid(),
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

const ContactUsForm = ({ submitForm }) => {
  const [form, setForm] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState("");

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

  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitStatus("");
    } else {
      setErrors({});
      // Handle form submission
      submitForm(form)
        .then((response) => {
          // Log the entire form object for debugging purposes
        console.log("Response Data:", response.data);

        // Log specific status from the response
        console.log("Response Status:", response.status);
          setSubmitStatus("Form submitted successfully");
          setForm(INITIAL_STATE);
        })
        .catch((error) => {
           // Log the entire error for debugging
          console.error("Error occured:", error);
          setSubmitStatus(`There was an error submitting the form: ${error.message}`);
        });
    }
  };

  return (
    <div className="form-wrapper">
      <h2>CONTACT US</h2>
      {submitStatus && (
        <p
          className={`submit-status ${
            submitStatus.includes("error") ? "error-status" : "success"
          }`}
        >
          {submitStatus}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group Name-group">
          <div className="name-input-wrapper">
            <label htmlFor="firstName">First Name<sup>*</sup></label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p id="firstNameError" className="error">
                {errors.firstName}
              </p>
            )}
          </div>
          <div className="name-input-wrapper">
            <label htmlFor="lastName">Last Name<sup>*</sup></label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
             {errors.lastName && (
              <p id="firstNameError" className="error">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>

        <div className="form-group email-input-wrapper">
          <label htmlFor="email">Email<sup>*</sup></label>
          <input
            type="text"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            aria-describedby="emailError"
          />
          {errors.email && (
            <p id="emailError" className="error">
              {errors.email}
            </p>
          )}
        </div>
        <div className="form-group subject-input-wrapper">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
          />
        </div>
        <div className="form-group message-input-wrapper">
          <label htmlFor="message">Message<sup>*</sup></label>
          <textarea
            id="message"
            name="message"
            cols="30"
            rows="10"
            value={form.message}
            onChange={handleChange} aria-describedby="messageError"
          />
          {errors.message && (
            <p id="messageError" className="error">
              {errors.message}
            </p>
          )}
        </div>

        <div className="btn-wrapper">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
