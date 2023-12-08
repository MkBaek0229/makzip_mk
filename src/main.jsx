import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import { RecoilRoot } from 'recoil'





ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="min-h-screen bg-gray-200">
    <RecoilRoot>
  <BrowserRouter>
    <Root />
  </BrowserRouter>
  </RecoilRoot>
  </div>
)
