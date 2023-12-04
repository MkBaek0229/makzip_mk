import { Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import Btn1 from '../routes/Btn1';
import Btn2 from '../routes/Btn2';
import Btn3 from '../routes/Btn3';
import Btn4 from '../routes/Btn4';


function Main() {
    return ( 
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/btn1" element={<Btn1 />} />
        <Route path="/btn2" element={<Btn2/>} />
        <Route path="/btn3" element={<Btn3 />} />
        <Route path="/btn4" element={<Btn4 />} />
      </Routes>
     );
}

export default Main;