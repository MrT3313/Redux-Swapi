// REACT
  import React from "react";

// REDUX
  // import { connect } from "net";
  import { connect } from 'react-redux'

// COMPONENTS
  import Character from "./Character";
  
// ACTION CREATOR
// ?? -> is this supposed to be SWAPI_FETCHING????
  import { getCharacters } from '../actions'

const CharacterList = props => {
  // CLICK HANDLER
  const clickHandler_getCharacters = e => {
    e.preventDefault()
    console.log('<CharacterList /> button click handler')
    console.log('<CharacterList /> PROPS', props)
    // INVOKE ACTION CREATOR
    props.getCharacters()
  }
  
  console.log('props on <CharacterList />', props)
  return (
      <div>
        <h2>Star Wars Characters</h2>
        <button
          onClick={ clickHandler_getCharacters }
        >Get Characters</button>
        { props.error && <p>{props.error}</p> }
        { props.isFetching && <p>Calm Yourself - The Characters Are Loading</p> }
        
        { props.characters.results && 
            props.characters.results.map( character => {
              return <Character key={character.name} character={character} />
            })
        }
      </div>
  );
};

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  err: state.charsReducer.err,
  isFetching: state.charsReducer.isFetching

})

export default connect(mapStateToProps, { getCharacters }) (CharacterList);