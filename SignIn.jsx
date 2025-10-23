import React from 'react';
import { Button, TextField, Paper, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();
  const handleSignIn = () => {
    // Add authentication logic here if needed
    navigate('/dashboard/students');
  };
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#232a36', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper sx={{ p: 4, maxWidth: 400, bgcolor: '#232a36', color: '#fff' }}>
        <Typography variant="h5" gutterBottom>Sign In</Typography>
        <TextField fullWidth label="Email" margin="normal" variant="filled" />
        <TextField fullWidth label="Password" type="password" margin="normal" variant="filled" />
        <Button fullWidth variant="contained" sx={{ mt: 2, bgcolor: '#1976d2' }} onClick={handleSignIn}>Sign In</Button>
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Button variant="outlined" sx={{ mr: 1 }}>G</Button>
          <Button variant="outlined" sx={{ mr: 1 }}>F</Button>
          <Button variant="outlined">GH</Button>
        </Box>
        <Typography sx={{ mt: 2 }}>Don't have an account? <a href="#" style={{ color: '#1976d2' }}>Sign Up</a></Typography>
      </Paper>
    </Box>
  );
}
