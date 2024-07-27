import React, { useState } from "react";
import { FormControl, TextField, InputLabel, Select, MenuItem, Button, Snackbar, Alert } from '@mui/material';

const TicketForm = ({movie}) => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [tickets, setTickets] = useState(1);
    const [open, setOpen] = useState(false);

    const handleTicketsChange = (event) => {
        setTickets(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Bilet Satın Al</h2>
            <div>
                <TextField id="outlined-basic" 
                label="İsim:" 
                variant="outlined" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
                required />
            </div>
            <div>
            <TextField id="outlined-basic" 
                label="E-posta:" 
                variant="outlined" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required />
            </div>
            <div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">İzleyici Sayısı</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={tickets}
                    label="İzleyici Sayısı"
                    onChange={handleTicketsChange}
                >
                    {[...Array(10).keys()].map(i => (
                        <MenuItem key={i + 1} value={i + 1}>{i + 1}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            </div>
            <div>
                <Button 
                type="submit"
                variant="contained" 
                size="medium"
                sx={{ backgroundColor: '#696969', '&:hover': { backgroundColor: '#505050' } }} >
                    Bilet Satın Al
                </Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                    >
                        {`${movie.title} için biletiniz oluşturuldu!`}
                    </Alert>
                </Snackbar>
            </div>
        </form>
    );
};

export default TicketForm;