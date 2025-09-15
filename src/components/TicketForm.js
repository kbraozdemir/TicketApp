import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";

  const TicketForm = () => {
  const location = useLocation();
  const movie = location.state?.movie;
  const navigate = useNavigate();
  const rows = ["A", "B", "C", "D", "E"];
  const cols = [1, 2, 3, 4, 5];
  const [seat, setSeat] = useState(null);
  const [session, setSession] = useState("");
  const sessionOptions = ["13:00", "15:30", "18:00", "21:00"];



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
        {movie?.title} için bilet ayırt
      </Typography>

      <Typography variant="body1" gutterBottom>
        Seans seçin, koltuk numarası girin ve rezervasyonunuzu tamamlayın.
      </Typography>

      <TextField
        select
        label="Seans Saati"
        value={session}
        onChange={(e) => setSession(e.target.value)}
        fullWidth
        sx={{ my: 2 }}
      >
        {sessionOptions.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
        ))}
      </TextField>

      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          navigate("/confirmation", {
            state: {
              movie: movie,
              session: session,
              seat: seat
            }
          })
        }
        disabled={!session || !seat}
      >
        Ayırt
      </Button>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 1, my: 2 }}>
        {rows.map((row) =>
          cols.map((col) => {
            const seatId = `${row}${col}`;
            const isSelected = seat === seatId;

            return (
              <Button
                key={seatId}
                variant={isSelected ? "contained" : "outlined"}
                color={isSelected ? "primary" : "inherit"}
                onClick={() => setSeat(seatId)}
              >
                {seatId}
              </Button>
            );
          })
        )}
      </Box>
    </Box>
  );
};

export default TicketForm;
