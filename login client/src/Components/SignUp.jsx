import React from "react";

//Components
import Footer from "./Footer";

//styles
import "../Styles/signup.css";

//static
import googleplay from "../Static/googleplay.png";
import microsoft from "../Static/microsoft.png";

function SignUp() {
  return (
    <div className="wrap-all" id="register-wrap-all">
      <div class="container">
        <div class="box">
          <div class="heading"></div>
          <div className="heading-caption">
            Sign up to see photos and videos from your friends.
          </div>
          <button class="login-button signup-fb-login" title="login">
            <a href="https://web.facebook.com/login/?_rdc=1&_rdr">
              Log in with Facebook
            </a>
          </button>
          <form class="login-form">
            <div class="separator">
              <div class="line"></div>
              <p>OR</p>
              <div class="line"></div>
            </div>
            <div class="field">
              <input
                id="username"
                type="name"
                placeholder="Phone number, username, or email"
              />
              <label for="username">Mobile number or email address</label>
            </div>
            <div class="field">
              <input
                id="username"
                type="name"
                placeholder="Phone number, username, or email"
              />
              <label for="username">Full Name</label>
            </div>
            <div class="field">
              <input
                id="username"
                type="name"
                placeholder="Phone number, username, or email"
              />
              <label for="username">Username</label>
            </div>
            <div class="field">
              <input id="password" type="password" placeholder="password" />
              <label for="password">Password</label>
            </div>
            <div className="privacy-policy-wrap">
              People who use our service may have uploaded your contact
              information to Instagram.{" "}
              <a href="https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fhelp%2Finstagram%2F261704639352628&e=AT317WodlVryq1bjhyOWctHjcj1JkN8jYV8BarX0d6nvwqb_INqmUfDzpCfCBsZCfFp1NRU3hAVQ5RJ2BJu5LtVlhrQKHo1EECDoaJOs9sV_fhygOo-TmBxs47rmXgQ8ipJcHkGrXdqIOpsfBZ7rYw">
                Learn more
              </a>
              <br />
              <br />
              By signing up, you agree to our
              <a href="https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fprivacy%2Fpolicy&e=AT317WodlVryq1bjhyOWctHjcj1JkN8jYV8BarX0d6nvwqb_INqmUfDzpCfCBsZCfFp1NRU3hAVQ5RJ2BJu5LtVlhrQKHo1EECDoaJOs9sV_fhygOo-TmBxs47rmXgQ8ipJcHkGrXdqIOpsfBZ7rYw">
                {" "}
                Terms, Privacy Policy
              </a>{" "}
              and
              <a href="https://www.instagram.com/legal/cookies/">
                {" "}
                Cookies Policy.
              </a>
            </div>
            <button class="login-button signup-login-button" title="login">
              Sign Up
            </button>

            <div class="other"></div>
          </form>
        </div>
        <div class="box">
          <p>
            Have an account?{" "}
            <a class="signup " href="/accounts/login">
              Log in
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

export default SignUp;
