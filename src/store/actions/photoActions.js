export const addPhoto = (photo) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        console.log('checkpoint 1', photo);
        const firestore = getFirestore();
        firestore.collection('photos').add({
            ...photo,
            author: 'net',
            authorId: '1234',
            date: new Date()
        }).then(() => {
        console.log('checkpoint 2');
        dispatch({type: 'ADD_PHOTO', photo});
        }).catch((err) => {
        console.log('checkpoint 2.1');
        dispatch({type: 'ADD_PHOTO_ERROR', err});
        })
    }
};
