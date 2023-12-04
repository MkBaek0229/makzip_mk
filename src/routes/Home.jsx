import LikeFood from "../Components/LikeFood";

function Home() {
    return (
      <div className="h-screen bg-gray-100">
        <nav className="bg-primary py-4">
          <div className="container mx-auto px-5">
            <h1 className="font-bold text-xl text-black">내가 사랑하는 맛집들</h1>
          </div>
        </nav>
  
        <div className="container mx-auto">
          <section className="p-5">
            <header className="mb-4">
              <h2 className="font-bold text-lg">내 게시물</h2>
            </header>
            </section>
            <LikeFood />
        </div>
      </div>
    );
}

export default Home;