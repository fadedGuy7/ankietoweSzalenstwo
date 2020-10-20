import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

const Navbar = (props) => {
    useEffect(() => {
            
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
    
        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
    
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);
    
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

            // close menu after each click on option
            const $navbarOption = Array.prototype.slice.call(document.querySelectorAll('.navbar-item'), 0);
            // Check if there are any navbar burgers
            if ($navbarOption.length > 0) {
        
            // Add a click event on each of them
            $navbarOption.forEach( elm => {
                elm.addEventListener('click', () => {
        
                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.remove('is-active');
                $target.classList.remove('is-active');
        
                });
            });
            }
    
            });
        });
        }
        
    })
    const { auth } = props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return(
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt='logo' width="112" height="28" />
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarB">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarB" className="navbar-menu">
                <div className="navbar-start">
                <NavLink to='/' className="navbar-item">
                    Strona główna
                </NavLink>
                <NavLink to='/pierwsze-kroki' className="navbar-item">
                    Pierwsze kroki
                </NavLink>
                <NavLink to='/czytelnia' className="navbar-item">
                    Czytelnia
                </NavLink>

                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                    Więcej
                    </a>

                    <div className="navbar-dropdown">
                    <NavLink to='/kontakt' className="navbar-item">
                        Kontakt
                    </NavLink>
                    <NavLink to='/' className="navbar-item">
                        Galeria (wkrótce)
                    </NavLink>
                    <hr className="navbar-divider" />
                    <NavLink to='/kontakt' className="navbar-item" disabled={true}>
                        Zgłoś błąd
                    </NavLink>
                    </div>
                </div>
                </div>

                <div className="navbar-end">
                <div className="navbar-item">
                    { links }
                </div>
                </div>
            </div>
            </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default  connect(mapStateToProps)(Navbar);