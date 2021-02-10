import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getMovie} from '../services/fakeMovieService';

class MovieForm extends Form {
    state={
        data: {
            title: '', 
            characters: '', 
            phase: '', 
            order: ''
        },
    errors: {}
    };

    schema = {
        _id: Joi.string(),
        title: Joi.string().required().label("Title"),
        characters: Joi.string().required().label("Characters"),
        phase: Joi.number().required().min(0).max(100).label("Phase"),
        order: Joi.number().required().min(0).max(10).label("Order")

    };

    /*populateMovie(){
        try{
            const movieId = this.props.match.params.id;
            if(movieId ==="new") return;

            const {data: movie} = getMovie(movieId);
            this.setState({data: this.mapToViewModel(movie)});
            console.log("Populated Movie");

        }
        catch(ex){
            if(ex.response && ex.response.status === 404) 
                this.props.history.replace("/not-found");
        }
    }*/

    componentDidMount(){
        //this.populateMovie();
        const movieId = this.props.match.params.id;
        if (movieId === "new") return;
    
        const movie = getMovie(movieId);
        if (!movie) return this.props.history.replace("/not-found");
    
        this.setState({ data: this.mapToViewModel(movie) });
        console.log("state is set");
        console.log("Data: " + this.state.data);
    };

    mapToViewModel(movie){
        return{
            _id: movie._id,
            title: movie.title,
            characters: movie.characters,
            phase: movie.phase,
            order: movie.order
        };
    }

    render() {
        return ( 
        <div>
            <h1>Movie Form: {this.state.data.title}</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('title', 'Title')}
                {this.renderInput('characters', 'Characters')}
                {this.renderInput('phase', 'Phase')}
                {this.renderInput('order', 'Order')}
            </form>
        </div> );
    }
}
 
export default MovieForm;