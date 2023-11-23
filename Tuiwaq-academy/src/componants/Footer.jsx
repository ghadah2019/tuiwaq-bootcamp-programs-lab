import React from 'react'
import logo from '../assets/logo.png';

import logo1 from '../assets/logo11.png';
import logo2 from '../assets/foooter.png';
import '../App.css';

function Footer(props) {
  return (
   
  
    <div className='div-row2' >
    
        

<img src={logo1} alt="Logo" className="App-logo2" />

<div className='diiv-row'>
   
<img src={logo2} alt="Logo" className="App-logo3" />
{props.twitter}
</div>

<div>
{props.twitter}
{/* <img src={logo} alt="Logo" className="App-logo1" />
<img src={logo} alt="Logo" className="App-logo1" />
<img src={logo} alt="Logo" className="App-logo1" />
<img src={logo} alt="Logo" className="App-logo1" /> */}
</div>
<div className='diiv-row'>
<p> {props.condition}</p>  
      <p> {props.privacy} </p>
      </div>
      <div className='diiv-row'>
      <p>{props.academy}</p>
       <p>{props.trainee}</p> 
      </div>
       
       
      <img src={logo} alt="Logo" className="App-logo2" />


    </div>
  )
}

export default Footer