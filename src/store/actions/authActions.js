
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

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        // Register a new user from signup form to fireBase auth
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
            // store in database, data about the created user.
        ).then((response) => {
            return firestore.collection('users')
                .doc(response.user.uid)
                .set({
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    initials: newUser.firstName[0] + newUser.lastName[0]
                })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCESS' })
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}