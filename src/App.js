import "./App.css";
import ContactUsForm from "./components/form";
import axios from "axios";
import React from "react";

function App() {
  const ContactUsApp = (form) => {
    /// Make a POST request using Axios
    axios
      .post(
        "https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries",
        form
      )
      .then((response) => {
        // Log the entire form object for debugging purposes
        console.log("Response Data:", response.data);
        
        // Log specific status from the response
        console.log("Response Status:", response.status);
      })
      .catch((error) => {
        // Log the entire error for debugging
        console.error("Error occured:", error);
      });
  };

  return (
    <div className="App">
      <ContactUsForm submitForm={ContactUsApp} />
    </div>
  );
}

export default App;
