import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './i18n'
import './font'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'


const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
<StrictMode>
  <QueryClientProvider client={queryClient} >  
    <HelmetProvider>
      <App /> 
    </HelmetProvider>
  </QueryClientProvider>
  </StrictMode>,
)
