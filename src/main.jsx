import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './Layout/Header.jsx'
import Footer from './Layout/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />  
    <App />
    <Footer />
  </BrowserRouter>
)
