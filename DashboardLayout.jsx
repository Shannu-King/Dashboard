import React from 'react';
import { Outlet, Link, Routes, Route } from 'react-router-dom';
import StudentsDashboard from './pages/StudentsDashboard.jsx';
import CollegesDashboard from './pages/CollegesDashboard.jsx';
import BranchesDashboard from './pages/BranchesDashboard.jsx';
import PlacesDashboard from './pages/PlacesDashboard.jsx';
import GenderDashboard from './pages/GenderDashboard.jsx';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, AppBar, Typography, Avatar, IconButton } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

export default function DashboardLayout() {
  return (
    <Box sx={{ display: 'flex', bgcolor: '#181f2a', minHeight: '100vh' }}>
      <AppBar position="fixed" sx={{ zIndex: 1201, bgcolor: '#232a36', boxShadow: 2 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap sx={{ fontWeight: 700, letterSpacing: 2 }}>SRI</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ bgcolor: '#1976d2', mr: 2 }}>S</Avatar>
            <IconButton color="inherit">
              <LogoutIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', bgcolor: '#232a36', color: '#fff' },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button component={Link} to="/dashboard/students">
            <ListItemIcon><SchoolIcon sx={{ color: '#fff' }} /></ListItemIcon>
            <ListItemText primary="Students" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/colleges">
            <ListItemIcon><SchoolIcon sx={{ color: '#fff' }} /></ListItemIcon>
            <ListItemText primary="Colleges" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/branches">
            <ListItemIcon><SchoolIcon sx={{ color: '#fff' }} /></ListItemIcon>
            <ListItemText primary="Branches" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/places">
            <ListItemIcon><SchoolIcon sx={{ color: '#fff' }} /></ListItemIcon>
            <ListItemText primary="Places" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/gender">
            <ListItemIcon><SchoolIcon sx={{ color: '#fff' }} /></ListItemIcon>
            <ListItemText primary="Gender" />
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 4, bgcolor: '#181f2a', color: '#fff' }}>
        <Toolbar />
        <Routes>
          <Route path="students" element={<StudentsDashboard />} />
          <Route path="colleges" element={<CollegesDashboard />} />
          <Route path="branches" element={<BranchesDashboard />} />
          <Route path="places" element={<PlacesDashboard />} />
          <Route path="gender" element={<GenderDashboard />} />
        </Routes>
      </Box>
    </Box>
  );
}
