import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useEffect, useState } from 'react';
import './Dashboard.css';


function getCountsByField(data, field) {
  const counts = {};
  data.forEach(item => {
    counts[item[field]] = (counts[item[field]] || 0) + 1;
  });
  return counts;
}
function parseCSV(csv) {
  const lines = csv.trim().split('\n');
  const headers = lines[0].split(',');
  return lines.slice(1).map(line => {
    const values = line.split(',');
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = values[i];
    });
    return obj;
  });
}

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch('/students_details.csv')
      .then(res => res.text())
      .then(text => setStudents(parseCSV(text)));
  }, []);

  if (students.length === 0) return <div>Loading dashboard...</div>;

 
  const placeCounts = getCountsByField(students, 'Place');
  const radarOptions = {
    chart: { type: 'radar' },
    xaxis: { categories: Object.keys(placeCounts) },
    title: { text: 'Place Distribution (Radar)' },
    stroke: { width: 2 },
    fill: { opacity: 0.4 },
  };
  const radarSeries = [{ name: 'Students', data: Object.values(placeCounts) }];

  
  const branches = [...new Set(students.map(s => s.Branch))];
  const colleges = [...new Set(students.map(s => s.College))];
  const heatmapData = branches.map(branch => {
    return {
      name: branch,
      data: colleges.map(college => {
        return students.filter(s => s.Branch === branch && s.College === college).length;
      })
    };
  });
  const heatmapOptions = {
    chart: { type: 'heatmap' },
    xaxis: { categories: colleges },
    title: { text: 'Branch vs College (Heatmap)' },
    dataLabels: { enabled: true },
    colors: ['#008FFB'],
  };

  
  const genderCounts = getCountsByField(students, 'Gender');
  const donutOptions = {
    labels: Object.keys(genderCounts),
    title: { text: 'Gender Distribution (Donut)' },
    legend: { position: 'bottom' },
  };
  const donutSeries = Object.values(genderCounts);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div style={{ maxWidth: 700, margin: 'auto' }} className='dashboard-charts  '>
        <ReactApexChart options={radarOptions} series={radarSeries} type="radar" height={350} />
        <ReactApexChart options={heatmapOptions} series={heatmapData} type="heatmap" height={350} />
        <ReactApexChart options={donutOptions} series={donutSeries} type="donut" height={350} />
      </div>
    </div>
  );
}
