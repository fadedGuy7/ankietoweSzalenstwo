import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return(
        <div className="buttons">
            <NavLink to='/rejestracja' className="button is-danger is-light">
                Rejestracja
            </NavLink>
            <NavLink to='/logowanie' className="button is-warning is-light">
                Logowanie
            </NavLink>
        </div>

    );
}

export default SignedOutLinks;