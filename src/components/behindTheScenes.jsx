import React from 'react';
import ReactPlayer from 'react-player';
import Avengers from '../images/HeaderPics/avengers2012.jpg';
import InfinityWar from '../images/HeaderPics/infinitywar2018.jpg';
import WinterSoldier from '../images/HeaderPics/wintersoldier.jpg';

const BehindTheScenes = () => {
    return ( 
        <div>
        <div className="headers">
        <nav aria-label="breadcrumb">
        <ol style={{backgroundColor:"#1B2368", borderRadius:"0"}} className="breadcrumb">
            <li className="breadcrumb-item"><a style={{color:"white", fontSize:"12px",fontWeight:"bold", marginLeft:"15px"}} href="/home">HOME</a></li>
            <li style={{ fontSize:"12px", fontWeight:"bold", color:"rgb(255,255,255,.5)"}} className="breadcrumb-item active" aria-current="page">BEHIND THE SCENES</li>
        </ol>
        </nav>
        </div>
        <div style={{width:"840px", justifyContent:"center", margin:"auto", marginTop:"50px"}}>
            <h1 style={{marginBottom:"40px", color:"#242E86", textAlign:"left", fontWeight:"normal"}}>Behind The Scenes</h1>
            <div>
            <ReactPlayer
                height="475px"
                width="840px" 
                url="https://www.youtube.com/watch?v=OHtZ1W2Y76I"
                controls="true"
                style={{margin:"auto", justifyContent:"center", display:"flex"}}
                light={WinterSoldier}
            />
            <h5 style={{textAlign:"center", marginTop:"12px", marginBottom:"70px",color:"#242E86"}}>Behind The Scenes Footage from Captain America: The Winter Soldier (2014)</h5>
            </div>
            <div>
            <ReactPlayer
                height="475px"
                width="840px"
                url="https://www.youtube.com/watch?v=lnHX3eg2oxI"
                controls="true"
                style={{margin:"auto", justifyContent:"center", display:"flex"}}
                light={Avengers}
            />
            <h5 style={{textAlign:"center", marginTop:"12px", marginBottom:"70px",color:"#242E86"}}>Behind The Scenes Footage from The Avengers (2012)</h5>
            </div>

            <div>
            <ReactPlayer 
                height="475px"
                width="840px"
                url="https://www.youtube.com/watch?v=gM_y2ATCpXA"
                controls="true"
                style={{margin:"auto", justifyContent:"center", display:"flex"}}
                light={InfinityWar}
            />
            <h5 style={{textAlign:"center", marginTop:"12px", marginBottom:"70px",color:"#242E86"}}>Behind The Scenes Footage from Avengers: Infinity War (2018)</h5>
            </div>
        </div>
        </div>
     );
}
 
export default BehindTheScenes;