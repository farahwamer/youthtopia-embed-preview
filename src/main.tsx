import React from 'react'
import App from './App'
import './index.css'
import { createRoot } from 'react-dom/client'

// const script = document.createElement('script')
// script.src = 'https://youthtopia.vercel.app/embed/lot-widget.js'
// script.async = true
// document.body.appendChild(script)

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
