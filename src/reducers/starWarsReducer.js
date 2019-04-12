
// ACTION TYPES
  import { 
    SWAPI_FETCHING,
    SWAPI_SUCCESS,
    SWAPI_FAILURE 
} from "../actions";


const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  err: '',
  isFetching: false
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SWAPI_FETCHING: 
      console.log('in starWars Reducer -> ACTION',action)
      console.log('in starWars Reducer -> PAYLOAD', action.payload)
      return {
        ...state,
        isFetching: true,
        err: '',
      }












    // case SWAPI_SUCCESS:
    //   console.log(action)
    //   console.log(action.payload)
    //   return {
    //     ...state,
    //     characters: action.payload,
    //     isFetching: false,
    //     err: ''
    //   }
    // case SWAPI_FAILURE:
    //   console.log(action)
    //   console.log(action.payload)
    //   return {
    //       ...state,
    //       isFetching: false,
    //       err: 'Oh LaaaaWWWWWDD you dont messed this up'
    //   }
    default:
      return state;
  }
};
