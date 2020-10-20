export const visitUpdate = (id, uid) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        console.log(id, uid);
        firestore.collection('users').doc(uid).update({
            [id]: new Date()
        }).then(() => {
            dispatch({ type: 'LASTTIME_UPDATE_SUCCESS'})
        }).catch(err => {
            dispatch({ type: 'LASTTIME_UPDATE_ERROR', err})
        })
    }
}

export const updateUserLvl = (lvl, uid) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore ();
        console.log(lvl, uid);
        firestore.collection('users').doc(uid).update({
            regLvl: lvl
        }).then(() => {
            console.log('lvl updated', lvl)
            dispatch({ type: 'REGLVL_UPDATED', lvl })
        }).catch(err => {
            dispatch({ type: 'REGLVL_ERROR', err })
        })
    }
}