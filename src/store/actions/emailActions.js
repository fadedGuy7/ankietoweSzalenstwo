import emailjs, { init } from 'emailjs-com'

init("user_748tSfII76lmYj3zu5s53");

export const sendMsg = (msg) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        console.log(msg);
        emailjs.send('default_service', 'template_fcf3n7d', msg)
        .then((response) => {
           console.log('SUCCESS!');
            dispatch({ type: 'MESSAGE_SENT', response })
        }, (error) => {
           dispatch({ type: 'MESSAGE_ERROR', error})
           console.log('FAILED...', error);
        });
    }
}