import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import Btn1 from "../Page/Btn1";
import Btn2 from "../Page/Btn2";
import Btn3 from "../Page/Btn3";
import Btn4 from "../Page/Btn4";

function Side() {
  return (
    <>
    {/* 실제로 렌더링하는곳. */}
    <aside className="bg-white shadow-sm -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100">
      <div className="relative">
      <NavLink to="/" className="py-6 px-8 text-center"><h3 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">홈 화면</h3></NavLink>
      </div>
      <div className="m-4">
        <ul className="mb-4 flex flex-col gap-1">
          <li>
          <NavLink to="/btn1" className="active px-4 py-1 text-sm align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize">
          운동 기록
          </NavLink>
          </li>
          <li><NavLink to="/btn2" className="active align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize">통계 및 분석 화면</NavLink></li>
          <li><NavLink to="/btn3" className="active align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize">목표 설정 화면</NavLink></li>
          <li><NavLink to="/btn4" className="active align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize">커뮤니티 화면</NavLink></li>
        </ul>

        <ul className="mb-4 flex flex-col gap-1">
          <li className="mx-3.5 mt-4 mb-2">
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-black uppercase opacity-75">가입창</p>
          </li>
          <li>
            <a href="" className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize">
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">가입하기</p>
            </a>
          </li>
          <li>
            <a href="" className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize">
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">로그인하기</p>
            </a>
          </li>
        </ul>
      </div>
    </aside>

  {/* 여기는 라우터처리해주는곳*/}
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/btn1" element={<Btn1 />} />
      <Route path="/btn2" element={<Btn2/>} />  
      <Route path="/btn3" element={<Btn3 />} />
      <Route path="/btn4" element={<Btn4 />} />
    </Routes>
    </>
  );
}

export default Side;
