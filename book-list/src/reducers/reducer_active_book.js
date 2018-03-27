//state argument is not application state, only the state this reducer is responsible for
//reducer is called whenever an action is triggered by our app
export default function(state = null, action) {

    switch(action.type) {
    case 'BOOK_SELECTED':
        return action.payload
    }
    return state;
}