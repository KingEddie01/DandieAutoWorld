
import { Link } from "react-router-dom"
import MenuList from "./Menu"
import style from "./NavBarStyle.module.css"

function NavBar(){
  return(
   <nav className={style.main} style={{position:"fixed",}}>
    

      <h1 className={style.dandie}>DandieAutoWorld</h1>
       

      <ul className={style.navMenu}>
          {MenuList.map((item,index)=>{
            return(
              <li key={index}>
                  <Link className={style.navlist}
                  to = {item.url}>
                    <i class={item.icon}></i>{item.title}</Link>
              </li> )
          })}
          <button>Sign Up</button>
      </ul>
    
   </nav>
  )

  
}
export default NavBar  