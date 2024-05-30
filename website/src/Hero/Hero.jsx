import React from 'react'
import './HeroStyle.css' 
import { Link } from 'react-router-dom'

const Hero = (props) => {
  return (
    <div className={props.cName} >
      <img src={props.HeroImage} alt='image'/>
      <div className={props.heroText}>
        <h1 className={props.hText}>{props.title}</h1>
        <p className={props.ptext}>{props.text}</p>
        <Link to={props.url} className={props.btnClass}>{props.btnText}</Link>
      </div>
    
    </div>
  )
}

export default Hero