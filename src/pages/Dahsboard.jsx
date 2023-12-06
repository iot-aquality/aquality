import { useEffect, useState } from 'react';


import { TabList, Tabs, Tab, TabPanels, TabPanel } from "@chakra-ui/react"
import WaterLevel from "../components/charts/WaterLevel"
import WaterQuality from "../components/charts/WaterQuality"
import PHLevel from "../components/charts/PHLevel"
import Calendar from "../components/Calendar" 
import WaterLevelLoss from "../components/charts/WaterLevelLoss"
import Metrics from "../components/charts/Metrics"
import Notification from "../components/Notification"
import axios from 'axios';
import { DEVICE_ID, TOKEN } from '../consts';


function Dahsboard() {


  const [webSocket, setWebSocket] = useState(null);
  const [sensorData, setSensorData] = useState({});

  const [startTs, setStartTs] = useState("");
  const [endTs, setEndTs] = useState("");

  useEffect(() => {
    // Establecer conexión WebSocket al montar el componente
 
    const WS_URL = `ws://iot.ceisufro.cl:8080/api/ws/plugins/telemetry?token=${TOKEN}`;
    const socket = new WebSocket(WS_URL);
    setWebSocket(socket);

    socket.onopen = () => {
      const object = {
        tsSubCmds: [
          {
            entityType: "DEVICE",
            entityId: DEVICE_ID,
            scope: "LATEST_TELEMETRY",
            cmdId: 10
          }
        ],
        historyCmds: [],
        attrSubCmds: []
      };
      const data = JSON.stringify(object);
      socket.send(data);
    };

    socket.onmessage = (event) => {
      const received_msg = event.data;

      // Aquí puedes manejar los datos recibidos desde el WebSocket
      // Actualizar el estado según sea necesario
      const parsedData = JSON.parse(received_msg);


      if (parsedData.latestValues) {


        const keys = Object.keys(parsedData.data) 



        if(Object.keys(parsedData.data).length > 1){
          
          const objetoTransformado = {};
          for (const propiedad in parsedData.data) {
            if (Object.hasOwnProperty.call(parsedData.data, propiedad)) {
              objetoTransformado[propiedad] = parsedData.data[propiedad][0][1];
            }
          }
        
          setSensorData((sensorData) => ({
            ...sensorData,
            ...objetoTransformado,
          }));


          return;
        }


        // Actualizar el estado con los valores más recientes
        setSensorData((sensorData) => ({
          ...sensorData,
          [keys]: parsedData.data[keys][0][1],
        }));
      }

    };

    socket.onclose = () => {
      console.log("Connection is closed!");
    };

    return () => {
      // Limpiar conexión WebSocket al desmontar el componente
      if (socket) {
        socket.close();
      }
    };
  }, []);



  return (
    <div className="flex gap-5">

      <div className="w-1/5">
        <Tabs isLazy className="w-full">
          <TabList aria-orientation="vertical" className="" >
            <div className="flex flex-col  w-full">
              <Tab className="w-full">Dashboard</Tab>
              <Tab>Tablas</Tab>
              <Tab>Configuracion</Tab>
              {sensorData.sensor_turbidez && sensorData.sensor_turbidez > 15 && <Notification tipo={"Alerta Turbidez Alta"} nivel={"alto"} />}
              {sensorData.perdida_agua=="true" && <Notification tipo={"Alerta Perdida Agua"} nivel={"alto"} />}
            </div>
          </TabList>
          <TabPanels>
            {/* initially mounted */}
            <TabPanel>
            </TabPanel>
            {/* initially not mounted */}
            <TabPanel>
            </TabPanel>


            <TabPanel>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <div className="w-4/5">
        <h1>Panel de control</h1>



        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <Metrics PHLevel={sensorData.sensor_ph} turbidityLevel={sensorData.sensor_turbidez} />

          <Calendar setStartTs={setStartTs} setEndTs={setEndTs}  />


          <div className="bg-white rounded-md p-4 shadow-md">
            <WaterQuality  startTs={startTs} endTs={endTs} />
            
          </div>
          <div className="bg-white rounded-md p-4 shadow-md">

            <WaterLevel/>

          </div>

          <div className="bg-white rounded-md p-4 shadow-md">

            <PHLevel/>

          </div>
          <div className="bg-white rounded-md p-4 shadow-md">

            <WaterLevelLoss/>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Dahsboard