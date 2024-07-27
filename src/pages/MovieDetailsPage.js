import React from "react";
import { useParams } from "react-router-dom";
import TicketForm from "../components/TicketForm";
import movies from "../components/Movies";
import { Typography, Paper } from "@mui/material";

const MovieDetailsPage = () => {
    const {id} = useParams();
    const movie = movies.find((m) => m.id === parseInt(id));


    if (!movie) {
        return <Typography variant="h5">Film bulunamadı</Typography>;
    }

    return (
        <Paper sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>{movie.title}</Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>{movie.description}</Typography>
            <TicketForm movie={movie} />
        </Paper>
        
    );
};
export default MovieDetailsPage;