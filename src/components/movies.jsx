import React, { Component } from 'react';
import _ from 'lodash';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import SearchBox from './common/searchBox';
import { toast } from 'react-toastify';
import MoviesTable from './moviesTable';
import { getMovies, updateMovie} from '../services/movieService';
import { phase } from '../services/dropdownItems';
import $ from 'jquery';
import Popper from 'popper.js';
import ListGroup from './common/listGroup';
import { updateUserFaves, getUserFaves } from '../services/userService';
import moviesIcon from '../icons/movie-icon.svg';


class Movies extends Component {
    state = {
        movies: [],
        chars: [],
        currentPage: 1,
        pageSize: 6,
        searchQuery: "",
        sortColumn: {path: 'title', order: 'asc'} ,
        toggledTags: [],
        favorites:[],
        filteredData:[],
        selectedPhase: "All Phases",
        phases:[]
    };

    constructor(props){
        super(props);
    }

    async componentDidMount(){
        const phases = ["All Phases",...phase];
        this.setState({phases});
        const {data: movies} = await getMovies();
        this.setState({movies});
        const {user} = this.props;
        //const faveTest = await getUserFaves(user._id);
        //const faves = faveTest.data;
        //console.log(faves);
        //this.setState({movies:faves});
    }

    handleLike = async (movie) => {
        const {user} = this.props;
        if(user){
        console.log("handleLike called");
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

    handlePageChange = page => {
        this.setState({ currentPage: page});
     };

     handleSearch = query => {
        this.setState({searchQuery: query, selectedPhase: null, currentPage: 1});
     };

     handlePhaseSelect = phase => {
        this.setState({ selectedPhase: phase, searchQuery: "", currentPage: 1 });
      };

     handleSort = sortColumn => {
        this.setState({ sortColumn });
     };

     handleToggledTags = (e,d) => {
         const toggledTags = [...this.state.toggledTags];
         if(!toggledTags.includes(d)) {
             toggledTags.push(d);
         } else {
             const index = toggledTags.indexOf(d);
             toggledTags.splice(index,1);
         }
         this.setState({toggledTags});
         console.log("toggledTags: " + toggledTags);
     };

     resetFilters = () => {
         this.setState({toggledTags: []});
     };

     displayFilters = () => {
        const toggledTags = [...this.state.toggledTags];
        if(toggledTags.length === 0)
            return " No Filters Selected.";
        else {
            return toggledTags.join(", ");
        }
     }

     /*handleFiltered = async () => {
        const apiEndpoint = apiUrl + '/movies';
        const response = await http.get(apiEndpoint, {
            params: {
                tags: this.state.toggledTags,
            }
        })
        .catch(error => {
            console.log("ERR", error);
        });
        const filteredData = response.data;
        this.setState({filteredData});
     }*/

     getPagedData = () => {
        const {
            pageSize, 
            currentPage, 
            movies: allMovies,  
            sortColumn, 
            searchQuery,
            selectedPhase,
            toggledTags
        } = this.state;

        let filtered = allMovies;
        
        //have to fix this for all the dropdown menus and filtering

        if(searchQuery)
        filtered = allMovies.filter(m =>
            m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
        );
        else if (selectedPhase == "All Phases"){
            filtered = allMovies;
        }
        else if (selectedPhase)
        filtered = allMovies.filter(m => m.phase === selectedPhase);
        /*if(this.state.toggledTags != [])
        {
            filtered = this.state.filteredData;
        }*/

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        
        const movies = paginate(sorted, currentPage, pageSize);
        return {totalCount: filtered.length, data: movies};
     };


    render() { 
        const {pageSize, currentPage, sortColumn, searchQuery, toggledTags, phases} = this.state;
        const {totalCount,data: movies} = this.getPagedData();
        return ( 
            <div style={{marginBottom:"70px"}}>
                <div className="headers">
                    <div style={{overflow:"hidden"}}>
                    <div className="bg-image-movies"/>
                    </div>
                    <div>
                        <div className="bg-text-movies row">
                            <h1 style={{marginRight:"580px", fontSize:"50px"}} className="header-text">Movies</h1>
                            <img src={moviesIcon}></img>
                        </div>
                    </div>
                </div> 
                <div className="container"> 
                <div style={{width:"840px", justifyContent:"center", margin:"auto", marginTop:"50px"}}>
                <div style={{width:"840px", justifyContent:"center", margin:"auto", marginTop:"50px", marginBottom:"30px"}} className="row">
                <h1 style={{color:"#242E86", textAlign:"left", fontWeight:"normal", marginRight:"300px"}}>Showing {totalCount} filtered movies</h1>
                <i style={{color:"#242E86", fontSize:"35px", margin:"auto", textAlign:"right"}} class="fa fa-search"></i>
                </div>
                <SearchBox value={searchQuery} onChange={this.handleSearch} />
                <div style={{marginTop:"50px"}} className="row">
                <div className="col-3">
                <ListGroup
                items={this.state.phases}
                selectedItem={this.state.selectedPhase}
                onItemSelect={this.handlePhaseSelect}
                />
                </div>
                <div className="col">
                <MoviesTable
                    movies={movies}
                    sortColumn={sortColumn}
                    onLike={this.handleLike} 
                    onDelete ={this.handleDelete} 
                    onSort={this.handleSort}
                />
                <Pagination 
                itemsCount={totalCount} 
                pageSize={pageSize} 
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
                /> 
                </div>
                </div>
                </div>
                </div>
            </div>
         );
    }
}
 
export default Movies;