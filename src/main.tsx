import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { ThemeProvider } from '../src/contexts/ThemeProvider.tsx'
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
    <Analytics />
    <App />
  </ThemeProvider>
  </React.StrictMode>,
)
