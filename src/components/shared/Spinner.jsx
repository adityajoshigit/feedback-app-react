import React from 'react'
import spinner from '../../assets/loading_spinner.gif';

function Spinner() {
  return (
    <div style={{textAlign: 'center'}}>
      <img src={spinner} alt='Loading...' className="container"/>
    </div>
  )
}

export default Spinner