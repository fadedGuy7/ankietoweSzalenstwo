import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        passwordConf: '',
        agree: '',
        userName: '',
        city: '',
        ref: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />
        const isValid = this.state.email === '' || this.state.password === '' || this.state.passwordConf === '' || this.state.userName === '' || this.state.ref === '' || this.state.agree==='';
        return (
            <div className='container'>
                <div className='column box is-half is-offset-one-quarter has-background-light margin px-4 py-4 windowSign'>
                        <form className='mt-4' onSubmit={ this.handleSubmit }>
                        
                        <p className='is-size-3 has-text-centered mb-4'>Rejestracja</p>

                        <div className="field">
                        <label className="label">Nazwa uzytkownika(*)</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="text" placeholder="Nazwa uytkownika" id='userName' onChange={ this.handleChange }/>
                            <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                            </span>
                            <span className="icon is-small is-right">
                            {/* <i className="fas fa-check"></i> */}
                            </span>
                        </div>
                        {/* <p className="help is-success">This username is available</p> */}
                        </div>

                        <div className="field">
                        <label className="label">Email(*)</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="Adres email" id='email' onChange={ this.handleChange }/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                                {/* <i className="fas fa-exclamation-triangle"></i> */}
                            </span>
                        </div>
                        {/* <p className="help is-danger">This email is invalid</p> */}
                        </div>

                        <div className="field">
                        <label className="label">Hasło(*)</label>
                            <p className="control has-icons-left">
                                <input className="input" type="password" placeholder="Hasło" id='password' onChange={ this.handleChange }/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control has-icons-left">
                                <input className="input" type="password" placeholder="Powtórz hasło" id='passwordConf' onChange={ this.handleChange }/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>

                        <div className="field">
                        <label className="label">Skąd jesteś</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="text" placeholder="Miasto" id='city' onChange={ this.handleChange }/>
                            <span className="icon is-small is-left">
                            <i className="fas fa-home"></i>
                            </span>
                            <span className="icon is-small is-right">
                            {/* <i className="fas fa-check"></i> */}
                            </span>
                        </div>
                        {/* <p className="help is-success">This username is available</p> */}
                        </div>

                        <div className="field">
                        <label className="label">Skąd się o nas dowiedziałeś(*)</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="text" placeholder="Nazwa uytkownika/ serwisu" id='ref' onChange={ this.handleChange }/>
                            <span className="icon is-small is-left">
                            <i className="fas fa-question"></i>
                            </span>
                            <span className="icon is-small is-right">
                            {/* <i className="fas fa-check"></i> */}
                            </span>
                        </div>
                        {/* <p className="help is-success">This username is available</p> */}
                        </div>

                        <div className="field my-3">
                            <div className="control">
                                <label className="checkbox" id='agree'>
                                    <input type="checkbox" id='agree' onChange={ this.handleChange } className='mr-3'/>
                                    Akceptuję <a href="#">regulamin</a>
                                </label>
                            </div>
                        </div>



                    <div className="field has-text-centered my-4">
                        <p className="control">
                            { authError ? <span className="has-text-danger mb-4 is-block">{authError}</span> : null }

                            <button className="button is-info" id='reg-but' disabled={isValid}>
                                Zarejestruj
                            </button><br/>
                            <span>(*) - pola wymagane</span>
                            
                        </p>
                    </div>

                </form>
            </div>
        </div>
    )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
