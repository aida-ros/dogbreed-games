
const initialState = {
    dogBreeds: [],
    dogImages: [],
    dogRandomImage: [],
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
            //console.log("b", action.payload)
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
        default:
            return state
}}

export default reducer