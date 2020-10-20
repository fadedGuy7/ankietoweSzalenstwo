import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import CompanyDetails from './components/projects/CompanyDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import UploadPhoto from './components/projects/UploadPhoto'
import WelcomePage from './components/register/WelcomePage'
import CompanyReg from './components/register/CompanyReg'
import ContactForm from './components/contact/ContactForm'
import PierwszeKroki from './components/register/PierwszeKroki'
import Test from './components/Test'
import { updateUserLvl } from './store/actions/otherActions'
import DisplayInfo from './components/register/DisplayInfo'
import DisplayGrat from './components/register/DisplayGrat'
import BugReport from './components/contact/BugReport'

import './app.scss';

class App extends Component {
  render() {
    const { companies } = this.props;
    const { photos } = this.props;
    const { toRegister } = this.props;
    const { toRegisterObj }= this.props;


    /// Sprawdzic jaki typ zmiennej daje regLvl
    const handleLvlAndPageUp = (props) => {
      console.log(props, this.props.userProfile.regLvl)
      this.props.updateUserLvl(this.props.userProfile.regLvl + 1, this.props.user.uid);
      return this.props.userProfile.regLvl + 1;
    }
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' render={(props) =>  (<Dashboard {...props} companies={toRegisterObj} photos={photos} user={this.props.user}/>)} />
          <Route path='/firma/:id' component={CompanyDetails} />
          <Route path='/logowanie' component={SignIn} />
          <Route path='/rejestracja' component={SignUp} />
          <Route path='/upload' component={UploadPhoto} />
          <Route path='/rekrutacja' component={WelcomePage} />
          <Route path='/pierwsze-kroki' render={(props) => (<PierwszeKroki {...props} handleLvlAndPageUp={handleLvlAndPageUp} />)} />
          <Route exact path='/rejestracjadofirm/' component={DisplayInfo} />
          <Route exact path='/gratulacje/' component={DisplayGrat} />
          <Route path='/rejestracjadofirm/:id' render={(props) =>  (<CompanyReg {...props} uid={this.props.user.uid} regLvl={this.props.userProfile.regLvl} toRegister={toRegister} toRegisterObj={toRegisterObj} handleLvlAndPageUp={handleLvlAndPageUp}/>)} />
          <Route exact path='/kontakt' render={(props) => (<ContactForm {...props} email={this.props.email}/>)} />
          <Route exact path='/zglos-blad' render={(props) => (<BugReport {...props} email={this.props.email}/>)} />

          <Route path='/test' component={Test} />


          
          {/* <Route
            path='/dashboard
            render={(props) => (
              <Dashboard {...props} isAuthed={true} />
            )}
          /> */}


        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
console.log(state);
  return {
      user: state.firebase.auth,
      userProfile: state.firebase.profile,
      photos: state.firestore.ordered.photos,
      companies: state.firestore.ordered.toRegister,
      toRegister: state.firestore.ordered.toRegister,
      toRegisterObj: state.firestore.data.toRegister
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      updateUserLvl: (lvl, uid) => dispatch(updateUserLvl(lvl, uid))
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
      firestoreConnect([
          { collection: 'photos' },
          { collection: 'toRegister'}
      ]))(App)

