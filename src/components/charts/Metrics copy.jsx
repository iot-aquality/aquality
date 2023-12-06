import { useState, useEffect } from "react";
import { API_URL, TOKEN } from "../../consts"
import axios from "axios";

const Metrics = () => {

  //ph level state
  const [PHLevel, setPHLevel] = useState(null);
  //turbidity level state
  const [turbidityLevel, setTurbidityLevel] = useState(null);

  const fetchData = async () => {
    const device1 = 'sensor_ph';
    const device2 = 'sensor_turbidez';
    try {
      const response = await axios.get(`${API_URL}${device1},${device2}`, {
        headers: {
          'Authorization': `Bearer ${TOKEN}`
        }
      });

      console.log(response.data)

      // Aquí puedes manejar la respuesta
      setPHLevel(response.data[device1][0].value);
      setTurbidityLevel(response.data[device2][0].value);
    } catch (error) {
      // Aquí puedes manejar los errores
      console.error('Error al realizar la solicitud:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div className="h-52 flex gap-2 justify-evenly items-center mt-10">
      
      
      <div className='flex flex-col justify-between h-full w-2/5 bg-amber-400 py-8 rounded-lg shadow-lg' >
        
        <p className='text-center text-white text-3xl font-bold'>Nivel de ph</p>
        <p className='text-center text-white text-4xl font-bold'>{PHLevel}</p>
        
      </div>
      
      
      <div className='flex flex-col justify-between h-full w-2/5 bg-sky-400 py-8 rounded-lg shadow-lg' >
        
        <p className='text-center text-white text-3xl font-bold'>Nivel de turbiedad</p>
        <p className='text-center text-white text-4xl font-bold'>{turbidityLevel}%</p>
        
      </div>
      
    </div >
  );
};

export default Metrics;
