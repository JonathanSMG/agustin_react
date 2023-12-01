import React, { useState } from "react";

import "./App.css"
import { Signup } from "./pages/Signup.jsx";
import { Main } from "./pages/main.jsx";
import { Login } from "./pages/Login.jsx";
import { MainLogin } from "./pages/mainLogin.jsx";
import { Contacto } from "./pages/contacto.jsx";
import { Procesos } from "./pages/procesos.jsx";
import { Consultas } from "./pages/consultas.jsx";

function App() {
  const [currentForm, setCurrentForm] = useState('main');

  const toggleForm = (formName) => {


    setCurrentForm(formName);
  }

  return (
    <div className="App">
    {currentForm === "main" ? (
      <Main onFormSwitch={toggleForm} />
      ) : currentForm === "login" ? (
      <Login onFormSwitch={toggleForm} />
      ) : currentForm === "mainlogin" ? (
      <MainLogin onFormSwitch={toggleForm} />
      ) : currentForm === "contacto" ? (
      <Contacto onFormSwitch={toggleForm} />
      ) : currentForm === "procesos" ? (
      <Procesos onFormSwitch={toggleForm} />
      ) : currentForm === "signup" ? ( 
      <Signup onFormSwitch={toggleForm} />
      ) : currentForm === "consultas" ? ( 
      <Consultas onFormSwitch={toggleForm} />
    ) : (
       <Main onFormSwitch={toggleForm} />
        )}
  </div>
  );
}

export default App;
