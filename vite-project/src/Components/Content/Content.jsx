import React from 'react'
import style from './Content.module.css'
import Img1 from  '../../assets/img1.png'
import Img1a from  '../../assets/img1a.png'
import Img2 from  '../../assets/img2.png'
import Img2a from  '../../assets/img2a.png'
import Img3 from  '../../assets/img6.png'
import Img3a from  '../../assets/img3a.png'
import Img4 from  '../../assets/img4.png'
import Img4a from  '../../assets/img4a.png'
import Img5 from  '../../assets/img5.png'
import Img5a from  '../../assets/img5a.png'
import Img6 from  '../../assets/img3.png'
import Img6a from  '../../assets/img3a.png'
const Content = () => {
  return (
    <div>
      <>
      <div className={style.content}>
      <div className={style.content1}>
    <div className={style.contentdiv1}>
      <img src={Img1} alt="" className={style.contentimg1} />
       <div className={style.contentdivpara1}>
        <div  className={style.contentdivpara1a}>
          <img src={Img1a} alt="" className={style.contentimg1a} />
          <p className={style.para1}>Create a Responsive coffee website with Html, Css & Javascript</p>
        </div>
        <div className={style.contentdivpara1b}>
       <p className={style.p1a} >CodingNepal</p>
       <p className={style.p1b} >2.2k views . 2days ago </p>
      
        </div>
       </div>
    </div>
    <div className={style.contentdiv2}>
      <img src={Img2} alt="" className={style.contentimg2} />
       <div className={style.contentdivpara2}>
        <div  className={style.contentdivpara2a}>
          <img src={Img2a} alt="" className={style.contentimg2a} />
          <p className={style.para2}>CSS Tutorial for Beginners|Complete CSS with Projects,Notes & code</p>
        </div>
        <div className={style.contentdivpara2b}>
       <p className={style.p2a} >Apna College</p>
       <p className={style.p2b} >8.3M views . 1 year ago </p>
      
        </div>
       </div>
    </div>
    <div className={style.contentdiv3}>
      <img src={Img3} alt="" className={style.contentimg3} />
       <div className={style.contentdivpara3}>
        <div  className={style.contentdivpara3a}>
          <img src={Img3a} alt="" className={style.contentimg3a} />
          <p className={style.para3}>Best of Miniature Cooking|40000+ Easy Miniature Fast Food  Cooking....... </p>
        </div>
        <div className={style.contentdivpara3b}>
       <p className={style.p3a} >Mini Yummy</p>
       <p className={style.p3b} >2.2M views . 7 months ago </p>
      
        </div>
       </div>
    </div>
      </div>
      <div className={style.content2}>
    <div className={style.contentdiv4}>
      <img src={Img4} alt="" className={style.contentimg4} />
       <div className={style.contentdivpara4}>
        <div  className={style.contentdivpara4a}>
          <img src={Img4a} alt="" className={style.contentimg4a} />
          <p className={style.para4}>Sofia solves Mother's Day mayhem | Sofia The First | S1 EP 26 |...</p>
        </div>
        <div className={style.contentdivpara4b}>
       <p className={style.p4a} >Disney India</p>
       <p className={style.p4b} >298k views . 1 days ago </p>
      
        </div>
       </div>
    </div>
    <div className={style.contentdiv5}>
      <img src={Img5} alt="" className={style.contentimg5} />
       <div className={style.contentdivpara5}>
        <div  className={style.contentdivpara5a}>
          <img src={Img5a} alt="" className={style.contentimg5a} />
          <p className={style.para5}>This Time I'm Sure - iPhone 15 Pro Max vs Samsung S24 Ultra | iPhone vs Samsung</p>
        </div>
        <div className={style.contentdivpara5b}>
       <p className={style.p5a} >TechBar</p>
       <p className={style.p5b} >2.3M views . 7 months ago </p>
      
        </div>
       </div>
    </div>
    <div className={style.contentdiv6}>
      <img src={Img6} alt="" className={style.contentimg6} />
       <div className={style.contentdivpara6}>
        <div  className={style.contentdivpara6a}>
          <img src={Img6a} alt="" className={style.contentimg6a} />
          <p className={style.para6}>How to Start Web Development? Complete Roadmap for FullStack........ </p>
        </div>
        <div className={style.contentdivpara6b}>
       <p className={style.p6a} >Apna College</p>
       <p className={style.p6b} >3.5M views . 2 years ago </p>
      
        </div>
       </div>
    </div>
      </div>

      </div>
      </>
    </div>
  )
}

export default Content
