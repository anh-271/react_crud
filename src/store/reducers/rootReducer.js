const initState = {
    users: [
        {id: 1, name: 'Anh'},
        {id: 2, name:'Hoang'}
    ],
    posts: []
}

const rootReducer = (state = initState, action) => {

    switch(action.type) {
        case "DELETE_USER":
                console.log('>>>>>> run into delete user', action);

                let users = state.users
                users = users.filter(item => item.id !== action.payload.id)
                return {
                    ...state, users
                };
        // case y:
        //     break;
        default:      
            return state;
    }


}

export default rootReducer;


