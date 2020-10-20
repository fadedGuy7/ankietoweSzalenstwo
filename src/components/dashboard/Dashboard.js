// import React, { Component } from 'react'
// import Photos from '../projects/Photos'
// import CompanyList from '../projects/CompanyList'
// import { connect } from 'react-redux'
// import { firestoreConnect } from 'react-redux-firebase'
// import { compose } from 'redux'

// class Dashboard extends Component {
//     render() {
//         const { companies } = this.props;
//         const { photos } = this.props;
//         return(
//             <div className='container'>
//                 <div className='dashboard columns'>
//                     <div className='column is-two-third left-desktop'>
//                         <CompanyList companies={ companies } />
//                     </div>
//                     <div className='column is-one-third-tablet right-desktop'>
//                         <Photos />
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//         photos: state.firestore.ordered.photos,
//         companies: state.firestore.ordered.companies,
//         toRegister: state.firestore.ordered.toRegister
//     }
// }

// export default compose(
//     connect(mapStateToProps),
//         firestoreConnect([
//             { collection: 'photos' },
//             { collection: 'companies' },
//             { collection: 'toRegister'}
//         ]))(Dashboard)


import React, { Component } from 'react'
import Photos from '../projects/Photos'
import CompanyList from '../projects/CompanyList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
    render() {
        console.log(this.props);

        const { companies } = this.props;
        const { photos } = this.props;
        console.log(this.props)

        return(
            <div className='container'>
                <div className='dashboard columns margin'>
                    <div className='column is-two-third left-desktop'>
                        <CompanyList companies={ companies } />
                    </div>
                    <div className='column is-one-third-tablet right-desktop'>
                        <Photos photos={ photos } />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default (Dashboard)


