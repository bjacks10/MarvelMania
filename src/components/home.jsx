import React, {Component} from 'react';
import MoviesFeatures from './movieFeatures';
import $ from 'jquery';
import Popper from 'popper.js';
import { Link } from "react-router-dom";
import homeIcon from "../icons/home-icon.svg";
import CharacterFeatures from './characterFeatures';

class Home extends Component {
    state = { 

    }

    render() { 
        return ( 
            <div>
                <div className="headers">
                    <div style={{overflow:"hidden"}}>
                    <div className="bg-image-home"/>
                    </div>
                        <div className="bg-text-home">
                            <div style={{justifyContent:"center", marginTop:"100px"}} className="row">
                            <h1 style={{marginRight:"650px", fontSize:"50px"}} className="header-text">Home</h1>
                            <img src={homeIcon}></img>
                            </div>
                        </div>
                </div>
                <div className="container">
                <div style={{width:"840px", justifyContent:"center", margin:"auto", marginTop:"50px"}}>
                <h1 style={{marginBottom:"40px", color:"#242E86", textAlign:"left", fontWeight:"normal"}}>Upcoming in Phase 4</h1>
                <MoviesFeatures/>
                <div className="BehindTheScenes">
                    <h1 style={{marginBottom:"40px", marginTop:"40px", color:"#242E86", textAlign:"left", fontWeight:"normal"}}>Bonus Videos</h1>
                        <div className="row">
                        <div className="col">
                        <div className="BonusVids" style={{ height:"198px", width:"252px", borderColor:'black', borderStyle:"solid", borderWidth:"4px 4px 0px 4px"}}></div>
                        <div className="row">
                            <div style={{color:"rgb(255,255,255,0.6)",fontWeight:"bold", backgroundColor:"black", marginLeft:"15px", width:"200px", height:"52px", display:"flex", alignItems:"center", fontSize:"12px"}}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BLOOPERS
                            </div>
                            <Link to="/bloopers" style={{backgroundColor:"black", width:"52px", height:"52px", color:"white",alignItems:"center", display:"flex", fontWeight:"bold", marginLeft:"0px", fontSize:"12px"}}  type="button" class="btnBonus">GO</Link>
                        </div>
                        </div>

                        <div className="col">
                        <div className="BonusVidsBTS" style={{ height:"198px", width:"252px", borderColor:'black', borderStyle:"solid", borderWidth:"4px 4px 0px 4px"}}></div>
                        <div className="row">
                            <div style={{backgroundColor:"black", marginLeft:"15px", width:"200px", height:"52px",color:"rgb(255,255,255,0.6)",fontWeight:"bold", display:"flex", alignItems:"center", fontSize:"12px"}}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BEHIND THE SCENES
                            </div>
                            <Link to="/behind-the-scenes" style={{backgroundColor:"black", width:"52px", height:"52px", color:"white",alignItems:"center", display:"flex", fontWeight:"bold", marginLeft:"0px", fontSize:"12px"}}  type="button" class="btnBonus">GO</Link>
                        </div>
                        </div>
                        <div className="col">
                        <div className="BonusVidsDS" style={{height:"198px", width:"252px", borderColor:'black', borderStyle:"solid", borderWidth:"4px 4px 0px 4px"}}></div>
                        <div className="row">
                            <div style={{backgroundColor:"black", marginLeft:"15px", width:"200px", height:"52px",color:"rgb(255,255,255,0.6)",fontWeight:"bold", display:"flex", alignItems:"center", fontSize:"12px"}}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DELETED SCENES
                            </div>
                            <Link to="/deleted-scenes" style={{backgroundColor:"black", width:"52px", height:"52px", color:"white",alignItems:"center", display:"flex", fontWeight:"bold", marginLeft:"0px", fontSize:"12px"}}  type="button" class="btnBonus">GO</Link>
                        </div>
                        </div>
                        </div>
                </div>
                <div className="MeetTheCharacters">
                    <h1 style={{marginBottom:"40px", marginTop:"40px", color:"#242E86", textAlign:"left", fontWeight:"normal"}}>Meet The Characters</h1>
                    <CharacterFeatures/>
                </div>
                <div className="footerHolder">
                <h4 style={{marginBottom: "45px", textAlign:"center"}}>Disclaimer</h4>
                <div className="footer">
                    <p>We are in no way affliliated with Marvel Studios, The Walt Disney Company, Marvel Comics, Paramount, Universal Studios, Netflix, ABC, ABC Freeform, or ANY of the companies or people that produce the Marvel Cinematic Universe films. We are simply a fan site run by fans who are here to help enhance the experience of being a Marvel film fan.</p>
                </div>
                </div>
                </div>
                </div>
            </div>
         );
    }
}
 
export default Home;