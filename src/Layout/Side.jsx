import {Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import Btn1 from "../Page/Btn1";
import Btn2 from "../Page/Btn2";
import Btn3 from "../Page/Btn3";
import Btn4 from "../Page/Btn4";
import Menu from "../Components/Menu";

function Side() {
  return (
    <div class="min-h-screen bg-gray-200 flex">
    {/* 실제로 렌더링하는곳. */}
    <Menu />
  {/* 여기는 라우터처리해주는곳*/}
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/btn1" element={<Btn1 />} />
      <Route path="/btn2" element={<Btn2/>} />  
      <Route path="/btn3" element={<Btn3 />} />
      <Route path="/btn4" element={<Btn4 />} />
    </Routes>
    </div>
  );
}

export default Side;
