import { Route, Routes } from 'react-router'
import HomePage from './components/HomePage'
import BoardPage from './components/BoardPage'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/BoardPage" element={<BoardPage />}/>
      </Routes>
    </>
  )
}

export default App
