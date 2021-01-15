import React from "react";
import 
{ 
    Container, 
    Row, 
    Form, 
    FirstNameInput, 
    LastNameInput, 
    EmailInput, 
    PasswordInput,
    SignUpBtn
} from "../components/SignUpForm";
import API from "../utils/API";

function SignUp() {



    return (
        <div>
            <Container>
                <Row>
                    
                    <Form>
                    <h1>SIGN UP</h1>
                        <Row>
                            <FirstNameInput />
                            <LastNameInput  />
                        </Row>
                        <Row>
                            <EmailInput />
                        </Row>
                        <Row>
                            <PasswordInput />
                        </Row>
                    </Form>
                </Row>
            </Container>
            <SignUpBtn />
        </div>
    )
}

export default SignUp;
