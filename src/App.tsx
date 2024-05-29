import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import Compression from './pages/Compression'
import Encryption from './pages/Encryption'

function App() {
  const BASE_PATH = "/InformationTheory-web";
  return (
    <>
      <Routes>
        <Route path={`${BASE_PATH}/`} element={<MainPage/>}/>
        <Route path={`${BASE_PATH}/compression`} element={<Compression/>}/>
        <Route path={`${BASE_PATH}/encryption`} element={<Encryption/>} />
      </Routes>
    </>
  )
}

export default App
