import React, { Component } from 'react';
import './App.css';
import MovieSearch from './MovieSearch/MovieSearch'; // Rename and use the new MovieSearch component
import MovieDetails from './MovieDetails/MovieDetails'; // Create this new component for movie details
import { getMovie } from './MovieAPI/MovieAPI'; // Create a new utility to handle movie API calls//
import Nav from './Nav/Nav';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchFor: '',
      movie: {
        title: '',
        poster: '',
        plot: '',
        cast: [],
      },
    };
  }

  handleChange = (e) => {
    this.setState({ searchFor: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const movieTitle = this.state.searchFor;
    if (movieTitle === '') {
      return null;
    } else {
      getMovie(movieTitle) // Use your new MovieAPI utility to fetch movie data
        .then((movieData) => {
          this.setState({
            movie: {
              title: movieData.Title,
              poster: movieData.Poster,
              plot: movieData.Plot,
              cast: movieData.Actors.split(', '),
            },
          });
        })
        .catch((err) => {
          console.log('Error: ', err);
        });
    }
  };

  render() {
    console.log("App");
    return (
      <div className="App container">
        <Nav />
        <MovieSearch onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <MovieDetails movieData={this.state.movie} />
      </div>
    );
  }
}

export default App;
