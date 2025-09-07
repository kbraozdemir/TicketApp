import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, CardContent, CardMedia, Typography, CardActionArea, Toolbar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import  { useTheme } from '@mui/material/styles';

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
    <Box sx={{ height: theme.mixins.toolbar.minHeight }} >
      <Grid container spacing={2} padding={2}> 
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <Card>
              <CardActionArea component={Link} to={`/movie/${movie.id}`}>
                <CardMedia
                  component="img"
                  height="300"
                  image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={`${movie.title} poster`}
                />
                <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {movie.release_date} • ⭐ {movie.vote_average}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Box>
    </>
  );
};

export default HomePage;

