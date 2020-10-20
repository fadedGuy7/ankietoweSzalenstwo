import React from 'react'
import { NavLink } from 'react-router-dom'

const List = ( props ) => {
    console.log(props)
    return (
        <div className='container'>
            <progress className="progress is-success margin" value={props.regLvl*5.55} max="100"></progress>
            <ul>
                {props.toRegister && props.toRegister.map((company) => {
                    return <li className='is-flex is-justify-content-space-between' key={company.id}>
                                <p>{company.name}</p>
                                <p className='has-text-success'>
                                    {props.regLvl > company.id ? 'Done!' : null}
                                </p>
                            </li>
                })}
            </ul>
        </div>
    )
}

const Todos = (props) => {
    const toDisplay = props.regLvl ? <List {...props} /> : <div className='margin-auto spinnerSecond icon-spinner-3'></div>;
    return (
        <div className='windowSecond p-2 pb-3'>
            { toDisplay }
        </div>
    )
}

export default Todos
