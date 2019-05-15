
const initialState = {
    dogBreeds: [],
    dogImages: [],
    dogRandomImage: [],
    answers: [],
    dogThreeRandomImages: [],
    setRandomNumber: [],
    answerGameTwo: [],
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
        //console.log("BLUU", action.payload)
           return  {

               ...state, 
               dogThreeRandomImages: action.payload

            }
        case 'ANSWERS_GAME_TWO':
            return {
                ...state,
                answerGameTwo: action.payload
            }
        case 'SET_RANDOM_NUMBER':
       // console.log("aaaaaa", action.payload)
            return {
                ...state,
                setRandomNumber: action.payload
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