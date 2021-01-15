import React from "react";
import { Container, Row, Form, FirstNameInput, LastNameInput } from "../components/SignUpForm";
import API from "../utils/API";

function SignUp() {

    return (
        <div>
            <Container>
                <Row>
                    <Form>
                        <Row>
                            <FirstNameInput />
                            <LastNameInput />

                        </Row>
                    </Form>
                </Row>
            </Container>
        </div>
    )
}

export default SignUp;
