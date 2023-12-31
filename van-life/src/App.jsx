
import { Routes, Route, Link, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import VansDetail from './pages/VansDetail'

import '../server'
import './App.css'
import Vans from './pages/Vans'

function App() {
  

  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VansDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
