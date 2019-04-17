// REACT
  import React from "react";

// REDUX
  // import { connect } from "net";
  import { connect } from 'react-redux'

// COMPONENTS
  import Character from "./Character";
  
// MATERIAL UI
  import { Paper, Button, Card } from '@material-ui/core'

// STYLED COMPONENTS
  import styled from 'styled-components'

// ACTION CREATOR
  import { getCharacters } from '../actions'

  // -- ** START CODE ** -- //
// -- ** START CODE ** -- //

const Styled_Paper = styled(Paper)`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 33%;
  margin: 50px auto 0px auto;
`;

const Styled_Button = styled(Button)`
  display: flex;
  width: 50%;
`;

// Fix Color Rendering 
const Styled_Card = styled(Card)`
  display: flex;
  
  .error {
    color: yellow
  }
  .fetching {
    color: red
  }
`;



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
      <Styled_Paper>
        <h2>Star Wars Fight Club!</h2>
        <Styled_Button
          onClick={ clickHandler_getCharacters }
        >
          Get Characters
        </Styled_Button>
        <Styled_Card className='error'>
          { props.error && <p>{props.error}</p> }
        </Styled_Card>
        <Styled_Card className='fetching'>
          { props.isFetching && <p>Calm Yourself - The Characters Are Loading</p> }
        </Styled_Card>
      </Styled_Paper>
      <Styled_Paper>
        { props.characters.results && 
            props.characters.results.map( character => {
              return <Character key={character.name} character={character} />
            })
        }
      </Styled_Paper>
    </div>
  );
};

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  err: state.charsReducer.err,
  isFetching: state.charsReducer.isFetching

})

export default connect(mapStateToProps, { getCharacters }) (CharacterList);