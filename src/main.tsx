import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRoutes } from './Routers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoutes/>
  </StrictMode>,
)
