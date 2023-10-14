const omdbUrl = 'https://www.omdbapi.com/';

const apiKey = 'bc9681be'


// Function to fetch movie details by title
export async function getMovie(movieTitle) {
    console.log(apiKey, "Inside API");
    try {
      const apiUrl = `http://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (data.Response === 'True') {
        return data; // Returns the movie details as an object
      } else {
        throw new Error(data.Error);
      }
    } catch (error) {
      throw new Error(`Failed to fetch movie details: ${error.message}`);
    }
  }
