import REACT_APP_API_KEY from 'react-dotenv';
  const apiKey = process.env.REACT_APP_API_KEY;

 const requests = {
   fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-us`,
   fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,
   fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
   fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
   fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
   fetchHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
   fetchDocumentariesMovies: `/discover/movie?api_key=${apiKey}&with_genres=99`,
   fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`
 }
 export default requests;
