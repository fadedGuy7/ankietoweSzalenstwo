import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPhoto } from '../../store/actions/photoActions'

class UploadPhoto extends Component {
    state = {
        id: '',
        author: '',
        companyName: '',
        file: '',
        date: '',
        accepted: false
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addPhoto(this.state);
    }

    render() {
        return (
            <div className='container'>
                <div className='column box is-half is-offset-one-quarter has-background-light mt-4 px-4 py-4 window'>
                        <form className='mt-4' onSubmit={ this.handleSubmit }>

                        <p className='is-size-3 has-text-centered mb-4'>Uploaduj zdjęcie</p>
                        <p className='is-size-6 mb-5'>Niezależnie czy to jednorazowy zarobek, ciekawe zdażenie czy też wypłata na konto, koniecznie podziel się nią z innymi, na pewno zmobilizuje ich to do działania <i className="far fa-smile-beam"></i></p>

                        <div className="field">
                            <p className="control has-icons-left has-icons-right">
                                <input className="input" type="input" placeholder="Nazwa serwisu którego dotyczy wrzutka" id='companyName' onChange={ this.handleChange }/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-file-signature"></i>
                                </span>
                                {/* <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                                </span> */}
                            </p>
                        </div>
                        <div className="field">
                            <p className="control has-icons-left">
                                <input className="input" type="file" id='file' placeholder="Znajdz plik na urządzeniu" onChange={ this.handleChange }/>
                                <span className="icon is-small is-left">
                                <i className="fas fa-file-image"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field has-text-centered my-4">
                        <p className="control">
                                <button className="button is-info" disabled={true}>
                                Uploaduj
                                </button>
                            </p>
                        </div>
                        <div className="field has-text-centered has-text-grey-lighter">
                            <p>Prosimy nie wrzucać treści nie związanych z tematyka strony, grozi za to premanentny ban.</p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addPhoto: (photo)  => dispatch(addPhoto(photo))
    }
}

export default connect (null ,mapDispatchToProps)(UploadPhoto)
