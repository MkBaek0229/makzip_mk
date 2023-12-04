import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './Layout/Header.jsx'
import Footer from './Layout/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './Layout/Navigation.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />  
    <Navigation />
    <App />
    <Footer />
  </BrowserRouter>
)
