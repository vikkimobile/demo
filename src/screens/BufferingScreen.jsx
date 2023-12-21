import React from 'react'
import "../styles/buffering.css"
import companylogo from "../assets/companylogo.svg"

const BufferingScreen = () => {

  return (
    <div className="loading-screen">
      <img src={companylogo} alt="" className='loading_logo'/>

</div>
    )
}

export default BufferingScreen