import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { useStoreContext } from "../../utils/GlobalState";
//import { } from "../../utils/actions";
import API from "../../utils/API";

export function Container(props) {
    return (
        <div className="container"></div>
    );
}

export function Row(props) {
    return (
        <div className="row"></div>
    );
}

export function Form(props) {
    return (
        <form className="col s12"></form>
    );
}

export function FirstNameInput(props) {
    return (
        <div className="input-field col s6">
            <input placeholder="First Name" id="first_name" type="text" />
        </div>
    );
}

export function LastNameInput(props) {
    return (
        <div className="input-field col s6">
            <input placeholder="Last Name" id="last_name" type="text" />
        </div>
    );
}



// const SignUpForm = () => {

//     return (
//         <div className="container">
//             <div className="row">
//                 <form className="col s12">
//                     <div className="row">
//                         <div className="input-field col s6">
//                             <input placeholder="First Name" id="first_name" type="text"
//                                 ref={firstNameRef} />
//                         </div>
//                         <div className="input-field col s6">
//                             <input placeholder="Last Name" id="last_name" type="text"
//                                 ref={lastNameRef} />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="input-field col s12">
//                             <input placeholder="Email Address" id="email" type="email"
//                                 ref={emailRef} />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="input-field col s12">
//                             <input placeholder="password" id="password" type="password"
//                                 ref={passwordRef} />
//                         </div>
//                     </div>
//                 </form>
//             </div>
//             <button type="submit" className="btn btn-outline-success">Sign Up</button>
//         </div>
//     );

