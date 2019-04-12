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
    <React.Fragment>
      <h2>Star Wars Characters</h2>
      <button
        onClick={ clickHandler_getCharacters }
      >Get Characters</button>
      { props.error && <p>{props.error}</p> }
      { props.isFetching && <p>Calm Yourself - The Characters Are Loading</p> }
      
      {/* <ul>
        {
          props.err && 
          (
            <h2>{props.err}</h2>
          )
        }
        {
          props.characters ? 
        (
          props.characters.map(character => {
            return <Character key={character.name} character={character} />;
          })
        )
        :
        (
          <button
            onClick={clickHandler_getCharacters}
          >Get Characters</button>
        )
        }
      </ul> */}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  characters: state.characters,
  err: state.err,
  isFetching: state.isFetching

})

export default connect(mapStateToProps, { getCharacters }) (CharacterList);