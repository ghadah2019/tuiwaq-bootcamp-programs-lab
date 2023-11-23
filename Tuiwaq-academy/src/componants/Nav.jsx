import React from 'react'
import logo from '../assets/logo.png';
import '../App.css'


function Nav(props) {
  return (
    <div className='div-row'>

       
    
     <p className='nav1'>{props.signin}</p>
      <p className='nav1'>  {props.test_center}</p>
      <p className='nav1'> {props.academies}</p>
      <p className='nav1'> {props.about}</p>
      <p className='nav1'> {props.bootcamps}</p>
      <p className='nav1'> {props.main}</p>
      <img src={logo} alt="Logo" className="App-logo" />
     

    </div>
  )
}

export default Nav