import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { ThemeProvider } from '../src/contexts/ThemeProvider.tsx'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
    <Analytics />
    <SpeedInsights />
    <App />
  </ThemeProvider>
  </React.StrictMode>,
)
