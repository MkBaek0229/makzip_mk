import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './Layout/Header.jsx'
import Footer from './Layout/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />  
    <App />
    <Footer />
  </>
)
