function LikeFood() {
    return ( 
        <div className="flex items-center">
        <div className="flex rounded-2xl overflow-hidden">
          <img
            src="https://picsum.photos/200"
            className="shrink-0 h-40 w-40 rounded-full"
            alt="Photostore"
          />
          <div className="p-8 bg-white">
            <header className="mb-2">
              <h3 className="text-xl  font-bold text-slate-900 group-hover:text-slate-900">
                [맛케터] 내가 사랑하던 돈까스들..
              </h3>
            </header>
            <p className="text-base font-medium text-slate-500 group-hover:text-slate-700">
                12월이되고 돈까스를 그녀와함께하던 크리스마스가 기억이나네요...
            </p>
          </div>
        </div>
      </div>

    );
}

export default LikeFood
