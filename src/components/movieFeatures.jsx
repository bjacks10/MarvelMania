import React from 'react';
import BlackWidowPoster from "../images/UpcomingMoviePics/BlackWidowPoster.jpeg";
import BlackWidow1 from "../images/UpcomingMoviePics/BlackWidow1.jpg";
import BlackWidow2 from "../images/UpcomingMoviePics/BlackWidow2.jpg";
import WandaVisionPoster from "../images/UpcomingMoviePics/WandaVisionPoster.jpg";
import WandaVision1 from "../images/UpcomingMoviePics/WandaVision1.jpg";
import WandaVision2 from "../images/UpcomingMoviePics/WandaVision2.jpg";
import FalconWinterSoldier1 from "../images/UpcomingMoviePics/FalconWinterSoldier1.jpeg";
import FalconWinterSoldier2 from "../images/UpcomingMoviePics/FalconWinterSoldier2.jpg"
import FalconWinterSoldierPoster from "../images/UpcomingMoviePics/FalconWinterSoldierPoster.jpg";
import ShangChi1 from "../images/UpcomingMoviePics/ShangChi1.jpg";
import ShangChi2 from "../images/UpcomingMoviePics/ShangChi2.jpg";
import Eternals1 from "../images/UpcomingMoviePics/Eternals1.png";
import EternalsPoster from "../images/UpcomingMoviePics/EternalsPoster.jpg";
import DoctorStrange1 from "../images/UpcomingMoviePics/DoctorStrange1.jpg";
import DoctorStrange2 from "../images/UpcomingMoviePics/DoctorStrange2.jpeg";
import DoctorStrangePoster from "../images/UpcomingMoviePics/DoctorStrangePoster.png";
import Loki1 from "../images/UpcomingMoviePics/Loki1.png";
import Loki2 from "../images/UpcomingMoviePics/Loki2.jpg";
import LokiPoster from "../images/UpcomingMoviePics/LokiPoster.jpg";

