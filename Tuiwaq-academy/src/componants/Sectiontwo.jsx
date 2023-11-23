import React from 'react'
import '../App.css'
import logo from '../assets/burger1-removebg-preview.png';

function Sectiontwo(props) {
  return (
    <div className='div-row1'>

      
<img src={logo} alt="Logo" className="App-logo1" />
        <button className='btn2'>{props.young}</button>
        <button className='btn1'>{props.olders}</button>
        <h3>{props.bootcamps_programs}</h3>
       
    </div>
  )
}

export default Sectiontwo