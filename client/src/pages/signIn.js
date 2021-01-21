import React, { useState } from "react";
import { Container, Row } from "../components/SignUpForm";
import API from "../utils/API";
import "./style.css";
import EntryNavBar from "../components/EntryNavBar";
// import GoogleLogin from "react-google-login";
// import FacebookLogin from "react-facebook-login";

function SignIn() {
  //GOOGLE LOGIN SUCCESS
  const responseSuccessGoogle = (res) => {
    console.log("Google Success: ", res);
    API.googlelogin({
      tokenId: res.tokenId,
    })
      .then((res) => {
        console.log("api.googlelogin -res: ", res);
        window.location.href = "/home";
      })
      .catch((err) => console.log("api.googlelogin error: ", err));
  };

  //GOOGLE LOGIN ERROR
  const responseErrorGoogle = (res) => {
    console.log("Google Login Error: ", res);
  };

  //FACEBOOK LOGIN SUCCESS
  const responseFacebook = (res) => {
    console.log("Facebook Login: ", res);
    API.facebooklogin({
      accessToken: res.accessToken,
      userID: res.userID,
    })
      .then((res) => {
        console.log("api.facebooklogin - res: ", res);
        window.location.href = "/home";
      })
      .catch((err) => console.log("api.facebooklogin error: ", err));
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email is " + email);
    console.log("password is " + password);
    API.login({
      email: email,
      password: password,
    })
      .then((res) => {
        console.log("login response ", res);
        window.location.href = "/home";
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <EntryNavBar />
      <card className="card">
        <h3 className="signinheader">Sign In</h3>
        <form onSubmit={handleSubmit}>
          <Container className="mt-3 px-5">
            <Row>
              <input
                className="email"
                type="text"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Row>
            <Row>
              <input
                className="password"
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Row>
            <Row>
              <button className="btn btn-success signIn" type="submit">
                Sign In
              </button>
            </Row>
            <Row>
              <p>--- OR ---</p>
            </Row>
            <Row>
              {/* <GoogleLogin
                                className="googleLogin"
                                clientId="1082885186579-00j5a8kbt4tt0q3h6mua0b1ei0fgu9n1.apps.googleusercontent.com"
                                buttonText="Continue with Google"
                                onSuccess={responseSuccessGoogle}
                                onFailure={responseErrorGoogle}
                                cookiePolicy={"single_host_origin"}
                            /> */}
              <a
                href="http://localhost:3001/api/user/google"
                className="btn btn-outline-danger"
              >
                Continue with Google
              </a>
            </Row>
            <Row>
              {/* <FacebookLogin
                                cssClass="facebookLogin"
                                appId="3217579161677338"
                                autoLoad={false}
                                callback={responseFacebook}
                            /> */}
            </Row>

            <p className="signUp">
              Don't have account? <a href="/signup">Sign Up</a>
            </p>
          </Container>
        </form>
      </card>
    </div>
  );
}
export default SignIn;
