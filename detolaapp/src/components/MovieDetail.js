import React from "react";


function MovieDetail(props) {
    return (
      <div className="text-center">
        <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
        <h4 style={{color: "red"}}>Director(s): {props.director}</h4>
        <h4 style={{color: "blue"}}>Genre: {props.genre}</h4>
        <h4 style={{color: "purple"}}>Released: {props.released}</h4>
      </div>
    );
  }
  
  export default MovieDetail;