import React, { Component } from 'react';

//Input: Liked: boolean
//Output: onClick
//could turn into a stateless functional component
//when turning into a sfc get rid of mentions of 'this' keyword when it comes to props
//and pass props in as a variable of the component i.e const Like = (props) => {...}

class Like extends Component {

    state = { 
        classes: "fa fa-heart-o"
     };

    renderFilledHeart(){
        this.state.classes = "fa fa-heart";
    }
    renderUnfilledHeart(){
        this.state.classes = "fa fa-heart-o";
    }
    render() { 
        if(this.props.liked){
            this.renderFilledHeart();
        }
        else if(!this.props.liked)
        {
            this.renderUnfilledHeart();
        }
        return ( 
            <i onClick={this.props.onClick} style={{cursor: 'pointer',color:"#242E86"}} className={this.state.classes} aria-hidden="true"></i>
         );
    }
}
 
export default Like;