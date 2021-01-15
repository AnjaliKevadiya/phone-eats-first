import React from "react";
import { Container, Row, Form, FirstNameInput, LastNameInput } from "../components/SignUpForm";
import API from "../utils/API";

function SignUp() {



    return (
        <div>
            <Container>
                <Row>
                    
                    <Form>
                    <h1>SIGN UP</h1>
                        <Row>
                            <FirstNameInput 
                                onChange={handleInputChange}
                                name="first_name" />
                            <LastNameInput 
                                onChange={handleInputChange}
                                name="last_name" />

                        </Row>
                    </Form>
                </Row>
            </Container>
        </div>
    )
}

export default SignUp;
