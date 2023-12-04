import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">홈 화면</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/btn1">즐겨찾기</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/btn2">검색</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/btn3">맛 설정하기</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/btn4">맛집랭킹</Link>
    </nav>
  );
}

export default Navigation;
