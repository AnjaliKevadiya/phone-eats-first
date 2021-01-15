import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import API from "../../utils/API";

const SignUpForm = () => {

    return (
        <div className="container">
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="First Name" id="first_name" type="text" 
                            ref={firstNameRef} />
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="Last Name" id="last_name" type="text" 
                            ref={lastNameRef} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="Email Address" id="email" type="email" 
                            ref={emailRef} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input placeholder="password" id="password" type="password" 
                            ref={passwordRef} />
                        </div>
                    </div>
                </form>
            </div>
            <button type="submit" className="btn btn-outline-success">Sign Up</button>
        </div>
    );
};

export default SignUpForm;