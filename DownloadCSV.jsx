import React from 'react';

const students = [
  { Name: 'Aarav', Place: 'Visakhapatnam', Branch: 'CSE', Gender: 'Male', College: 'AEC' },
  { Name: 'Aadhya', Place: 'Vijayawada', Branch: 'EEE', Gender: 'Female', College: 'ACET' },
  { Name: 'Aditya', Place: 'Guntur', Branch: 'MECH', Gender: 'Male', College: 'ACOE' },
  { Name: 'Ananya', Place: 'Nellore', Branch: 'IT', Gender: 'Female', College: 'AEC' },
  { Name: 'Arjun', Place: 'Kurnool', Branch: 'ECE', Gender: 'Male', College: 'ACET' },
  { Name: 'Bhavana', Place: 'Anantapur', Branch: 'CIVIL', Gender: 'Female', College: 'ACOE' },
  { Name: 'Chaitanya', Place: 'Eluru', Branch: 'CSE', Gender: 'Male', College: 'AEC' },
  { Name: 'Deepika', Place: 'Visakhapatnam', Branch: 'EEE', Gender: 'Female', College: 'ACET' },
  { Name: 'Dinesh', Place: 'Vijayawada', Branch: 'MECH', Gender: 'Male', College: 'ACOE' },
  { Name: 'Divya', Place: 'Guntur', Branch: 'IT', Gender: 'Female', College: 'AEC' },
  { Name: 'Eshwar', Place: 'Nellore', Branch: 'ECE', Gender: 'Male', College: 'ACET' },
  { Name: 'Farah', Place: 'Kurnool', Branch: 'CIVIL', Gender: 'Female', College: 'ACOE' },
  { Name: 'Gautam', Place: 'Anantapur', Branch: 'CSE', Gender: 'Male', College: 'AEC' },
  { Name: 'Harini', Place: 'Eluru', Branch: 'EEE', Gender: 'Female', College: 'ACET' },
  { Name: 'Ishaan', Place: 'Visakhapatnam', Branch: 'MECH', Gender: 'Male', College: 'ACOE' },
  { Name: 'Jahnavi', Place: 'Vijayawada', Branch: 'IT', Gender: 'Female', College: 'AEC' },
  { Name: 'Karthik', Place: 'Guntur', Branch: 'ECE', Gender: 'Male', College: 'ACET' },
  { Name: 'Keerthi', Place: 'Nellore', Branch: 'CIVIL', Gender: 'Female', College: 'ACOE' },
  { Name: 'Lakshmi', Place: 'Kurnool', Branch: 'CSE', Gender: 'Female', College: 'AEC' },
  { Name: 'Manoj', Place: 'Anantapur', Branch: 'EEE', Gender: 'Male', College: 'ACET' },
  { Name: 'Meghana', Place: 'Eluru', Branch: 'MECH', Gender: 'Female', College: 'ACOE' },
  { Name: 'Nikhil', Place: 'Visakhapatnam', Branch: 'IT', Gender: 'Male', College: 'AEC' },
  { Name: 'Nitya', Place: 'Vijayawada', Branch: 'ECE', Gender: 'Female', College: 'ACET' },
  { Name: 'Omkar', Place: 'Guntur', Branch: 'CIVIL', Gender: 'Male', College: 'ACOE' },
  { Name: 'Pavani', Place: 'Nellore', Branch: 'CSE', Gender: 'Female', College: 'AEC' },
  { Name: 'Pranav', Place: 'Kurnool', Branch: 'EEE', Gender: 'Male', College: 'ACET' },
  { Name: 'Priya', Place: 'Anantapur', Branch: 'MECH', Gender: 'Female', College: 'ACOE' },
  { Name: 'Rahul', Place: 'Eluru', Branch: 'IT', Gender: 'Male', College: 'AEC' },
  { Name: 'Riya', Place: 'Visakhapatnam', Branch: 'ECE', Gender: 'Female', College: 'ACET' },
  { Name: 'Rohit', Place: 'Vijayawada', Branch: 'CIVIL', Gender: 'Male', College: 'ACOE' },
  { Name: 'Sai', Place: 'Guntur', Branch: 'CSE', Gender: 'Male', College: 'AEC' },
  { Name: 'Sanjana', Place: 'Nellore', Branch: 'EEE', Gender: 'Female', College: 'ACET' },
  { Name: 'Sathvik', Place: 'Kurnool', Branch: 'MECH', Gender: 'Male', College: 'ACOE' },
  { Name: 'Shreya', Place: 'Anantapur', Branch: 'IT', Gender: 'Female', College: 'AEC' },
  { Name: 'Sneha', Place: 'Eluru', Branch: 'ECE', Gender: 'Female', College: 'ACET' },
  { Name: 'Srinivas', Place: 'Visakhapatnam', Branch: 'CIVIL', Gender: 'Male', College: 'ACOE' },
  { Name: 'Suhas', Place: 'Vijayawada', Branch: 'CSE', Gender: 'Male', College: 'AEC' },
  { Name: 'Swathi', Place: 'Guntur', Branch: 'EEE', Gender: 'Female', College: 'ACET' },
  { Name: 'Tarun', Place: 'Nellore', Branch: 'MECH', Gender: 'Male', College: 'ACOE' },
  { Name: 'Teja', Place: 'Kurnool', Branch: 'IT', Gender: 'Male', College: 'AEC' },
  { Name: 'Trisha', Place: 'Anantapur', Branch: 'ECE', Gender: 'Female', College: 'ACET' },
  { Name: 'Varun', Place: 'Eluru', Branch: 'CIVIL', Gender: 'Male', College: 'ACOE' },
  { Name: 'Veda', Place: 'Visakhapatnam', Branch: 'CSE', Gender: 'Female', College: 'AEC' },
  { Name: 'Vikram', Place: 'Vijayawada', Branch: 'EEE', Gender: 'Male', College: 'ACET' },
  { Name: 'Yash', Place: 'Guntur', Branch: 'MECH', Gender: 'Male', College: 'ACOE' },
  { Name: 'Yamini', Place: 'Nellore', Branch: 'IT', Gender: 'Female', College: 'AEC' },
  { Name: 'Akhil', Place: 'Kurnool', Branch: 'ECE', Gender: 'Male', College: 'ACET' },
  { Name: 'Anusha', Place: 'Anantapur', Branch: 'CIVIL', Gender: 'Female', College: 'ACOE' },
  { Name: 'Aravind', Place: 'Eluru', Branch: 'CSE', Gender: 'Male', College: 'AEC' },
  { Name: 'Bhargavi', Place: 'Visakhapatnam', Branch: 'EEE', Gender: 'Female', College: 'ACET' },
  { Name: 'Chandu', Place: 'Vijayawada', Branch: 'MECH', Gender: 'Male', College: 'ACOE' },
  { Name: 'Deeksha', Place: 'Guntur', Branch: 'IT', Gender: 'Female', College: 'AEC' },
  { Name: 'Dharma', Place: 'Nellore', Branch: 'ECE', Gender: 'Male', College: 'ACET' },
  { Name: 'Gowtham', Place: 'Kurnool', Branch: 'CIVIL', Gender: 'Male', College: 'ACOE' },
  { Name: 'Hema', Place: 'Anantapur', Branch: 'CSE', Gender: 'Female', College: 'AEC' },
  { Name: 'Jaya', Place: 'Eluru', Branch: 'EEE', Gender: 'Female', College: 'ACET' },
  { Name: 'Kiran', Place: 'Visakhapatnam', Branch: 'MECH', Gender: 'Male', College: 'ACOE' },
  { Name: 'Lavanya', Place: 'Vijayawada', Branch: 'IT', Gender: 'Female', College: 'AEC' },
  { Name: 'Mahesh', Place: 'Guntur', Branch: 'ECE', Gender: 'Male', College: 'ACET' },
  { Name: 'Mounika', Place: 'Nellore', Branch: 'CIVIL', Gender: 'Female', College: 'ACOE' },
  { Name: 'Naveen', Place: 'Kurnool', Branch: 'CSE', Gender: 'Male', College: 'AEC' },
  { Name: 'Neha', Place: 'Anantapur', Branch: 'EEE', Gender: 'Female', College: 'ACET' },
  { Name: 'Pavan', Place: 'Eluru', Branch: 'MECH', Gender: 'Male', College: 'ACOE' },
  { Name: 'Pooja', Place: 'Visakhapatnam', Branch: 'IT', Gender: 'Female', College: 'AEC' },
  { Name: 'Rakesh', Place: 'Vijayawada', Branch: 'ECE', Gender: 'Male', College: 'ACET' },
  { Name: 'Ramya', Place: 'Guntur', Branch: 'CIVIL', Gender: 'Female', College: 'ACOE' },
  { Name: 'Ravi', Place: 'Nellore', Branch: 'CSE', Gender: 'Male', College: 'AEC' },
  { Name: 'Sandeep', Place: 'Kurnool', Branch: 'EEE', Gender: 'Male', College: 'ACET' },
  { Name: 'Sanjana', Place: 'Anantapur', Branch: 'MECH', Gender: 'Female', College: 'ACOE' },
  { Name: 'Shiva', Place: 'Eluru', Branch: 'IT', Gender: 'Male', College: 'AEC' },
  { Name: 'Shruthi', Place: 'Visakhapatnam', Branch: 'ECE', Gender: 'Female', College: 'ACET' },
  { Name: 'Siddharth', Place: 'Vijayawada', Branch: 'CIVIL', Gender: 'Male', College: 'ACOE' },
  { Name: 'Sindhu', Place: 'Guntur', Branch: 'CSE', Gender: 'Female', College: 'AEC' },
  { Name: 'Srinath', Place: 'Nellore', Branch: 'EEE', Gender: 'Male', College: 'ACET' },
  { Name: 'Suhani', Place: 'Kurnool', Branch: 'MECH', Gender: 'Female', College: 'ACOE' },
  { Name: 'Surya', Place: 'Anantapur', Branch: 'IT', Gender: 'Male', College: 'AEC' },
  { Name: 'Swetha', Place: 'Eluru', Branch: 'ECE', Gender: 'Female', College: 'ACET' },
  { Name: 'Tejas', Place: 'Visakhapatnam', Branch: 'CIVIL', Gender: 'Male', College: 'ACOE' },
  { Name: 'Triveni', Place: 'Vijayawada', Branch: 'CSE', Gender: 'Female', College: 'AEC' },
  { Name: 'Vamsi', Place: 'Guntur', Branch: 'EEE', Gender: 'Male', College: 'ACET' },
  { Name: 'Varsha', Place: 'Nellore', Branch: 'MECH', Gender: 'Female', College: 'ACOE' },
  { Name: 'Vijay', Place: 'Kurnool', Branch: 'IT', Gender: 'Male', College: 'AEC' },
  { Name: 'Vinay', Place: 'Anantapur', Branch: 'ECE', Gender: 'Male', College: 'ACET' },
  { Name: 'Yashwanth', Place: 'Eluru', Branch: 'CIVIL', Gender: 'Male', College: 'ACOE' },
  { Name: 'Yamini', Place: 'Visakhapatnam', Branch: 'CSE', Gender: 'Female', College: 'AEC' },
  { Name: 'Yogesh', Place: 'Vijayawada', Branch: 'EEE', Gender: 'Male', College: 'ACET' },
  { Name: 'Zara', Place: 'Guntur', Branch: 'MECH', Gender: 'Female', College: 'ACOE' },
  { Name: 'Zeeshan', Place: 'Nellore', Branch: 'IT', Gender: 'Male', College: 'AEC' },
  { Name: 'Zoya', Place: 'Kurnool', Branch: 'ECE', Gender: 'Female', College: 'ACET' },
];

function convertToCSV(arr) {
  const header = Object.keys(arr[0]).join(',');
  const rows = arr.map(obj => Object.values(obj).join(','));
  return [header, ...rows].join('\n');
}

function downloadCSV() {
  const csv = convertToCSV(students);
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'students_details.csv';
  a.click();
  window.URL.revokeObjectURL(url);
}

export default function DownloadCSV() {
  return (
    <button onClick={downloadCSV}>
      Download Students CSV
    </button>
  );
}
