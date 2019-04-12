// AXIOS
    import axios from 'axios'

// ACTION TYPES
    export const SWAPI_FETCHING = 'SWAPI_FETCHING'    
    export const SWAPI_SUCCESS  = 'SWAPI_SUCCESS' 
    export const SWAPI_FAILURE  = 'SWAPI_FAILURE'

// SET ONCLICK ACTION TO FUNCTION 
    export const getCharacters = () => ({
        type: SWAPI_FETCHING
    })

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

// ACTION CREATOR --> thunk (a function that returns a function)
    // - V1 - // -> Verbose 
        // export const swapi_success = () => {
        //     return dispatch => {
        //         dispatch ({ type: SWAPI_SUCCESS})
        //     }
        // }
    // - V2 - // -> Condensed
    export const swapi_success = () => dispatch => {
        // STEP 1
            // DISPATCH START ACTION -> update UI to show dataFETCHING
            dispatch({ type: SWAPI_FETCHING})
        // STEP 2
            // start API call
        const request = axios.get('https://swapi.co/api/people/');
            // THEN
            request.then( ( { data } ) => {
                
                console.log(data)
                // DISPATCH NEW ACTION
                dispatch({
                    type: SWAPI_SUCCESS,
                    payload: data.data
                })
            })
            // CATCH
            .catch( ( err ) => {
                console.log(err)
                // DISPATCH NEW ACTION
                dispatch({
                    type: SWAPI_FAILURE,
                    error: err
                })
            })
    }