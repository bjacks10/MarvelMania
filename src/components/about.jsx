import React, {Component} from 'react';
import MoviesFeatures from './movieFeatures';
import $ from 'jquery';
import Popper from 'popper.js';
import { Link } from "react-router-dom";
import aboutIcon from "../icons/about-icon.svg";

class About extends Component {
    state = { 

    }

    render() { 
        const color ="#242E86"
        return ( 
            <div>
                <div className="headers">
                    <div style={{overflow:"hidden"}}>
                    <div className="bg-image-about"></div>
                    </div>
                    <div>
                        <div className="bg-text">                            
                        <div style={{justifyContent:"center", marginTop:"100px"}} className="row">
                            <h1 style={{fontSize:"50px", marginRight:"650px"}} className="header-text">About</h1>
                            <img src={aboutIcon}></img>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                <div style={{width:"840px", justifyContent:"center", margin:"auto", marginTop:"50px"}}>
                <h1 style={{marginBottom:"40px", color:"#242E86", textAlign:"left", fontWeight:"normal"}}>About Marvel Mania</h1>
                <p style ={{fontSize: "17px", textAlign:"left", marginBottom:"50px"}}>Marvel Mania is a website dedicated to giving users and Marvel fans various information about the movies of the Marvel Cinematic Universe (MCU). Not only does this site contain updates for upcoming movies and special behind the scenes footage, but it also allows users to track their favorite movies and figure out which MCU movies to watch next. </p>
                <h1 style={{marginBottom:"40px", textAlign:"left",color:"#242E86", fontWeight:"normal"}}>About The MCU</h1>
                <p style ={{fontSize: "17px", textAlign:"left", marginBottom:"50px"}}>The Marvel Cinematic Universe (MCU) is a media franchise centered on a series of superhero films, comic books, short films, television series, and digital series. The MCU is comprised of 3 phases containing all of the movies and series. Phase 1 began in 2008, Phase 2 in 2013, and Phase 3 in 2016.</p>
                <h1 style={{marginBottom:"40px", color:"#242E86", textAlign:"left", fontWeight:"normal"}}>Where the MCU Stands After Phase 3</h1>
                <p style ={{fontSize: "17px", textAlign:"left", marginBottom:"50px"}}>Phase 3 concluded with the popular 2019 film, Avengers: Endgame. At the end of this film, the fate of many characters is left undetermined. With that in mind, the Marvel fanbase also says goodbye to some of their favorite characters in this phase. Vision and Loki were killed in Avengers: Infinity War (2018), 
                and did not return in Avengers: Endgame, which proves their deaths to be true. However, Vision will return in the series WandaVision, which aired on January 15, 2021, and Loki will return in the series Loki, which airs in May of 2021. In Avengers: Endgame (2019), both Iron Man and Black Widow were killed either obtaining or using one or more of the Infinity Stones. Black Widow will return in the Black Widow movie coming out in 2021, but it will represent only her past. Iron Man is not set to return in any future MCU movies. The
                other questionable character departure is from Captain America who chooses to go back in time to live a life with his true love, Peggy Carter. We see him in his last appearance in the MCU as an old man, who we assume dies of old age sometime after Avengers: Endgame. As for the other characters, we will see how they cope and move on in the upcoming Phase 4 and Phase 5 movies and series like The Falcon and The Winter Soldier, Doctor Strange II, and Thor: Love and Thunder.</p>
                </div>
                </div>
            </div>
         );
    }
}
 
export default About;