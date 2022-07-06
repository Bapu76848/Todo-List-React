import React from 'react'

const Todos = (props) => {
  return (
      <>
        <li>{props.text}</li>
        <button onClick={(id)=>{
            props.onSelect(props.id);
        }}>Delete</button>
      </>
  )
}

export default Todos