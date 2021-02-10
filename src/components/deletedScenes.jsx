import React from 'react';
import ReactPlayer from 'react-player';
import CivilWar from '../images/HeaderPics/civilwar1.jpg';
import Endgame from '../images/HeaderPics/endgame1.jpg';
import Ragnarok from '../images/HeaderPics/ragnarok.jpg';

const DeletedScenes = () => {
    return ( 
        <div>
        <div className="headers">
        <nav aria-label="breadcrumb">
        <ol style={{backgroundColor:"#1B2368", borderRadius:"0"}} className="breadcrumb">
            <li className="breadcrumb-item"><a style={{color:"white", fontSize:"12px",fontWeight:"bold", marginLeft:"15px"}} href="/home">HOME</a></li>
            <li style={{ fontSize:"12px", fontWeight:"bold", color:"rgb(255,255,255,.5)"}} className="breadcrumb-item active" aria-current="page">DELETED SCENES</li>
        </ol>
        </nav>
        </div>
        <div style={{width:"840px", justifyContent:"center", margin:"auto", marginTop:"50px"}}>
            <h1 style={{marginBottom:"40px", color:"#242E86", textAlign:"left", fontWeight:"normal"}}>Deleted Scenes</h1>

            <div>
            <ReactPlayer
                height="475px"
                width="840px"
                url="https://www.youtube.com/watch?v=G8Cg_a3oBbg"
                controls="true"
                style={{margin:"auto", justifyContent:"center", display:"flex"}}
                light={CivilWar}
            />
            <h5 style={{textAlign:"center", marginTop:"12px", marginBottom:"70px",color:"#242E86"}}>Deleted Scenes from Captain America: Civil War (2016)</h5>
            </div>

            <div>
            <ReactPlayer 
                height="475px"
                width="840px"
                url="https://www.youtube.com/watch?v=wVyooKykWOA"
                controls="true"
                style={{margin:"auto", justifyContent:"center", display:"flex"}}
                light={Endgame}
            />
            <h5 style={{textAlign:"center", marginTop:"12px", marginBottom:"70px",color:"#242E86"}}>Deleted Scenes from Avengers: Endgame (2019)</h5>
            </div>

            <div>
            <ReactPlayer 
                height="475px"
                width="840px"
                url="https://www.youtube.com/watch?v=8YULzIOYTeM"
                controls="true"
                style={{margin:"auto", justifyContent:"center", display:"flex"}}
                light={Ragnarok}
            />
            <h5 style={{textAlign:"center", marginTop:"12px", marginBottom:"70px",color:"#242E86"}}>Deleted Scenes from Thor: Ragnarok (2017)</h5>
            </div>
            
        </div>
        </div>
     );
}
 
export default DeletedScenes;

