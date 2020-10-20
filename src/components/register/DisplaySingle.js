import React, { useEffect } from 'react'
import { openInNewTab } from '../../functions/openInNewTab'
import { updateUserLvl } from './../../store/actions/otherActions'
import { connect } from 'react-redux'
import c101 from './img/c101.png'
import c102 from './img/c102.png'


const DisplaySingle = (props) => {
    const { company } = props;
    // let next = parseInt(props.which) + 1;
    // let link = '/rejestracjadofirm/' + next;

    useEffect(() => {
        document.getElementById('description').innerHTML = company.description;
        window.scrollTo(0, 0)
    })
    const handleLvlAndPageUp = () => {
        console.log(props)
        props.updateUserLvl(props.regLvl + 1, props.uid);
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
          }
    }
    const handleLvlAndPageDown = () => {
        console.log(props)
        props.updateUserLvl(props.regLvl - 1, props.uid);
    }
    const isFirst = props.which === '1';
    return (
        <div className="container has-text-centered window p-5 py-5">
            <h1 className="title companiesTop has-text-black-ter" onClick={() => {
                    openInNewTab(company.ref);
                    document.getElementById('next').disabled=false}
                }>
                <p>{company.name}</p>
                <button className='button is-success'>REJESTRACJA</button>
            </h1>
            <p id='description' className="">
                {/* description */}
            </p>
            <p className='companiesTop mt-5 mb-3 is-block-mobile'>
            <button className='button is-link is-light my-2' id='next'
                        onClick={handleLvlAndPageDown} disabled={isFirst}>

                        Wróć do poprzedniej firmy

                    </button>
            <button className='button is-link my-3' id='next'
                        onClick={handleLvlAndPageUp}>
                        Przejdź do następnej firmy
            </button>
                    
            </p>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateUserLvl: (lvl, uid) => dispatch(updateUserLvl(lvl, uid))
    }
  }
  export default connect(null, mapDispatchToProps)(DisplaySingle)
