import React from "react";

const Character = props => {
  return (
    <div>
      <li>{`${props.character.name} -- weighing in at an INCREDIBLE ${props.character.mass} mass units`}</li>
      
    </div>
  )
};

export default Character;
