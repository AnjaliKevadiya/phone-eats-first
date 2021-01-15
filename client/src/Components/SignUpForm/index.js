import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { useStoreContext } from "../../utils/GlobalState";
//import { } from "../../utils/actions";
import API from "../../utils/API";

const SignUpForm = () => {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    // const [state, dispatch] = useStoreContext();

    const handleSubmit = e => {
        e.preventDefault();
        // dispatch({ type: })
        API.signup({
            first_name: firstNameRef.current.value,
            last_name: lastNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        })
            // .then(result => {
            //     dispatch({
            //         type: 
            //     })
            // })
            .catch(err => console.log(err));
    }

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