const MoviesFeatures = () => {
    return ( 
        <div style={{width:"840px", maxWidth:"840px", margin:"auto", marginTop:"20px" }} id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel" >
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators active" data-slide-to="0"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
            </ol>
            <div style={{margin:"auto"}} className="carousel-inner">
                <div className="carousel-item active" data-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" href="#collapseExample">
                    <div style={{width:"840px"}} className="collapse" id="collapseExample" >
                        <div className="card card-body">A film about Natasha Romanoff in her quests between the films Civil War and Infinity War. At birth the Black Widow "aka Natasha Romanova" is given to the KGB, which grooms her to become its ultimate operative.</div>
                    </div>
                    <div className="row">
                        <img className="d-block" height="600px" width="370px" src={BlackWidowPoster} alt="First slide"/>
                        <div className="column">
                            <img className="d-block" height="300px" width="470px" src={BlackWidow1} alt="First slide"/>
                            <img className="d-block" height="300px" width="470px" src={BlackWidow2} alt="First slide"/>
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Black Widow</h3>
                            <h5>Release Date: May 7, 2021</h5>
                        </div>
                    </div>
                </div>

                <div className="carousel-item" data-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" href="#collapseExample">
                <div className="collapse" id="collapseExample" >
                <div className="card card-body">Marvel Studios' WandaVision blends the style of classic sitcoms with the Marvel Cinematic Universe in which Wanda Maximoff and Vision – two super-powered beings living their ideal suburban life – begin to suspect that everything is not as it seems.</div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <img className="d-block" height="300px" width="470px" src={WandaVision1} alt="Second slide"/>
                            <img className="d-block" height="300px" width="470px" src={WandaVision2} alt="Second slide"/>
                        </div>
                        <img className="d-block" height="600px" width="370px" src={WandaVisionPoster} alt="Second slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>WandaVision</h3>
                            <h5>Release Date: January 15, 2021</h5>
                        </div>
                    </div>
                </div>

                <div className="carousel-item" data-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" href="#collapseExample">
                <div className="collapse" id="collapseExample" >
                <div className="card card-body">The Falcon and the Winter Soldier is set in a post-Endgame world in which Sam Wilson and Bucky Barnes will have to face a world without Steve Rogers. The void created by his absence will lead to the government installing their own Captain America, John Walker. Walker would go by the code name the U.S. Agent.</div>
                    </div>
                    <div className="row">
                    <img className="d-block" height="600px" width="370px" src={FalconWinterSoldierPoster} alt="Third slide"/>
                        <div className="column">
                            <img className="d-block" height="300px" width="470px" src={FalconWinterSoldier1} alt="Third slide"/>
                            <img className="d-block" height="300px" width="470px" src={FalconWinterSoldier2} alt="Third slide"/>
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>The Falcon and the Winter Soldier</h3>
                            <h5>Release Date: March 19, 2021</h5>
                        </div>
                    </div>
                </div>

                <div className="carousel-item" data-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" href="#collapseExample">
                <div className="collapse" id="collapseExample" >
                <div className="card card-body">Loki is brought to the mysterious Time Variance Authority organization after stealing the Tesseract during the events of Avengers: Endgame (2019), and travels through time altering human history using it, ending up trapped in his own crime thriller.</div>
                    </div>
                    <div className="row">
                    <img className="d-block" height="600px" width="370px" src={LokiPoster} alt="Fourth slide"/>
                        <div className="column">
                            <img className="d-block" height="300px" width="470px" src={Loki1} alt="Fourth slide"/>
                            <img className="d-block" height="300px" width="470px" src={Loki2} alt="Fourth slide"/>
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Loki</h3>
                            <h5>Release Date: May, 2021</h5>
                        </div>
                    </div>
                </div>

                <div className="carousel-item" data-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" href="#collapseExample">
                <div className="collapse" id="collapseExample" >
                <div className="card card-body">Shang-Chi is a master of numerous unarmed and weaponry-based wushu styles, including the use of the gun, nunchaku, and jian.</div>
                    </div>
                    <div className="row">
                    <img className="d-block" height="600px" width="420px" src={ShangChi1} alt="Fifth slide"/>
                    <img className="d-block" height="600px" width="420px" src={ShangChi2} alt="Fifth slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Shang-Chi And the Legend of the Ten Rings</h3>
                            <h5>Release Date: July 9, 2021</h5>
                        </div>
                    </div>
                </div>

                <div className="carousel-item" data-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" href="#collapseExample">
                <div className="collapse" id="collapseExample" >
                <div className="card card-body">After an unexpected tragedy following the events of Avengers: Endgame (2019), the Eternals—an immortal alien race created by the Celestials who have secretly lived on Earth for over 7000 years—reunite to protect humanity from their evil counterparts, the Deviants.</div>
                    </div>
                    <div className="row">
                    <img className="d-block" height="600px" width="370px" src={EternalsPoster} alt="Sixth slide"/>
                    <img className="d-block" height="600px" width="470px" src={Eternals1} alt="Sixth slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Eternals</h3>
                            <h5>Release Date: November 5, 2021</h5>
                        </div>
                    </div>
                </div>

                <div className="carousel-item" data-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" href="#collapseExample">
                <div className="collapse" id="collapseExample" >
                <div className="card card-body">After the events of Avengers: Endgame, Dr. Stephen Strange continues his research on the Time Stone. But an old friend turned enemy seeks to destroy every sorcerer on Earth, messing with Strange's plan and also causing him to unleash an unspeakable evil.</div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <img className="d-block" height="300px" width="470px" src={DoctorStrange1} alt="Seventh slide"/>
                            <img className="d-block" height="300px" width="470px" src={DoctorStrange2} alt="Seventh slide"/>
                        </div>
                        <img className="d-block" height="600px" width="370px" src={DoctorStrangePoster} alt="Seventh slide"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Doctor Strange in the Multiverse of Madness</h3>
                            <h5>Release Date: March 5, 2022</h5>
                        </div>
                    </div>
                </div>

            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
        </div>
     );
}
 
export default MoviesFeatures;