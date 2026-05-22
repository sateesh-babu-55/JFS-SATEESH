import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dell from './components/Dell.jsx'
import Hp from './components/Hp.jsx'
import Infinix from './components/Infinix.jsx'
import Master1 from './components/Mobiles.jsx'
import Laptops from './components/Laptops.jsx'

createRoot(document.getElementById('root')).render(
  <Laptops></Laptops>,
)
