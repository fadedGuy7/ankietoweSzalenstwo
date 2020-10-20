import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return(
        <div className="buttons">
            <NavLink to='/ustawienia' className="button is-warning is-light" disabled={true}>
                Ustawienia konta
            </NavLink>
            <NavLink to='/upload' className="button is-link is-light">
                Uploaduj zarobek
            </NavLink>
            <button onClick={props.signOut} className="button is-danger is-light">
                Wyloguj
            </button>
        </div>

    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);