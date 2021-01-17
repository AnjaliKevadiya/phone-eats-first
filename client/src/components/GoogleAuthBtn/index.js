import React from 'react';

export function GoogleSignUpBtn(props) {
    return (
        <div className="input-field col s12">
            <button onClick={props.onClick} type="submit" className="btn"><a href="/auth/google">Sign In with Google</a></button>
            {props.children}
        </div>
    )
}