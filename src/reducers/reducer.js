
const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_DOG_BREED':
            return [...state, action.payload]
           
    
        default:
            return state
}}

export default reducer