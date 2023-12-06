import axios from 'axios';
import { useEffect } from 'react';

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
        text: 'Evolución del nivel de PH',
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
          text: 'Niveles de PH',
        },
      },
    },
  };




  
  const labels = [
    '6:00 AM',
    '9:00 AM',
    '12:00 PM',
    '3:00 PM',
    '6:00 PM',
    '9:00 PM',
    '12:00 AM',
  ];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Camión 1',
        data: [7.2, 7.5, 7.0, 7.3, 7.6, 7.8, 7.4], // Niveles de pH para Camión 1
        borderColor: 'rgba(45, 212, 191, 1)', //cyan-400
        backgroundColor: 'rgba(34, 211, 238, 0.5)',
      },
      {
        label: 'Camión 2',
        data: [7.3, 7.6, 7.5, 7.2, 7.7, 7.5, 7.1], // Niveles de pH para Camión 2
        borderColor: 'rgba(34, 211, 238, 1)', //sky-400
        backgroundColor: 'rgba(34, 211, 238, 0.5)',
      },
    ],
  };
      
  
  function PHLevel() {


    const deviceId = 'd9a68890-88fc-11ee-9899-11a8538c56f3';
    const baseUrl = `http://iot.ceisufro.cl:8080/api/plugins/telemetry/DEVICE/${deviceId}/values/timeseries`;
    const keys = 'sensor_ph';
    const startTs = ''; 
    const endTs = '';   
  
    //const apiUrl = `${baseUrl}?keys=${keys}&startTs=${startTs}&endTs=${endTs}`;
    const apiUrl = `${baseUrl}?keys=${keys}`;
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkLm1hcmlsbGFuY2EwMUB1ZnJvbWFpbC5jbCIsInVzZXJJZCI6IjAwYzhjNmIwLTZjMjItMTFlZS04MzgxLWE3M2M5ZmUwYjM0OSIsInNjb3BlcyI6WyJURU5BTlRfQURNSU4iXSwic2Vzc2lvbklkIjoiZWRkN2NiNjItZjU2Mi00YmUwLThkNzEtMTRhMzhjYmMxMDEzIiwiaXNzIjoidGhpbmdzYm9hcmQuaW8iLCJpYXQiOjE3MDE4MjQ3MzQsImV4cCI6MTcwMTgzMzczNCwiZmlyc3ROYW1lIjoiRGFuaWVsIiwibGFzdE5hbWUiOiJNYXJpbGxhbmNhIiwiZW5hYmxlZCI6dHJ1ZSwiaXNQdWJsaWMiOmZhbHNlLCJ0ZW5hbnRJZCI6ImZmNGU4MjYwLTY0ODQtMTFlZS04MzgxLWE3M2M5ZmUwYjM0OSIsImN1c3RvbWVySWQiOiIxMzgxNDAwMC0xZGQyLTExYjItODA4MC04MDgwODA4MDgwODAifQ.wil5-B-zTNdY8xjPjMCP6IKY8fM9omJZrR8ptNlVOvHIgGntcpUSQsK14DVNy_EXNYtth_iC83D1OMKHggXytw'; // Reemplaza con tu token
  
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
  
        // Aquí puedes manejar la respuesta
        console.log(response.data);
      } catch (error) {
        // Aquí puedes manejar los errores
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
  
  
  export default PHLevel
  