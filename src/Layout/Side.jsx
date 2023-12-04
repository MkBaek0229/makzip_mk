import { Link } from "react-router-dom";

function Side() {
  return (
    <aside className="bg-white shadow-sm -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100">
      <div className="relative">
      <Link to="/" className="py-6 px-8 text-center"><h3 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">홈 화면</h3></Link>
      </div>
      <div className="m-4">
        <ul className="mb-4 flex flex-col gap-1">
          <li>
          <Link to="/btn1" className="active px-4 py-1 text-sm align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize">
          운동 기록
          </Link>
          </li>
          <li><Link to="/btn2" className="active align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize">통계 및 분석 화면</Link></li>
          <li><Link to="/btn3" className="active align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize">목표 설정 화면</Link></li>
          <li><Link to="/btn4" className="active align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize">커뮤니티 화면</Link></li>
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
  );
}

export default Side;
