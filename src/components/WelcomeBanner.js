import React from "react";
import { Box, Typography } from "@mui/material";

const WelcomeBanner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fce4ec",
        padding: 2,
        textAlign: "center",
        borderBottom: "2px solid #fd6bc2",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Sinema keyfine hoş geldiniz! 🎬
      </Typography>
      <Typography variant="body1">
        Vizyondaki filmleri keşfetmek için aşağıdaki görsellere tıklayın. Biletinizi seçin, koltuğunuzu ayarlayın, keyfinize bakın!
      </Typography>
    </Box>
  );
};

export default WelcomeBanner;
