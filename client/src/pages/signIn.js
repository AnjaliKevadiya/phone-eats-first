import React from "react";
import SignInForm from "../components/SignInForm";

function SignIn() {
    return (
        <div>
            <SignInForm />
            
        </div>
    )
}

export default SignIn;import React, { useState } from "react";
import { Container, Row } from "../components/SignUpForm";
function SignIn() {
  const [username, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
  };
  return (
    <div>
      <div className="mt-4">
        <h2>Sign Up</h2>
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
        <Container className="mt-4">
          <h3>Hello {username}!</h3>
          <p>
            I probably shouldn't tell you this, but your password is {password}!
          </p>
        </Container>
      </form>
    </div>
  );
}
export default SignIn;