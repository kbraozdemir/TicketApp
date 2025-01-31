import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const movies = [
  {
    id: 1,
    title: 'Inception',
    description: 'A mind-bending thriller by Christopher Nolan.',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg'
  },
  {
    id: 2,
    title: 'The Dark Knight',
    description: 'Batman battles the Joker in this epic saga.',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg'
  },
];

const MovieList = () => {
  return (
    <Grid container spacing={4}>
      {movies.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={movie.posterUrl}
              alt={movie.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {movie.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {movie.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;