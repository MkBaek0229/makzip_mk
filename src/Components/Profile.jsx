function Profile() {
    return ( 
        <div className="flex items-center">
        <div className="flex rounded-2xl overflow-hidden items-center">
          <img
            src="https://picsum.photos/200"
            className="shrink-0 h-40 w-40 rounded-full p-3"
            alt="Photostore"
          />
          <div className="p-8 bg-white">
            <header className="mb-2">
              <h3 className="text-xl  font-bold text-slate-900 group-hover:text-slate-900">
                여기에 제목을 작성합니다.
              </h3>
            </header>
            <p className="text-base font-medium text-slate-500 group-hover:text-slate-700">
                여기에 텍스트를 작성합니다.
            </p>
          </div>
        </div>
      </div>

    );
}

export default Profile
