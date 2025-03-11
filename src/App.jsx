import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Layout/Navbar/Navbar'
import Footer from './components/Layout/Footer/Footer'
import AppRoutes from './routes'
import './index.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App 