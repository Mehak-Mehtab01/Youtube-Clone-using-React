import React from 'react'
import style from './Suggestion.module.css'
import Greaterimg from '../../assets/Greaterthan.png'
const Suggestions = () => {
  return (
    <div>
      <>
      <div className={style.mainsuggestion}>
      <h4 className={style.all}>All</h4>
      <h4 className={style.logarithm}>Logarithm</h4>
      <h4 className={style.CokeStudio}>Coke Studio</h4>
      <h4 className={style.ux}>UX</h4>
      <h4 className={style.iphone16}>iphone16</h4>
      <h4 className={style.webdevelopment}>Web Development</h4>
      <h4 className={style.Pakistanidramas}>Pakistani Dramas</h4>
      <img src={Greaterimg} alt="" srcset=""  className={style.Greaterimg}/>
      </div>
      <hr  className={style.hr4}/>
      </>
    </div>
  )
}

export default Suggestions
