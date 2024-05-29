import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './page/home/index'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<><Home /></>} />
        <Route path='/contact' element={<></>} />
      </Routes>

    </>
  )
}

export default App
