import React, { useState } from "react";
import { Container, Row } from "../components/SignUpForm";
import API from "../utils/API";
function SignIn() {
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
      <div className="mt-4">
        <h2>Sign In</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Row>
          <Row className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
      </form>
    </div>
  );
}
export default SignIn;