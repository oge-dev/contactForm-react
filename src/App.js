import './App.css';
import ContactUsForm from './components/form';
import axios from 'axios';
import React from "react";


function App() {


  const ContactUsApp = (form) => {
    console.log(form)

    /// Make a POST request using Axios
    axios.post("https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries", form,)
    .then((response) => {
      console.log('Response:', response.form, response.status, response.data.token);
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log("server responded");
      } else if (error.request) {
        console.log("network error");
      } else {
        console.log('Error: '+ error);
      }
    });
  }


  return (
    <div className="App">
      <ContactUsForm submitForm={ContactUsApp} />
    </div>
  );
}

export default App;
