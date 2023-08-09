import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//styles
import "../Styles/App.css";

//Components
import Login from "./Login";
import SignUp from "./SignUp";
import AfterLogin from "./AfterLogin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<p></p>} />
          <Route path="/accounts/emailsignup" element={<SignUp />} />
          <Route path="/accounts/login" element={<Login />} />
          <Route path="/login/logged/:stat" element={<AfterLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
