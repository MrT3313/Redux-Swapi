// AXIOS
    import axios from 'axios'

// ACTION TYPES
    export const SWAPI_FETCHING = 'SWAPI_FETCHING'    
    export const SWAPI_SUCCESS  = 'SWAPI_SUCCESS' 
    export const SWAPI_FAILURE  = 'SWAPI_FAILURE'

// ** -- LAMBDA NOTES -- ** //
    // our action creator will be a function that returns a function
    // the url to fetch characters from is `https://swapi.co/api/people/`
    // remember that now we have controll over our thunk-based action creator
// ** -- END LAMBDA NOTES - ** //

// ** -- THUNKS - ** //
    // -!!- THUNK - function that returns a function
    // -!!- THUNK can be used as action creator

    // previous ACTION CREATORS returned an OBJECT
        // EX: export const getCharacters = () => ({ Type: ABC_ABC })
        // --> ^ = annon function that returns ACTION OBJECT

    // -!- verbose THUNK
        // export const getCharacters = () => {
        //     return (dispatch) => {
        //         dispatch({type: ABC_ABC})
        //     }
        // }
        // --> ^ annon function that returns anon function with dispatch passed into it
        // --> ^^ returns an ACTION OBJECT by calling dispatch

    // -- ACTION CREATOR -- //
    export const getCharacters = () => {
        // -- THUNK -- // 
        return (dispatch) => {
            // dispatch a starting action
            dispatch({type: SWAPI_FETCHING})
            // THEN ... start the API call
            axios
            .get('https://swapi.co/api/people/')
                .then( res => {
                    console.log('SUCCESSFUL API CALL: ', res)
                    dispatch({
                        type: SWAPI_SUCCESS,
                        payload: res.data
                    })
                })
                .catch( err => {
                    console.log( err )
                    dispatch({
                        type: SWAPI_FAILURE,
                        payload: err
                    })
                })
        }
        // ** -- END THUNK - ** //
    }
// -- ** END ACTION CREATOR ** -- //



