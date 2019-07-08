
const initState = {
    projects: [{ id: '1', title: 'heyyy', content: "blaks bas sd", favorite: false },
    { id: '2', title: 'heyyy', content: "blaks bas sd", favorite: false }, { id: '3', title: 'heyyy', content: "blaks bas sd", favorite: false }]
}

const projectReducer = (state = initState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log(action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log(action.err);
            return state;

        default:
            return state;
    }
}

export default projectReducer
