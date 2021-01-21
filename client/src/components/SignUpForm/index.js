import React from "react";
import "./style.css";
import API from "../../utils/API";

export function Container(props) {
  return <div className="container">{props.children}</div>;
}
export function Card(props) {
  return <div className="card">{props.children}</div>;
}
export function H1(props) {
  return <h2>Sign Up</h2>;
}
export function Row(props) {
  return <div className="row">{props.children}</div>;
}
export function Form(props) {
  return <form className="col s12">{props.children}</form>;
}
export function FirstNameInput(props) {
  return (
    <div className="input-field">
      <input
        name={props.name}
        onChange={props.onChange}
        placeholder="First Name"
        id="first_name"
        type="text"
      />
      {props.children}
    </div>
  );
}
export function LastNameInput(props) {
  return (
    <div className="input-field">
      <input
        name={props.name}
        onChange={props.onChange}
        placeholder="Last Name"
        id="last_name"
        type="text"
      />
      {props.children}
    </div>
  );
}
export function EmailInput(props) {
  return (
    <div className="input-field col s12">
      <input
        name={props.name}
        onChange={props.onChange}
        placeholder="Email Address"
        id="email"
        type="email"
      />
      {props.children}
    </div>
  );
}
export function PasswordInput(props) {
  return (
    <div className="input-field col s12">
      <input
        name={props.name}
        onChange={props.onChange}
        placeholder="password"
        id="password"
        type="password"
      />
      {props.children}
    </div>
  );
}
export function SignUpBtn(props) {
  return (
    <div className="input-field col s12">
      <button onClick={props.onClick} type="submit" className="btn">
        Sign Up
      </button>
      {props.children}
    </div>
  );
}
export function SignInLink(props) {
  return (
    <p className="signInLink">
      Already have account? <a href="/signin">Sign In</a>
      {props.children}
    </p>
  );
}
export function GoogleBtn(props) {
  // const googlelogin = (event) => {
  //     event.preventDefault();
  //     API.googlelogin().then(res => {
  //         console.log(res);
  //     })
  // }


  let loginPath = (process.env.NODE_ENV === 'production') ? "https://phone-eats-first.herokuapp.com" : "http://localhost:3001";

  return (
      <div className="input-field col s12">

      <a className="btn btn-outline-danger" href={loginPath + "/api/user/google"}>Continue with Google</a>

      {props.children}
    </div>
  );
}
// export function FacebookBtn(props) {
//   return (
//     <div className="input-field col s12">
//       <button type="submit" className="btn">
//         <a href="/api/user/auth/facebook">Continue with Facebook</a>
//       </button>
//       {props.children}
//     </div>
//   );
// }
