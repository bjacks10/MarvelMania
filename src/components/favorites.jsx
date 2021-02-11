import React,{Component} from 'react';
import MoviesTable from './moviesTable';
import Movies from "./movies";
import $ from 'jquery';
import Popper from 'popper.js';
import Pagination from './common/pagination';
import { getMovies, updateMovie } from '../services/movieService';
import auth from '../services/authService';
import { getUser, getAllUsers, getUserFaves } from '../services/userService';
import favoritesIcon from '../icons/favorites-icon.svg';
import { Link } from "react-router-dom";


class Favorites extends Movies {
    state = {
        movies: [],
        filler:[],
        currentPage: 1,
        pageSize: 5,
        searchQuery: "",
        sortColumn: {path: 'title', order: 'asc'} ,
        toggledTags: [],
        favorites:[],
    };

    constructor(props){
        super(props);
    }

    async componentDidMount(){
        const {data: movies} = await getMovies();
        const user = auth.getCurrentUser();
        this.setState({user});
        //const faveTest = await getUserFaves(user._id);
        //const faves = faveTest.data;
        //const likedMovies = faves.filter(movie => movie.liked);
        const likedMovies = movies.filter(movie => movie.liked);
        this.setState({movies: likedMovies});
        //THIS WORKS FOR GETTING USER FAVES FROM DATABASE
        //const faveTest = await getUserFaves(this.state.user._id);
        //const faves = faveTest.data;
        //this.setState({movies: faves});  
    }

    handleLike = async (movie) => {
        const {user} = this.state;
        if(user){
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        if(!movies[index].liked){
            movies[index].liked = true;
             
        }
        else if (movies[index].liked) {
            movies[index].liked = false;
        }
        this.setState({movies});
        try{
            const movie = movies[index];
            await updateMovie(movie);
            window.location.reload(true);
            //THIS IS WHERE THE UPDATEUSERFAVES FUNCTION SHOULD BE CALLED
            //await updateUserFaves(user);

        }
        catch(error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
        }
    }

    }


    render() { 
        const {pageSize, currentPage, sortColumn, user, filler} = this.state;
        const {totalCount,data: favorites} = this.getPagedData();
        return ( 
        <div>
            <div className="headers">
                    <div style={{overflow:"hidden"}}>
                    <div className="bg-image-favorites"/>
                    </div>
                    <div>
                        <div className="bg-text">
                            <div style={{justifyContent:"center", marginTop:"100px"}} className="row">
                            <h1 style={{marginRight:"585px", fontSize:"50px"}} className="header-text">Favorites</h1>
                            <img src={favoritesIcon}></img>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="container">
            <div style={{width:"840px", justifyContent:"center", margin:"auto", marginTop:"50px"}}>
            {user && (
                <h1 style={{marginBottom:"40px", color:"#242E86", textAlign:"left", fontWeight:"normal"}}>{user.name}'s Favorites</h1>
            )}
            {!user && (
                <h1 style={{marginBottom:"40px", color:"#242E86", textAlign:"left", fontWeight:"normal"}}>Your Favorites</h1>
            )}
            {user && (
                <MoviesTable 
                movies={favorites}
                sortColumn={sortColumn}
                onLike={this.handleLike} 
                onDelete ={this.handleDelete} 
                onSort={this.handleSort}
                />
            )}
            {!user && (
                <MoviesTable 
                movies={filler}
                sortColumn={sortColumn}
                onLike={this.handleLike} 
                onDelete ={this.handleDelete} 
                onSort={this.handleSort}
                />
            )}
            {!user && (
                <div style={{marginBottom:"50px"}} className="row">
                <Link to="/login" style={{fontSize:"18px",color:"#242E86", fontWeight:"bold"}} type="button" className="btn btn-link">SIGN IN</Link>
                <p style={{fontSize:"18", marginTop:"8px"}}> to see your favorites!</p>
                </div>
            )}
            {user && (<Pagination 
                itemsCount={totalCount} 
                pageSize={pageSize} 
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
                /> 
            )}
            <h1 style={{marginTop:"50px",marginBottom:"40px", color:"#242E86", textAlign:"left", fontWeight:"normal"}}>Fan Favorites</h1>
            <div style={{marginBottom:"150px"}} className="row">
            <div style={{margin:"auto"}}>
            <button data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" style={{backgroundColor:"#E3E0E0", fontWeight:"normal", fontSize:"18px"}} type="button" className="btn btnFaves">
                MOVIES
                <i style={{marginLeft:"100px"}} className="fa fa-angle-down rotate-icon"></i>
            </button>
            <div className="collapse" id="collapseExample">
                <div style={{width:"260px", height:"250px"}} className="card card-body">
                    <ul style={{listStyleType:"none"}}>
                        <li>1. Avengers: Endgame (2019)</li>
                        <li>2. Avengers: Infinity War (2018)</li>
                        <li>3. The Avengers (2012)</li>
                        <li>4. Thor: Ragnarok (2017)</li>
                        <li>5. Black Panther (2018)</li>
                    </ul>
                </div>
            </div>
            </div>
            <div style={{margin:"auto"}}>
            <button data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2" style={{backgroundColor:"#E3E0E0", fontWeight:"normal", fontSize:"18px"}} type="button" className="btn btnFaves">
                CHARACTERS
                <i style={{marginLeft:"100px"}} className="fa fa-angle-down fa-rotate-angle-down"></i>
            </button>
            <div className="collapse" id="collapseExample2">
                <div style={{width:"260px", height:"250px"}} className="card card-body">
                    <ul style={{listStyleType:"none"}}>
                        <li>1. Iron Man</li>
                        <li>2. Captain America</li>
                        <li>3. Thor</li>
                        <li>4. Spider-Man</li>
                        <li>5. Doctor Strange</li>
                    </ul>
                </div>
            </div>
            </div>
            <div style={{margin:"auto"}}>
            <button data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3" style={{backgroundColor:"#E3E0E0", fontWeight:"normal", fontSize:"18px"}} type="button" className="btn btnFaves">
                VILLAINS
                <i style={{marginLeft:"100px"}} className="fa fa-angle-down fa-rotate-angle-down"></i>
            </button>
            <div className="collapse" id="collapseExample3">
                <div style={{width:"260px", height:"250px"}} className="card card-body">
                    <ul style={{listStyleType:"none"}}>
                        <li>1. Loki</li>
                        <li>2. Thanos</li>
                        <li>3. Hela</li>
                        <li>4. Erik Killmonger</li>
                        <li>5. The Winter Soldier</li>
                    </ul>
                </div>
            </div>
            </div>
            </div>
            </div>


            
        </div>
        </div>
         );
    }
}
 
export default Favorites;