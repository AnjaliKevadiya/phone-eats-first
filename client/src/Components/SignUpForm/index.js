import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUpForm = () => {
    return (
        <div className="row">
        <form className="col s12">
            <div className="row">
                <div className="input-field col s6">
                    <input placeholder="First Name" id="first_name" type="text" class="validate" />
                </div>
                <div className="input-field col s6">
                    <input placeholder="Last Name" id="last_name" type="text" class="validate" />
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input placeholder="password" id="password" type="password" class="validate" />
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input placeholder="Email Address" id="email" type="email" class="validate" />
                </div>
            </div>
        </form>
    </div>

    );
};

export default SignUpForm;