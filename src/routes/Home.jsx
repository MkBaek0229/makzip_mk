import { useState } from "react";
import Profile from "../Components/Profile";


function Home() {
  const [visible, setVisible] = useState(false);
  
  return (
      <>
      {visible ?
        <div className="container mx-auto p-4 xl:ml-80">
          <section className="p-5">
            <header className="mb-4">
              <h2 className="font-bold text-3xl">고객님 서비스에 찾아와주셔서 감사합니다.</h2>
            </header>
            </section>
            <Profile /> 
        </div> : 
        <div className="container mx-auto p-4 xl:ml-80">
           <section className="p-5">
            <header className="mb-4">
              <h2 className="font-bold text-3xl">개인 정보를 확인 하고싶으면 로그인 하세요.</h2>
            </header>
            </section>
          
        </div>
        
        }
        </> 
    );
}

export default Home;