import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';


const MovieDetails = () => {
    return (
        <Grid container spacing={2}>
            {movies.map(movie => (
                <Grid item xs={12} sm={6} md={4} key={movie.id}>
                    <Card>
                        <CardActionArea component={Link} to={`/TicketForm/${movie.id}`}>
                            <CardMedia
                                component="img"
                                height="300"
                                image={movie.posterUrl}
                                alt={`${movie.title} poster`}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {movie.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {movie.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default MovieDetails;
