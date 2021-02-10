import React from 'react';
import ReactPlayer from 'react-player';
import InfinityWar from '../images/HeaderPics/InfinityWar.jpg';
import Avengers from '../images/HeaderPics/avengers.jpg';
import Thor from '../images/HeaderPics/thor.jpg';

const Bloopers = () => {
    return ( 
        <div>
        <div className="headers">
        <nav aria-label="breadcrumb">
        <ol style={{backgroundColor:"#1B2368", borderRadius:"0"}} className="breadcrumb">
            <li className="breadcrumb-item"><a style={{color:"white", fontSize:"12px",fontWeight:"bold", marginLeft:"15px"}} href="/home">HOME</a></li>
            <li style={{ fontSize:"12px", fontWeight:"bold", color:"rgb(255,255,255,.5)"}} className="breadcrumb-item active" aria-current="page">BLOOPERS</li>
        </ol>
        </nav>
        </div>
        <div style={{width:"840px", justifyContent:"center", margin:"auto", marginTop:"50px"}}>
            <h1 style={{marginBottom:"40px", color:"#242E86", textAlign:"left", fontWeight:"normal"}}>Bloopers</h1>

            <div>
            <ReactPlayer 
                height="475px"
                width="840px"
                url="https://www.youtube.com/watch?v=Nb2ZKqINoDY"
                controls="true"
                style={{margin:"auto", justifyContent:"center", display:"flex"}}
                light={InfinityWar}
            />
            <h5 style={{textAlign:"center", marginTop:"12px", marginBottom:"70px",color:"#242E86"}}>Bloopers from Avengers: Infinity War (2018)</h5>
            </div>

            <div>
            <ReactPlayer 
                height="475px"
                width="840px"
                url="https://www.youtube.com/watch?v=wnSTTboKbKs"
                controls="true"
                style={{margin:"auto", justifyContent:"center", display:"flex"}}
                light={Avengers}
            />
            <h5 style={{textAlign:"center", marginTop:"12px", marginBottom:"70px",color:"#242E86"}}>Bloopers from The Avengers (2012)</h5>
            </div>

            <div>
            <ReactPlayer 
                height="475px"
                width="840px"
                url="https://www.youtube.com/watch?v=zlNMmvcRzwk"
                controls="true"
                style={{margin:"auto", justifyContent:"center", display:"flex"}}
                light={Thor}
            />
            <h5 style={{textAlign:"center", marginTop:"12px", marginBottom:"70px",color:"#242E86"}}>Bloopers from Thor (2011), Thor: The Dark World (2013), and Thor: Ragnarok (2017)</h5>
            </div>
            
        </div>
        </div>
     );
}
 
export default Bloopers;