import './App.css';
import React, {Component} from 'react';
import NavBar from './components/navBar';
import RegisterForm from './components/registerForm';
import LoginForm from './components/loginForm';
import { Route, Switch, Redirect} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './components/notFound';
import auth from './services/authService';
import Home from './components/home';
import Movies from './components/movies';
import Favorites from './components/favorites';
import Logout from './components/common/logout';
import MovieInfo from './components/movieInfo';
import Bloopers from './components/bloopers';
import BehindTheScenes from './components/behindTheScenes';
import DeletedScenes from './components/deletedScenes';
import Profile from './components/profile';
import About from './components/about';

class App extends Component {
  state={};
  componentDidMount(){
      const user = auth.getCurrentUser();
      this.setState({user});
    }

  render(){
    const {user} = this.state;
    return(
      <React.Fragment>
      <ToastContainer/>
      <NavBar user={user}/>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/logout" component={Logout} />
        <Route path="/profile" render={props => <Profile {...props} user={user} />} />
        <Route path="/home" component={Home}/>
        <Route path="/movies/:id" component={MovieInfo} />
        <Route path="/movies" render={props => <Movies {...props} user={this.state.user}  /> } />
        <Route path="/favorites" component={Favorites}/>
        <Route path="/login" render = {props => {
          if(user) return <Redirect to='/home' />;
            return <LoginForm {...props} />;
        }} />
        <Route path="/register" render = {props => {
          if(user) return <Redirect to='/home' />;
            return <RegisterForm {...props} />;
        }} />        
        <Route path="/not-found" component={NotFound}/>
        <Route path="/bloopers" component={Bloopers}/>
        <Route path="/behind-the-scenes" component={BehindTheScenes}/>
        <Route path="/deleted-scenes" component={DeletedScenes}/>
        <Redirect from="/" exact to="/home"/>
        <Redirect to="/not-found"/>
      </Switch>
      </React.Fragment>
    )
  }
}


export default App;
