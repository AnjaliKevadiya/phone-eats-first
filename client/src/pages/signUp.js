import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  Row,
  Form,
  H1,
  FirstNameInput,
  LastNameInput,
  EmailInput,
  PasswordInput,
  SignUpBtn,
  SignInLink,
  GoogleBtn,
  FacebookBtn
} from "../components/SignUpForm";
// import passport from "../../../config/passport";
// import FacebookStrategy from "passport-facebook";
// import GoogleStrategy from "passport-google-oauth";
// import GoogleLogin from "react-google-login";
// import FacebookLogin from "react-facebook-login";
import API from "../utils/API";
import EntryNavBar from "../components/EntryNavBar"


// var keys = require("../../../config/index");

function SignUp() {
  const [formObject, setFormObject] = useState({});



// // //FACEBOOK STRATEGY
// FacebookStrategy({
//   clientID: keys.FACEBOOK.clientID,
//   clientSecret: keys.FACEBOOK.clientSecret,
//   callbackURL: "/auth/facebook/callback"
// },
// req.login(user, function(err) {
//   if (err) { return next(err); }
//   return res.redirect('/users/' + req.user.username);
// })
// );

// // //GOOGLE STRATEGY
// GoogleStrategy({
// clientID: keys.GOOGLE.clientID,
// clientSecret: keys.GOOGLE.clientSecret,
// callbackURL: "/auth/google/callback"
// },
// req.login(user, function(err) {
//   if (err) { return next(err); }
//   return res.redirect('/users/' + req.user.username);
// })
// );

  // //GOOGLE LOGIN SUCCESS
  // const responseSuccessGoogle = async (res) => {
  //   console.log("Google Success: ", res);
  //   API.googlelogin({
  //     tokenId: res.tokenId
  //   })
  //     .then((res) => {
  //       sessionStorage.setItem("userData", JSON.stringify(res));
  //       history.push(window.location.href = "/home");
  //       console.log("api.googlelogin -res: ", res)
  //       // window.location.href = "/home";
  //     })
  //     .catch((err) => console.log("api.googlelogin error: ", err));
  // }

  // //GOOGLE LOGIN ERROR
  // const responseErrorGoogle = (res) => {
  //   console.log("Google Login Error: ", res);
  // }

  //   //FACEBOOK LOGIN SUCCESS
  //   const responseFacebook = async (res) => {
  //     console.log("Facebook Login: ", res);
  //     API.facebooklogin({
  //       accessToken: res.accessToken,
  //       userID: res.userID
  //     })
  //     .then((res) => {
  //       console.log("api.facebooklogin - res: ", res)
  //       window.location.href = "/home";
  //     })
  //     .catch((err) => console.log("api.facebooklogin error: ", err));
  //   }

  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log("handleInputChange - name, value", name, value);
    setFormObject({ ...formObject, [name]: value });
  }

  //SIGNUP BUTTON
  function handleFormSubmit(event) {
    event.preventDefault();
    if (
      formObject.first_name &&
      formObject.last_name &&
      formObject.email &&
      formObject.password
    ) {
      API.signup({
        first_name: formObject.first_name,
        last_name: formObject.last_name,
        email: formObject.email,
        password: formObject.password,
      })
        .then((res) => {
          console.log("api.signup - res: ", res);
          window.location.href = "/home";
        })
        .catch((err) => console.log("api.signup error: ", err));
    }
  }

  return (
    <div>
      <EntryNavBar />
      <Container>
        <Card>
          <Row>
            <Form>
              <H1 />
              <Row>
                <FirstNameInput onChange={handleInputChange} name="first_name" />
                <LastNameInput onChange={handleInputChange} name="last_name" />
              </Row>
              <Row>
                <EmailInput onChange={handleInputChange} name="email" />
              </Row>
              <Row>
                <PasswordInput onChange={handleInputChange} name="password" />
              </Row>
              <Row>
                <SignUpBtn onClick={handleFormSubmit} />
              </Row>
              <Row>
                {/* <GoogleLogin
                  clientId="1082885186579-00j5a8kbt4tt0q3h6mua0b1ei0fgu9n1.apps.googleusercontent.com"
                  buttonText="Continue with Google"
                  onSuccess={responseSuccessGoogle}
                  onFailure={responseErrorGoogle}
                  cookiePolicy={'single_host_origin'}
                /> */}
                <GoogleBtn  />
              </Row>
              <Row>
                {/* <FacebookLogin
                  appId="3217579161677338"
                  autoLoad={false}
                  callback={responseFacebook} 
                /> */}
                <FacebookBtn />
              </Row>
              <Row>
                <SignInLink />
              </Row>
            </Form>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default SignUp;
