
const initialState = {
    dogBreeds: [],
    dogImages: [],
    dogRandomImage: [],
    answers: [],
    dogThreeRandomImages: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_DOG_BREED': {
            //console.log("a", action.payload)
            return {
                ...state,
                dogBreeds: action.payload
            }
        }
        case 'SHOW_DOG_IMAGES': {
            console.log("State", state)
            return {
                ...state, 
                dogImages: action.payload
            }
        }
        case 'SHOW_RANDOM_IMAGE':
            
           return  {

               ...state, 
               dogRandomImage: action.payload

            }
        case 'SHOW_THREE_RANDOM_IMAGES':
            
           return  {

               ...state, 
               dogThreeRandomImages: action.payload

            }
        case 'ANSWERS':
            return {
                ...state,
                answers: action.payload
            }
        default:
            return state
}}


export default reducer