import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/ticket/${movie.id}`, { state: { movie } });
  };

  return (
    <Card sx={{ cursor: "pointer" }} onClick={handleClick}>
      <CardActionArea>
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
            {movie.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
