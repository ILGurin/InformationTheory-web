import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import Compression from './pages/Compression'
import Encryption from './pages/Encryption'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/compression' element={<Compression/>}/>
        <Route path='/encryption' element={<Encryption/>} />
      </Routes>
    </>
  )
}

export default App
