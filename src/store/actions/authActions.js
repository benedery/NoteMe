
export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCESS' });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_FAILED', err })
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCESS' })
        }).catch((err) => {
            dispatch({ type: 'SIGNOUT_FAILED' })
        })

    }
}