import React from 'react';
import { getMovie } from '../services/movieService';
import Form from './common/form';
import CaptainAmericaTheFirstAvenger from "../images/MoviePics/CaptainAmericaTheFirstAvenger.jpg";
import CaptainMarvel from "../images/MoviePics/CaptainMarvel.jpg";
import IronMan from "../images/MoviePics/IronMan.jpg";
import IronMan2 from "../images/MoviePics/IronMan2.jpg";
import TheIncredibleHulk from "../images/MoviePics/TheIncredibleHulk.jpg";
import Thor from "../images/MoviePics/Thor.jpg";
import TheAvengers from "../images/MoviePics/TheAvengers.jpg";
import IronMan3 from "../images/MoviePics/IronMan3.jpg";
import ThorTheDarkWorld from "../images/MoviePics/ThorTheDarkWorld.jpg";
import CaptainAmericaTheWinterSoldier from "../images/MoviePics/CaptainAmericaTheWinterSoldier.jpg";
import GuardiansOfTheGalaxy from "../images/MoviePics/GuardiansOfTheGalaxy.jpg";
import GuardiansOfTheGalaxy2 from "../images/MoviePics/GuardiansOfTheGalaxy2.jpeg";
import AvengersAgeOfUltron from "../images/MoviePics/AvengersAgeOfUltron.jpg";
import AntMan from "../images/MoviePics/AntMan.jpg";
import CaptainAmericaCivilWar from "../images/MoviePics/CaptainAmericaCivilWar.jpeg";
import SpiderManHomecoming from "../images/MoviePics/SpiderManHomecoming.jpg";
import DoctorStrange from "../images/MoviePics/DoctorStrange.jpg";
import BlackPanther from "../images/MoviePics/BlackPanther.jpg";
import ThorRagnarok from "../images/MoviePics/ThorRagnarok.jpg";
import AvengersInfinityWar from "../images/MoviePics/AvengersInfinityWar.jpg";
import AntManAndTheWasp from "../images/MoviePics/AntManAndTheWasp.jpg";
import AvengersEndgame from "../images/MoviePics/AvengersEndgame.jpg";
import SpiderManFarFromHome from "../images/MoviePics/SpiderManFarFromHome.jpg";
import Movies from './movies';


class MovieInfo extends Form {
    state={
        data: {
            _id:"",
            title: "", 
            characters: [], 
            phase: "", 
            order: "",
            runtime:"",
            releaseYear:"",
            description:"",
            liked :false,
            picture: ""
        },
        upper:"",
        pict: "",
        errors: {}
    };

    async populateMovie(){
        try{
            const movieId = this.props.match.params.id;
            const {data: movie} = await getMovie(movieId);
            this.setState({data: this.mapToViewModel(movie)});

        }
        catch(ex) {
            if(ex.response && ex.response.status === 404) 
                this.props.history.replace("/not-found");
        }
        this.fillMoviePic();
    }

