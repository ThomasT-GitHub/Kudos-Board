import { Route, Routes } from 'react-router'
import HomePage from './components/HomePage'
import BoardPage from './components/BoardPage'
import './App.css'

function App() {

  return (
    <section className="App-view">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/BoardPage/:id" element={<BoardPage />}/>
      </Routes>
    </section>
  )
}

export default App
