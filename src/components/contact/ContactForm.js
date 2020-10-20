import React, { Component, useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { sendMsg } from '../../store/actions/emailActions'
import { default as Sent } from '../../Icons/Sent'
import { default as Error } from '../../Icons/Delete'


const disable = (id) => {
    let el = document.getElementById(id);
    console.log(el)
    el.disabled = true;
    el.classList.add('is-loading');
}

const Form = (props) => {
    return (
        <div className='column box is-half is-offset-one-quarter has-background-light mt-4 px-4 py-4 windowSign'>
                        <form className='my-4' onSubmit={ props.handleSubmit }>

                        <p className='title has-text-centered mb-4'>Kontakt</p>
                        <p className='subtitle mt-4'>Chcesz się podzielić opinią na temat strony, a może przyszło Ci do głowy coś co byłoby warto dodać aby była jeszcze bardziej pomocna? Nie krępuj się, co to by nie było chętnie Cie wysłuchamy i odpowiemy w możliwie najkrótszym terminie!</p>

                        <div className="field">
                            <p className="control has-icons-left has-icons-right">
                                <input className="input" type="text" placeholder="Tytuł wiadomości" id='subject' onChange={ props.handleChange }/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-title"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <textarea className="textarea" id='msg' placeholder="Twoja wiadomość" rows="10" onChange={ props.handleChange }></textarea>
                            </p>

                        </div>
                        <div className="field has-text-centered my-4">
                        <p className="control">

                                <button id='send' className="button is-info" onClick={ () => (disable('send', 10)) }>
                                Wyślij wiadomość
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
    )
}

const MsgSent = () => {
    return (
        <div className='column box is-half is-offset-one-quarter has-background-light mt-4 px-4 py-4'>
            <figure className="has-text-centered mt-6 mb-3 mx-4">       
                        <Sent width='8em' height='8em'/>
                    </figure>
            <p className='title has-text-centered mb-4'>Wiadomość została wysłana</p>
                        <p className='subtitle mt-4 mb-6 mx-4 has-text-centered'>Postaramy się odpowiedzieć na nią tak szybko jak to tylko będzie możliwe.</p>
        </div>
    )
}

const MsgError = () => {
    return (
        <div className='column box is-half is-offset-one-quarter has-background-light mt-4 px-4 py-4'>
            <figure className="has-text-centered mt-6 mb-3 mx-4">       
                        <Error width='8em' height='8em'/>
                    </figure>
            <p className='title has-text-centered mb-4'>Nie udało się wysłać wiadomości</p>
                        <p className='subtitle mt-4 mb-6 mx-4 has-text-centered'>Prosimy spróbować ponownie.</p>
        </div>
    )
}

class ContactForm extends Component {
    state = {
        subject: '',
        msg: '',
        from: this.props.auth.email
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.sendMsg(this.state);
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/logowanie' />
        if (!this.props.email.msgSent) return <Form handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } />;
        if (this.props.email.msgSent) return <MsgSent />;
        if (this.props.email.msgError) return <MsgError />;


        return (
            <div className='container'>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        email: state.email

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMsg: (msg) => dispatch(sendMsg(msg))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
