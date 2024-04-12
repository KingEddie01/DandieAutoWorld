import React from 'react'
import './HeroStyle.css' 

const Hero = (props) => {
  return (
    <div className={props.cName}>
      <img src={props.HeroImage} alt='image'/>
      <div className={props.heroText}>
        <h1 className={props.hText}>{props.title}</h1>
        <p className={props.ptext}>{props.text}</p>
        <a href={props.url} className={props.btnClass}>{props.btnText}</a>
      </div>
    
    </div>
  )
}

export default Hero