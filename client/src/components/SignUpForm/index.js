import React from "react";
import "./style.css";

export function Container(props) {
    return (
        <div className="container">{props.children}</div>
    );
}

export function Card(props) {
    return (
        <div className="card">{props.children}</div>
    );
}
export function H1(props) {
    return (
        <h2>Sign Up</h2>
    )
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
        <div className="input-field">
            <input name={props.name} onChange={props.onChange} placeholder="First Name" id="first_name" type="text" />
            {props.children}
        </div>
    );
}

export function LastNameInput(props) {
    return (
        <div className="input-field">
            <input name={props.name} onChange={props.onChange} placeholder="Last Name" id="last_name" type="text" />
            {props.children}
        </div>
    );
}

export function EmailInput(props) {
    return (
        <div className="input-field col s12">
            <input name={props.name} onChange={props.onChange} placeholder="Email Address" id="email" type="email" />
            {props.children}
        </div>
    );
}

export function PasswordInput(props) {
    return (
        <div className="input-field col s12">
            <input name={props.name} onChange={props.onChange} placeholder="password" id="password" type="password" />
            {props.children}
        </div>
    );
}

export function SignUpBtn(props) {
    return (
        <div className="input-field col s12">
            <button onClick={props.onClick} type="submit" className="btn">Sign Up</button>
            {props.children}
        </div>
    );
}