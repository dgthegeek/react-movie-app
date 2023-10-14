import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './MovieDetails.css'

const MovieDetails = (props) => {
  const { title, poster, plot, cast } = props.movieData;
  console.log("inside MoviedETAILS");
  return (
    <div>
      <ListGroup>
        <ListGroup.Item>
        <img src={poster} alt={title} />
        </ListGroup.Item>
        <ListGroup.Item> Title: {title}</ListGroup.Item>
        <ListGroup.Item> Plot: {plot}</ListGroup.Item>
        <ListGroup.Item> Cast: {cast.join(', ')}</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default MovieDetails;
