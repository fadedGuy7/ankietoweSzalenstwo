import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';
import TimeAgo from 'react-timeago'

var dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime);
require('dayjs/locale/pl')
// import 'dayjs/locale/de' // ES 2015 
dayjs.locale('pl') // use locale globally



const stars = ( howMany ) => {
  let tab = [];
  for(let i=0; i < howMany; i ++) {
    tab.push(<i className="fas fa-star has-text-warning" key={i}></i>);
  }
  return tab;
}

class CompanySingle extends Component {

render() {
  const { company } = this.props;
  let timeConvert = this.props.lastTime ? this.props.lastTime.toDate() : null;
  let lastTime = timeConvert !== null ? dayjs(timeConvert).fromNow() : null;
  
    return(
        <article className="media" onClick={this.props.onClick}>
        {/* <figure className="media-left is-hidden-mobile cLogo">
          <p className="image is-64x64">
            <img src={company.file} alt={this.companyName, ' logo'} />
          </p>
        </figure> */}
          

          <div className="media-content">
            <div className="content cContent">
              <p className='has-text-centered cTitle'>
                <strong>{ company.name }</strong>
                <small className="has-text-left">{ stars(company.rank) }</small>
              </p>
              <p>Jak często odwiedzać : {company.tip}
              </p>
            </div>
            <nav className="level is-mobile is-block is-flex-desktop">
              <div className="level-left">
                {/* <a className="level-item">
                  Informacje o firmie
                </a> */}
              </div>
              <div className="level-right">
                <p className='has-text-grey-light'>Ostatni raz odwiedzane:&nbsp;</p> 
              <p className='has-text-grey'>{ lastTime ? lastTime : 'Nigdy' }</p></div>

            </nav>
          </div>

      </article>
    )
}
}



export default CompanySingle