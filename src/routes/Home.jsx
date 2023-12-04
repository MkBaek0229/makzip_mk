import LikeFood from "../Components/LikeFood";

function Home() {
    return (
  
        <div className="container mx-auto p-4 xl:ml-80">
          <section className="p-5">
            <header className="mb-4">
              <h2 className="font-bold text-3xl">내 게시물</h2>
            </header>
            </section>
            <LikeFood />
        </div>
     
    );
}

export default Home;