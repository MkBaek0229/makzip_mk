function Header() {
  const [todos, setTodos] = useRecoilState(todosAtom)
    
  return (
      <div class="container">
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


export default Header;