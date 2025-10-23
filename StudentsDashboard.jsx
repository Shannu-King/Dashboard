import React, { useEffect, useState } from 'react';
import Dashboard from '../Dashboard';
import { Box, Grid, Paper, Typography } from '@mui/material';

function getSummaryStats(students) {
  const total = students.length;
  const male = students.filter(s => s.Gender === 'Male').length;
  const female = students.filter(s => s.Gender === 'Female').length;
  const colleges = [...new Set(students.map(s => s.College))].length;
  const branches = [...new Set(students.map(s => s.Branch))].length;
  return { total, male, female, colleges, branches };
}

export default function StudentsDashboard() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch('/students_details.csv')
      .then(res => res.text())
      .then(text => {
        const lines = text.trim().split('\n');
        const headers = lines[0].split(',');
        const data = lines.slice(1).map(line => {
          const values = line.split(',');
          const obj = {};
          headers.forEach((h, i) => {
            obj[h] = values[i];
          });
          return obj;
        });
        setStudents(data);
      });
  }, []);

  const stats = getSummaryStats(students);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>Students Dashboard</Typography>
      <Grid container spacing={3} justifyContent="center" sx={{ mb: 4 }}>
        <Grid item>
          <Paper sx={{ p: 3, bgcolor: '#232a36', color: '#fff', minWidth: 150, textAlign: 'center', boxShadow: 3 }}>
            <Typography variant="h6">Total Students</Typography>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>{stats.total}</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper sx={{ p: 3, bgcolor: '#232a36', color: '#fff', minWidth: 150, textAlign: 'center', boxShadow: 3 }}>
            <Typography variant="h6">Male</Typography>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>{stats.male}</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper sx={{ p: 3, bgcolor: '#232a36', color: '#fff', minWidth: 150, textAlign: 'center', boxShadow: 3 }}>
            <Typography variant="h6">Female</Typography>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>{stats.female}</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper sx={{ p: 3, bgcolor: '#232a36', color: '#fff', minWidth: 150, textAlign: 'center', boxShadow: 3 }}>
            <Typography variant="h6">Colleges</Typography>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>{stats.colleges}</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper sx={{ p: 3, bgcolor: '#232a36', color: '#fff', minWidth: 150, textAlign: 'center', boxShadow: 3 }}>
            <Typography variant="h6">Branches</Typography>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>{stats.branches}</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, textAlign: 'center' }}>Dashboard</Typography>
      <Dashboard />
    </Box>
  );
}
