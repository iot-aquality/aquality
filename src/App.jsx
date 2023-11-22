import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Dahsboard from './pages/Dahsboard'
import { Box } from '@chakra-ui/react'

function App() {
  return (
    <Router>
      
      <Navbar/>
      <Box p={6}>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/dashboard" element={ <Dahsboard/> }/>
        </Routes>
      </Box>
    </Router>
  )
}

export default App
