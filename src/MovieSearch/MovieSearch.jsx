import React from 'react';
import Form from 'react-bootstrap/Form';
import './MovieSearch.css'


const MovieSearch = (props) => {
  console.log("inside moviesearch")
  return (
    <Form onSubmit={props.onSubmit}>
      <div>

      <Form.Label>Search Movie</Form.Label>
      </div>
      <Form.Control
        type="text"
        placeholder="Movie Title"
        value={props.movie}
        onChange={props.onChange}
      />
    </Form>
  );
};

export default MovieSearch;
