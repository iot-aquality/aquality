import { TabList, Tabs, Tab, TabPanels, TabPanel } from "@chakra-ui/react"
import WaterLevel from "../components/charts/WaterLevel"
import WaterQuality from "../components/charts/WaterQuality"
import PHLevel from "../components/charts/PHLevel"
import Calendar from "../components/Calendar" 
import WaterLevelLoss from "../components/charts/WaterLevelLoss"
import Metrics from "../components/charts/Metrics"

function Dahsboard() {
  return (
    <div className="flex gap-5">

      <div className="w-1/5">
        <Tabs isLazy className="w-full">
          <TabList aria-orientation="vertical" className="" >
            <div className="flex flex-col  w-full">
              <Tab className="w-full">Dashboard</Tab>
              <Tab>Tablas</Tab>
              <Tab>Configuracion</Tab>
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

            <Metrics/>

          <Calendar/>


          <div className="bg-white rounded-md p-4 shadow-md">
            <WaterQuality/>
            
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