    fillMoviePic(){
        if(this.state.data.picture == "IronMan2")
        {
            this.setState({pict:IronMan2 });
        }
        else if (this.state.data.picture == "CaptainAmericaTheFirstAvenger")
        {
            this.setState({pict:CaptainAmericaTheFirstAvenger});
        }
        else if (this.state.data.picture == "CaptainMarvel")
        {
            this.setState({pict:CaptainMarvel});
        }
        else if (this.state.data.picture == "IronMan")
        {
            this.setState({pict:IronMan});
        }
        else if (this.state.data.picture == "TheIncredibleHulk")
        {
            this.setState({pict:TheIncredibleHulk});
        }
        else if (this.state.data.picture == "Thor")
        {
            this.setState({pict:Thor});
        }
        else if (this.state.data.picture == "TheAvengers")
        {
            this.setState({pict: TheAvengers});
        }
        else if (this.state.data.picture == "IronMan3")
        {
            this.setState({pict:IronMan3 });
        }
        else if (this.state.data.picture == "ThorTheDarkWorld")
        {
            this.setState({pict: ThorTheDarkWorld});
        }
        else if (this.state.data.picture == "CaptainAmericaTheWinterSoldier")
        {
            this.setState({pict: CaptainAmericaTheWinterSoldier});
        }
        else if (this.state.data.picture == "GuardiansOfTheGalaxy")
        {
            this.setState({pict: GuardiansOfTheGalaxy});
        }
        else if (this.state.data.picture == "GuardiansOfTheGalaxy2")
        {
            this.setState({pict: GuardiansOfTheGalaxy2});
        }
        else if (this.state.data.picture == "AvengersAgeOfUltron")
        {
            this.setState({pict: AvengersAgeOfUltron});
        }
        else if (this.state.data.picture == "AntMan")
        {
            this.setState({pict: AntMan});
        }
        else if (this.state.data.picture == "CaptainAmericaCivilWar")
        {
            this.setState({pict: CaptainAmericaCivilWar});
        }
        else if (this.state.data.picture == "SpiderManHomecoming")
        {
            this.setState({pict: SpiderManHomecoming});
        }
        else if (this.state.data.picture == "DoctorStrange")
        {
            this.setState({pict: DoctorStrange});
        }
        else if (this.state.data.picture == "BlackPanther")
        {
            this.setState({pict: BlackPanther});
        }
        else if (this.state.data.picture == "ThorRagnarok")
        {
            this.setState({pict: ThorRagnarok});
        }
        else if (this.state.data.picture == "AvengersInfinityWar")
        {
            this.setState({pict: AvengersInfinityWar});
        }
        else if (this.state.data.picture == "AntManAndTheWasp")
        {
            this.setState({pict: AntManAndTheWasp});
        }
        else if (this.state.data.picture == "AvengersEndgame")
        {
            this.setState({pict: AvengersEndgame});
        }
        else if (this.state.data.picture == "SpiderManFarFromHome")
        {
            this.setState({pict: SpiderManFarFromHome});
        }
        else {
            console.log("Something failed with picture");
        }
    }

    componentDidMount(){
        this.populateMovie();
    };

    mapToViewModel(movie){
        return{
            _id: movie._id,
            title: movie.title,
            characters: movie.characters,
            phase: movie.phase,
            order: movie.order,
            runtime: movie.runtime ,
            releaseYear: movie.releaseYear ,
            description: movie.description,
            liked: movie.liked,
            picture: movie.picture
        };
    }

    render() {
        let upper = (this.state.data.title).toUpperCase();
        return ( 
    <div>
        <div className="headers">
            <nav aria-label="breadcrumb">
            <ol style={{backgroundColor:"#1B2368", borderRadius:"0"}} className="breadcrumb">
                <li className="breadcrumb-item"><a style={{color:"white", fontSize:"12px",fontWeight:"bold", marginLeft:"15px"}} href="/movies">MOVIES</a></li>
                <li style={{ fontSize:"12px", fontWeight:"bold", color:"rgb(255,255,255,.5)"}} className="breadcrumb-item active" aria-current="page">{upper}</li>
            </ol>
            </nav>
        </div>
        <div style={{width:"840px", justifyContent:"center", margin:"auto", marginTop:"50px"}} className="movieInfoPage">
            <h1 style={{color: "#242E86"}} className="movieInfoTitle">{this.state.data.title}</h1>
            <div className="row">
            <div className="col">
            <h8 className="MIh8">DESCRIPTION</h8>
            <p className="movieInfoPara">{this.state.data.description}</p>
            <h8 className="MIh8">CHARACTERS</h8>
            <p className="movieInfoPara">{this.state.data.characters}</p>
            <h8 className="MIh8">MCU PHASE</h8>
            <p className="movieInfoPara">{this.state.data.phase}</p>
            <h8 className="MIh8">MCU ORDER</h8>
            <p className="movieInfoPara">{this.state.data.order}</p>
            <h8 className="MIh8">RUNTIME</h8>
            <p className="movieInfoPara">{this.state.data.runtime} minutes</p>
            <h8 className="MIh8">RELEASE YEAR</h8>
            <p className="movieInfoPara">{this.state.data.releaseYear}</p>
            </div>
            <div className="col">
                <img style={{marginLeft:"100px"}} src={this.state.pict} height="400" width="260"/>
            </div>
            </div>

        </div> 
        </div>);
    }
}
 
export default MovieInfo;
