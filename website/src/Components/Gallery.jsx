import React from 'react'
import Car from './Cars'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const Gallery = () => {
  function display(){
    return Car.map((car,index)=>(
      <div key={index}style={{border:"1px solid black",
        borderRadius:"10px",
        boxShadow:"5px 5px 5px",
        padding:"20px",
        textAlign:"center",
        display:"inline-block",
        maxWidth:"550px",
        margin:"10px"}}>
        <img src={car.image} alt='car'/>
        <div>{car.title}</div>
      </div>
    ))
  }
  return (
    <div>
    <NavBar/>
    {display()}
    <div>
     <Link to={"/"}><button>Return</button></Link> 
    </div>
    <div style={{marginTop:"40px"}}>
      <p>&copy; {new Date().getFullYear()} <a href="https://www.instagram.com/dandieautoworld/" target='blank'>DandieAutoWorld</a></p>
    </div>
    </div>
  )
}

export default Gallery