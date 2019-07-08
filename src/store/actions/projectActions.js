export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to disptach
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'ben',
            authorLastName: 'edery',
            authorId: 1234,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project })
        }).catch((err) => {
            console.log(err)
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })
    }
};
