import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="min-h-screen bg-gray-200">
  <BrowserRouter>
    <Root />
  </BrowserRouter>
  </div>
)
