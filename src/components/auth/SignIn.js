import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className='container'>
                <div className='column box is-half is-offset-one-quarter has-background-light margin px-4 py-4 windowSign'>
                        <form className='mt-4' onSubmit={ this.handleSubmit }>

                        <p className='is-size-3 has-text-centered mb-4'>Logowanie</p>

                        <div className="field">
                            <p className="control has-icons-left has-icons-right">
                                <input className={ authError ? "input is-danger" : "input" } type="email" placeholder="Email" id='email' onChange={ this.handleChange }/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                                </span>
                                {/* <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                                </span> */}
                            </p>
                        </div>
                        <div className="field">
                            <p className="control has-icons-left">
                                <input className={ authError ? "input is-danger" : "input" } type="password" placeholder="Hasło" id='password' onChange={ this.handleChange }/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                                </span>
                            </p>

                        </div>
                        <div className="field has-text-centered my-4">
                        <p className="control">
                        { authError ? <span className="has-text-danger mb-4 is-block">Zły login i/lub hasło</span> : null }

                                <button className="button is-info">
                                Zaloguj
                                </button>
                            </p>
                            <p className="control">
                                {/* <button class="button is-danger is-outlined">
                                Rejestracja
                                </button> */}
                            </p>
                        </div>
                        <div className="field has-text-centered">
                            <p>Nie masz jeszcze konta? Utwórz je <a href='/rejestracja'>tutaj</a>.</p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
