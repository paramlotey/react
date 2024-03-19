import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Contact = () => {
  const [form, setForm] = useState(false);

  const changeform = () => {
    setForm(!form);
  };
  return (
    <div>
      Contact
      {form ? <Login /> : <Signup />}
      <button onClick={changeform}>Toggle Form</button>
    </div>
  );
};

export default Contact;
