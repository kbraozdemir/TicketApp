import { useLocation } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";

const TicketForm = () => {
  const location = useLocation();
  const movie = location.state?.movie;

  if (!movie) {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h6" color="error">
        Film bilgisi alınamadı. Lütfen ana sayfaya dönün.
      </Typography>
    </Box>
  );
}
 
console.log("TicketForm'a gelen veri:", movie);


  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        {movie?.title} için bilet ayırt 🎫
      </Typography>

      <Typography variant="body1" gutterBottom>
        Seans seçin, koltuk numarası girin ve rezervasyonunuzu tamamlayın.
      </Typography>

      <TextField label="Seans Saati" fullWidth sx={{ my: 2 }} />
      <TextField label="Koltuk Numarası" fullWidth sx={{ mb: 2 }} />
      <Button variant="contained" color="primary">
        Ayırt
      </Button>
    </Box>
  );
};

export default TicketForm;
