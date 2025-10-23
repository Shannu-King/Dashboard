import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import DashboardLayout from './DashboardLayout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function App() {
  const [mode, setMode] = useState('dark');
  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
            background: { default: '#181f2a', paper: '#232a36' },
            text: { primary: '#fff' },
          }
        : {
            background: { default: '#f5f5f5', paper: '#fff' },
            text: { primary: '#232a36' },
          }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'fixed', top: 16, right: 16, zIndex: 2000 }}>
        <IconButton onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')} color="inherit">
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard/*" element={<DashboardLayout />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

import { Box } from '@mui/material';
export default App;
