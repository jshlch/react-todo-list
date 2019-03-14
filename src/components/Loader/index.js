import React from 'react'
import './style.css'

const Loader = ({isLoading}) => {
  return(
    <div className={isLoading ? "lds-ellipsis" : "lds-ellipsis--hidden"}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
   )
}

export default Loader