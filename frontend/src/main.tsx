import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from '~pages/Router'
import './index.css'

const element = document.getElementById('root') as HTMLElement
const root = createRoot(element)

root.render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
