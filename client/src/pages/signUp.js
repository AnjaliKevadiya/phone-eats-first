import React, { useEffect } from "react";
import {
  Container,
  Row,
  Form,
  FirstNameInput,
  LastNameInput,
  EmailInput,
  PasswordInput,
  SignUpBtn,
} from "../components/SignUpForm";
import API from "../utils/API";

function SignUp() {
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
        .then((res) => getAllPosts())
        .catch((err) => console.log(err));
    }
  }

  return (
    <div>
      <Container>
        <Row>
          <Form>
            <h1>SIGN UP</h1>
            <Row>
              <FirstNameInput name="first_name" />
              <LastNameInput name="last_name" />
            </Row>
            <Row>
              <EmailInput name="email" />
            </Row>
            <Row>
              <PasswordInput name="password" />
            </Row>
          </Form>
        </Row>
      </Container>
      <SignUpBtn
        // disabled={!(formObject.first_name && formObject.last_name && formObject.email && formObject.password)}
        onClick={handleFormSubmit}
      />
    </div>
  );
}

export default SignUp;
