import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Side from './Layout/Side.jsx'
import Main from './Layout/Main.jsx'
import Gps from './Layout/Gps.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="min-h-screen bg-gray-200">
  <BrowserRouter>
    <Side />
    <Main />
  </BrowserRouter>
  </div>
)
