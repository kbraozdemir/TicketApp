import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Toolbar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import  { useTheme } from '@mui/material/styles';
import WelcomeBanner from "../components/WelcomeBanner";
import MovieCard from "../components/MovieCard";

const API_KEY = "aed2e23994ac1e7f4ae953cd48b44ed3";
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=tr-TR`;

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const theme = useTheme();

  useEffect(() => {
    axios.get(URL)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error("API hatası:", err));
  }, []);

  return (
    <>
    <Toolbar />
    <WelcomeBanner />
    <Box sx={{ height: theme.mixins.toolbar.minHeight }} >
      <Grid container spacing={2} padding={2}> 
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
    </Box>
    </>
  );
};

export default HomePage;

