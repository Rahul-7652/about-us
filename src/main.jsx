import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Page_01 from './abotu-us/Page_01.jsx'
import Page_02 from './abotu-us/Page_02.jsx'
import Page_03 from './abotu-us/Page_03.jsx'
import Page_04 from './abotu-us/Page_04.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Page_01/> */}
    {/* <Page_02/> */}
    <Page_03/>
    {/* <Page_04/> */}
    <App />
  </StrictMode>,
)
