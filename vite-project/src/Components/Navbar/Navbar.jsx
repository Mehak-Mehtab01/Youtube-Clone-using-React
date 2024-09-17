import React from 'react'
import style from './Navbar.module.css'
import Seachimg from '../../assets/search.png'; 
import Micimg from '../../assets/mic.png';
import Createimg from '../../assets/Create video.png';
import Dotmenuimg from '../../assets/Circle menu.png';
import Bellimg from '../../assets/bell.png';
import  Womanimg from '../../assets/woman.png';
const Navbar = () => {
  return (
    <div>
      <>
      <nav>
    <div className={style.nav}>
    <input type="text" placeholder='Search' className={style.searchbar} />
   <div className={style.imgdiv}>
   <img src={Seachimg} alt=""  className={style.searchimg}/>
   <img src={Micimg} alt=""  className={style.Micimg}/>
   <img src={Createimg} alt=""  className={style.Createimg}/>
   <img src={Dotmenuimg} alt=""  className={style.Dotmenuimg}/>
   <img src={Bellimg} alt=""  className={style.Bellimg}/>
   <img src={Womanimg} alt=""  className={style.Womanimg}/>
   </div>
    </div>
      </nav>
      <hr  className={style.hr3}/>
      </>
    </div>
  )
}

export default Navbar
