import "./App.css";
import ContactUsForm from "./components/form";
import axios from "axios";
import React from "react";

function App() {
  const ContactUsApp = (form) => {
    /// Make a POST request using Axios
    return axios
      .post(
        "https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries",
        form
      )
  };

  return (
    <div className="App">
      <ContactUsForm submitForm={ContactUsApp} />
    </div>
  );
}

export default App;
