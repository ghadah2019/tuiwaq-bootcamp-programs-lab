import React from 'react'
import '../App.css'
function Cardss(props) {
  return (
    <div className= "cards-container">
    <div className='cards-box-container purbleC grayC'>
        <div className={props.name === "برنامج"? "cards-name  ": props.name === "معسكر"? "cards-name purple  ": "cards-name gray"}>{props.name}</div>
        <div className='cards-title'>{props.title}</div>
        <div className='cards-timeAndlocation'>
            <i className='cards-time'>{props.time}</i>
            <i className='cards-palce'>{props.place}</i>

            
        </div>
        <div className='cards-startTimeandButton'>
            <button  className={props.btn === "التفاصيل"? "cards-btn-details": props.btn === "التفاصييل"? "cards-btn-details purpleBtn  purbleC": "cards-btn-details grayBtn grayC"}>{props.btn}</button>
            <i className='cards-icon-start'>{props.start}</i>

        </div>
    </div>
</div>

  )
}

export default Cardss