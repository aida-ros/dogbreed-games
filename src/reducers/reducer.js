
const initialState = {
    dogBreeds: [],
    dogImages: [],
    dogRandomImage: [],
    answers: [],
    dogThreeRandomImages: [],
    setRandomNumber: [],
    showRightImage: [],
    
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
        case 'TWO_RANDOM_BREEDS':
            return {
                ...state,
                randomBreeds: action.payload
            }
        case 'SHOW_THREE_RANDOM_IMAGES':
           return  {

               ...state, 
               dogThreeRandomImages: action.payload

            }
        
        case 'SET_RANDOM_NUMBER':
            return {
                ...state,
                setRandomNumber: action.payload
            }
        case 'ANSWERS':
            return {
                ...state,
                answers: action.payload
            }
        case 'SHOW_RIGHT_IMAGE':
            return {
                ...state,
                showRightImage: action.payload
            }
        default:
            return state
}}


export default reducer