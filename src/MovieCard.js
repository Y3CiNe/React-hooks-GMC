import React, { Component } from 'react'
import ReactStars from "react-rating-stars-component";


  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
export default class MovieCard extends Component {


   

    componentWillUnmount = () => {
        console.log('Profile: i am unmounting')
    };

    render() {
        return (
            
                <div className="movie">
                    <img src={this.props.movies.imgSrc} className="movie-img" />
                    <div className="movie-info">
                        <div className="title"> {this.props.movies.titre}</div>
                        <p className="genres">Action / Drama / sci-fic</p>
                        <div className="summary"><div className="text"> {this.props.movies.description}</div></div>
                        <div className="actions">
                            <button><i className="fa fa-palay"></i>watch trailer</button>
                        </div>
                        <div>
                        <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  /></div>
                    </div>
                </div>
            
        )
    }
}
