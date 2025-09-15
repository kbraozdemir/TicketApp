import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { movie, session, seat } = location.state || {};

  if (!movie || !session || !seat) {
    return (
      <Box sx={{ padding: 3 }}>
        <Typography variant="h6" color="error">
          Rezervasyon bilgisi eksik. Lütfen tekrar deneyin.
        </Typography>
        <Button variant="outlined" onClick={() => navigate("/")}>
          Ana Sayfaya Dön
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Rezervasyonunuz Başarıyla Oluşturuldu!
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Film:</strong> {movie.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Seans:</strong> {session}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Koltuk:</strong> {seat}
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Button variant="contained" onClick={() => navigate("/")}>
          Ana Sayfaya Dön
        </Button>
      </Box>
    </Box>
  );
};

export default Confirmation;
