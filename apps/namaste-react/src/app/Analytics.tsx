import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      //   display: true,
      //   text: 'Chart.js Bar Chart',
    },
  },
  barThickness: 40,
  scales: {
    x: {
      ticks: { color: 'rgba(1, 31, 61, 1)', font: { size: 12 } },
      border: { display: false },
    //   grid: { display: false },
      stacked: true,
    },
    y: {
      ticks: { display: false },
      border: { display: false },
    //   grid: { display: false },
      stacked: true,
      beginAtZero: true,
    },
  },
};

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const data = {
  labels,
  datasets: [
    {
      //   label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(205, 81, 91, 1)',
    },
    {
      //   label: 'Dataset 2',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(224, 120, 0, 1)',
    },
    {
      //   label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(100, 190, 184, 1)',
    },
  ],
};
export default function Analytics() {
  return <Bar options={options} data={data} width={1000} className='duration-200 transition-all'/>;
}
