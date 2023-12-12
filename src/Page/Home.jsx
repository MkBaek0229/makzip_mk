import { useState } from "react";
import Profile from "../Components/Profile";
import classNames from "classnames";


function Home() {
  const [visible, setVisible] = useState(false);
  
  function yes(){
    setVisible(!visible)
  }
  function no(){
    alert("저희 서비스를 이용 하실 수 없습니다.")
  }

  return (
    <>
      {visible ?
        <div class="container p-4 flex-1">
          <section className="p-5">
            <header className="mb-4">
              <h2 className="font-bold text-3xl">고객님 서비스에 찾아와주셔서 감사합니다.</h2>
            </header>
            </section>
            <Profile /> 
            </div>
        : 
        <div class="container p-4 flex-1">
           <section className="p-5">
            <header className="mb-4">
              <h2 className="font-bold text-5xl">개인 정보를 확인 하고싶으면 로그인 하세요.</h2>
              <button onClick={() => yes()}><p className="font-bold text-2xl rounded-full">로그인 하기</p></button>
              <p className="font-bold text-2xl rounded-full"><button onClick={() => no()}>안할래요</button></p>
            </header>
            </section>
            </div>
        }
        </>
    );
}

export default Home;