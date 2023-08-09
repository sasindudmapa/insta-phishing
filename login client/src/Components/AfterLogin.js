import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function AfterLogin() {
  const { stat } = useParams();
  const navigate = useNavigate();

  function handleLoginAgain() {
    navigate("/accounts/login");
  }

  return (
    <div className="after-login">
      {stat === "error" ? (
        <div>
          <h1>Something Went Wrong! Please Try Again</h1>
          <button className="login-button" id="err-log">
            Login Again
          </button>
        </div>
      ) : (
        <div>
          <h1>Form Submited Succesfully!</h1>
          <h4>
            You will receive more infomation to your email within next few days.
            Thank you for your time!😊
          </h4>
        </div>
      )}
    </div>
  );
}

export default AfterLogin;
