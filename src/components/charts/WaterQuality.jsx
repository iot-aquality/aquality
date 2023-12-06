import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL, TOKEN } from "../../consts"


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Evolución de la calidad del agua',
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Horas',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Calidad del Agua %',
      },
    },
  },
};

const labels = [
  '7:00 AM',
  '9:00 AM',
  '12:00 PM',
  '16:00 PM',
  '17:00 PM',
  '18:00 PM',
  '19:00 PM',
];

export const data = {
  labels,
  datasets: [
    {
      label: 'Camión 1',
      data: [80, 90, 75, 85, 95, 80, 88], // Porcentajes de calidad del agua para Camión 1
      borderColor: 'rgba(45, 212, 191, 1)', //cyan-400
      backgroundColor: 'rgba(34, 211, 238, 0.5)',
    },
    {
      label: 'Camión 2',
      data: [70, 85, 80, 75, 90, 85, 80], // Porcentajes de calidad del agua para Camión 2
      borderColor: 'rgba(34, 211, 238, 1)', //sky-400
      backgroundColor: 'rgba(34, 211, 238, 0.5)',
    },
  ],
};

  

function WaterQuality({startTs, endTs}) {

  const [turbidityLevel, setTurbidityLevel] = useState();

  const fetchData = async () => {

    const device = 'sensor_turbidez';
  
    if( startTs < 100 ){
      return;
    }

    try {
      const response = await axios.get(`${API_URL}${device}&startTs=${startTs=1701845920381}&endTs=${endTs} `, {
        headers: {
          'Authorization': `Bearer ${TOKEN}`
        }
      });
      console.log("from water quality")
      console.log(response.data)


    //  if (array.length <= 10) {
    //    return array.slice(); // Devuelve una copia del array original
    //  }               
    
      console.log(response.data[device])
      setTurbidityLevel(response.data.slice);


    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  return <Line 
  options={options} 
  data={data} 
  />;
}


export default WaterQuality
