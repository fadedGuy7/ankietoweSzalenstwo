import React, { Component } from 'react'
import CompanySingle from './CompanySingle'
import { openInNewTab } from '../../functions/openInNewTab'
import { connect } from 'react-redux'
import { visitUpdate } from '../../store/actions/otherActions'

class CompanyList extends Component {
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000*60);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        const Recznie = (props) => {
            return <CompanySingle company={companies[props.n]} lastTime={ this.props.user[props.n] } onClick={() => {
                openInNewTab(companies[props.n].ref);
                this.props.visitUpdate(props.n, this.props.auth.uid);
            }}/>
        }
        console.log(this.props)
        const {companies} = this.props;
        if (companies) return(
            <div>
                <div className='favourites p-3'>
                    {/* { companies && companies.map(company => {
                        return(
                            <CompanySingle company={company} key={company.id} onClick={() => {
                                openInNewTab(company.ref);
                                this.props.visitUpdate(company);
                            }}/>
                        )
                    })} */}
                    <Recznie n='1' />
                    <Recznie n='8' />
                    <Recznie n='15' />
                    <Recznie n='2' />
                    <Recznie n='4' />
                    <Recznie n='6' />
                    <Recznie n='7' />
                    <Recznie n='18' />
                    <Recznie n='14' />
                    <Recznie n='17' />
                
                </div>
                <div className='rest p-3 mt-4'>
                    <Recznie n='3' />
                    <Recznie n='5' />
                    <Recznie n='9' />
                    <Recznie n='10' />
                    <Recznie n='11' />
                    <Recznie n='12' />
                    <Recznie n='13' />
                    <Recznie n='16' />

                </div>
            </div>
            
        );
        return null;
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        visitUpdate: (company, uid) => dispatch(visitUpdate(company, uid))
    }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
        user: state.firebase.profile

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);