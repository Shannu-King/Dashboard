import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import ReactApexChart from 'react-apexcharts';

function getCountsByField(data, field) {
  const counts = {};
  data.forEach(item => {
    counts[item[field]] = (counts[item[field]] || 0) + 1;
  });
  return counts;
}

export default function CollegesDashboard() {
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

  const collegeCounts = getCountsByField(students, 'College');
  const options = {
    chart: { type: 'bar' },
    xaxis: { categories: Object.keys(collegeCounts) },
    title: { text: 'Students by College' },
    colors: ['#1976d2'],
  };
  const series = [{ name: 'Count', data: Object.values(collegeCounts) }];

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>Colleges Dashboard</Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, bgcolor: '#232a36', color: '#fff', boxShadow: 3 }}>
            <ReactApexChart options={options} series={series} type="bar" height={350} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
