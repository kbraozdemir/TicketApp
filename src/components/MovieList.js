import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "aed2e23994ac1e7f4ae953cd48b44ed3";
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=tr-TR`;

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(URL)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error("API hatası:", err));
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
