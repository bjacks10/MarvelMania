import http from './httpService';

const apiEndpoint = '/movies';


export function getMovies() {
    return http.get(apiEndpoint);
}
//THIS ONE DOESNT RETURN WITH THE PARAMETERS
export function getLiked(){
   //return http.get(apiEndpoint, {"liked":"true"});
   //return http.get(apiEndpoint + "/?liked=true");
   return http.get(apiEndpoint, {
       params: {
           'liked':true
       }
   });
}

export function getMovie(movieId){
    return http.get(apiEndpoint + "/" + movieId);
}

export function updateMovie (movie){
    if(movie._id){
        const body = {...movie};
        delete body._id;
        return http.put(apiEndpoint + '/' + movie._id, body);
    }
}