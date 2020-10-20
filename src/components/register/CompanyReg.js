import React, { useEffect } from 'react'
import Todos from './Todos'
import DisplaySingle from './DisplaySingle'
import DisplayInfo from './DisplayInfo'
import DisplayGrat from './DisplayGrat'
import { useHistory } from 'react-router-dom'
import ErrorPage from './../ErrorPage'

// ######### props = toRegister.

const CompanyReg = (props) => {
    const id = props.match.params.id;
    const history = useHistory();
    const idUp = parseInt(id);
    useEffect(() => {    
        props.regLvl && idUp !== props.regLvl ? history.push('/rejestracjadofirm/' + props.regLvl) : console.log('Not ready yet');
});

    let toDisplay 
    toDisplay = props.regLvl ?
        props.regLvl >= '0' && props.regLvl < '19' ? 
                props.regLvl == '0' ? <DisplayInfo /> :
                    <DisplaySingle regLvl={props.regLvl} uid={props.uid} company={props.toRegisterObj[props.regLvl]} which={id}/> 
            : props.regLvl == '19' ? <DisplayGrat /> : <ErrorPage />
                : <div className='spinnerSecond icon-spinner-3'></div>;
    return (
        <div className='container'>
                <div className='dashboard columns margin2'>
                    <div className='column is-two-third left-desktop'>
                        {toDisplay}
                    </div>
                    <div className='column is-one-third-tablet right-desktop'>
                        <Todos toRegister={props.toRegister} regLvl={props.regLvl} />
                    </div>
                </div>
            </div>
    )
}
export default CompanyReg



