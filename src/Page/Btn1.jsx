import { useRecoilState } from "recoil";


import { todosAtom } from "../states/"

function Btn1() { 
    // props의 단점: ex: todo면 todo 작성 컴포넌트안에 여러개의컴포넌트가존재 단계별로 props를 거치면서 전달해주면서 todo list 컴포넌트 안쪽으로 이동해야함. props가 가야할길이 너무많아짐. == 데이터 관리가 힘들어짐
    // 그래서 전역관리데이터를 만들어놓고 데이터변경 -> 전역관리데이터 -> 영향받는장소로이동하게
    // Redux에서는 Store recoil은 아토믹이라고한다.
    // 내가만든 데이터 todosAtom은 /states/index <- index는 메인경로라 안써도처리됨
    // todo data를 끌고올거임
   const [todos, setTodos] = useRecoilState(todosAtom)
    
    return (
        <div class="container mx-auto">
    <section className="p-5">
     <header className="mb-4">
       <h2 className="font-bold text-3xl">헤더</h2>
       <h1>작성페이지</h1>
        <div>현재 글 갯수 : {todos.length}</div>
    <form>
        <input type="text" placeholder="할 일을 입력해주세요."/>
        <input type="submit" value="작성"/>
    </form>
     </header>
     </section>
</div>
    );
    
}

export default Btn1;