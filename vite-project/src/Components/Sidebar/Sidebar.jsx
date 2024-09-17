import React from 'react';
import style from './Sidebar.module.css';
import Menu from '../../assets/icons8-menu-100.png'; 
import Youtube from '../../assets/youtube.png'; 
import Homeimg from '../../assets/home.png'; 
import Explimg from '../../assets/explore.png'; 
import Shortimg from '../../assets/short.png'; 
import Subscrimg from '../../assets/subscription.png'; 
import Watchimg from '../../assets/clock.png'; 
import Historyimg from '../../assets/full clock.png'; 
import Libraryimg from '../../assets/library.png'; 
import Likedimg from '../../assets/liked.png'; 
import Moreimg from '../../assets/top.png'; 
import Videoimg from '../../assets/video.png'; 
import Codeimg from '../../assets/Code.png'; 
import Figmaimg from '../../assets/figma.png'; 
import Akaimg from '../../assets/Akatsuki.png'; 
import Evalutionimg from '../../assets/evalution.png'; 
import Beastimg from '../../assets/beast.png'; 
import Greenimg from '../../assets/green.png'; 
import WsCubeimg from '../../assets/wscube.png'; 

const Sidebar = () => {
  return (
    <div className={style.main}>
      <div className={style.logos}>
        <img src={Menu} alt="Menu Icon" className={style.menu} />  
        <img src={Youtube} alt="YouTube Icon" className={style.youtube} />  
        <h3 className={style.youtubeh}>YouTube</h3>
      </div>
      <div className={style.firstRow}>
        <div className={style.home}>
          <img src={Homeimg} alt="Home Icon"  className={style.homeimg}/>
          <h3 className={style.homeHead}>Home</h3>
        </div>
        <div className={style.explore}>
          <img src={Explimg} alt="Explore Icon" className={style.explimg}/>
          <h3 className={style.exploreHead}>Explore</h3>
        </div>
        <div className={style.short}>
          <img src={Shortimg} alt="Shorts Icon" className={style.shortimg}/>
          <h3 className={style.shortHead}>Shorts</h3>
        </div>
        <div className={style.subscriptions}>
          <img src={Subscrimg} alt="Subscriptions Icon" className={style.subscripimg} />
          <h3 className={style.subscriptionsHead}>Subscriptions</h3>
        </div>
        <hr className={style.hr1} />
        <div className={style.secondRow}>
        <div className={style.library}>
          <img src={Libraryimg} alt="library Icon"  className={style.libraryimg}/>
          <h3 className={style.libraryHead}>Library</h3>
        </div>
        <div className={style.history}>
          <img src={Historyimg} alt="history Icon"  className={style.historyimg}/>
          <h3 className={style.historyHead}>History</h3>
        </div>
        <div className={style.Video}>
          <img src={Videoimg} alt="Video Icon"  className={style.Videoimg}/>
          <h3 className={style.VideoHead}>Videos</h3>
        </div>
        <div className={style.Watch}>
          <img src={Watchimg} alt="Watch Icon"  className={style.Watchimg}/>
          <h3 className={style.WatchHead}>Watchlater</h3>
        </div>
        <div className={style.Liked}>
          <img src={Likedimg} alt="Liked Icon"  className={style.Likedimg}/>
          <h3 className={style.LikedHead}>Likedvideos</h3>
        </div>
        <div className={style.More}>
          <img src={Moreimg} alt="More Icon"  className={style.Moreimg}/>
          <h3 className={style.MoreHead}>Showmore</h3>
        </div>
        
        </div>
        <hr className={style.hr2} />
        <div className={style.thirdRow}>
          <div className={style.heading}>
            <h3 className={style.headingss}>Subscriptions</h3>
          </div>
          <div className={style.Code}>
            <img src={Codeimg} alt=""  className={style.Codeimg}/>
            <h3 className={style.CodeHead}>Code</h3>
          </div>
          <div className={style.Figma}>
            <img src={Figmaimg} alt=""  className={style.Figmaimg}/>
            <h3 className={style.MoreHead}>Figma</h3>
          </div>
          <div className={style.Aka}>
            <img src={Akaimg} alt=""  className={style.Akaimg}/>
            <h3 className={style.AkaHead}>Akatuski</h3>
          </div>
          <div className={style.Evalution}>
            <img src={Evalutionimg} alt=""  className={style.Evalutionimg}/>
            <h3 className={style.EvalutionHead}>CodeEvalution</h3>
          </div>
          <div className={style.Beast}>
            <img src={Beastimg} alt=""  className={style.Beastimg}/>
            <h3 className={style.BeastHead}>MrBeast</h3>
          </div>
          <div className={style.Green}>
            <img src={Greenimg} alt=""  className={style.Greenimg}/>
            <h3 className={style.GreenHead}>GreenTV</h3>
          </div>
          <div className={style.WsCube}>
            <img src={WsCubeimg} alt=""  className={style.WsCubeimg}/>
            <h3 className={style.WsCubeHead}>WsCubeTech</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
