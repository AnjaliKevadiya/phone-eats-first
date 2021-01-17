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
} from "../components/SignUpForm";
import GoogleSignUpBtn from "react-google-login";
import API from "../utils/API";

function SignUp() {
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    console.log("handleInputChange - name, value", name, value);
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("handleFormSubmit - FormData: ", formObject);
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
                <GoogleSignUpBtn 
                    clientId="705876653433-b1hjnhdhnp4e4kkitd1fbdoj4hl7lu58.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
              </Row>
            </Form>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default SignUp;
