import React from "react";
import "./style.css";

export function Container(props) {
    return (
        <div className="container">{props.children}</div>
    );
}

export function Row(props) {
    return (
        <div className="row">{props.children}</div>

    );
}

export function Form(props) {
    return (
        <form className="col s12">{props.children}</form>
    );
}

export function FirstNameInput(props) {
    return (
        <div className="input-field col s6">
            <input placeholder="First Name" id="first_name" type="text" />
            {props.children}
        </div>
    );
}

export function LastNameInput(props) {
    return (
        <div className="input-field col s6">
            <input placeholder="Last Name" id="last_name" type="text" />
            {props.children}
        </div>
    );
}

export function EmailInput(props) {
    return (
        <div className="input-field col s12">
            <input placeholder="Email Address" id="email" type="email" />
            {props.children}
        </div>
    );
}

export function PasswordInput(props) {
    return (
        <div className="input-field col s12">
            <input placeholder="password" id="password" type="password" />
            {props.children}
        </div>
    );
}

export function SignUpBtn(props) {
    return (
        <div className="input-field col s12">
            <button type="submit" className="btn btn-outline-success">Sign Up</button>
            {props.children}
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

