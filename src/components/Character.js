// REACT
  import React from "react";

// MATERIAL UI
  import { Card } from '@material-ui/core'

// STYLED COMPONENTS
  import styled from 'styled-components'

// -- ** START CODE ** -- //
// -- ** START CODE ** -- //

const Styled_Card = styled(Card)`
  display: flex;
  flex-direction: column;

  margin: 5px 0px;
  padding: 10px;

  color: blue;
`;

const Character_Title = styled.h2`
  display: flex;
  justify-content: center;
  margin: 0px 0px 15px 0px
`;
const Card_Text = styled.h4`
  display: flex;
  justify-content: center;
  margin: 0px 0px 15px 0px
`;

const Character_Attribute = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px
`;

const Character = props => {
  return (
    <Styled_Card>
      <Character_Title>
        {`${props.character.name}`}
      </Character_Title>
      <Card_Text>
        weighing in at an INCREDIBLE
      </Card_Text>
      <Character_Attribute>
      {`${props.character.mass} mass units`}
      </Character_Attribute>

      {/* <li>{`${props.character.name} -- weighing in at an INCREDIBLE ${props.character.mass} mass units`}</li> */}
      {/* {`${props.character.name}`
      </br>
      `weighing in at an INCREDIBLE ${props.character.mass} mass units`}</li> */}
    </Styled_Card>
  )
};

export default Character;
