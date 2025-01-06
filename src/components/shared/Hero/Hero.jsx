export default function Hero() {
  return (
    <div className="flex pt-12 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
    <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
        <div className="w-full md:w-1/2 lg:pr-32">
            <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">Anime Big 3 di Jepang</h2>
            <h3
                className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
                Istilah 3 Besar dalam anime mengacu pada tiga serial anime dan manga paling populer dalam genre Shonen: One Piece, Naruto, dan Bleach. Manga ini telah mengumpulkan kesuksesan besar dalam hal penjualan, popularitas, dan kualitas keseluruhan.
            </h3>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
                <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500">Lihat</button>
            </div>
        </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/561b8972-b18d-48a1-8717-1028f738ef78/dfs0zi8-c4426eb7-6403-49bc-92ea-6db99a3d8b67.jpg/v1/fill/w_1039,h_769,q_70,strp/the_big_3__ichigo__naruto_and_luffy__by_moiseart21_dfs0zi8-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvNTYxYjg5NzItYjE4ZC00OGExLTg3MTctMTAyOGY3MzhlZjc4XC9kZnMwemk4LWM0NDI2ZWI3LTY0MDMtNDliYy05MmVhLTZkYjk5YTNkOGI2Ny5qcGciLCJ3aWR0aCI6Ijw9MTA4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.DKHB2BOavnxoUdlNmUguf6ue-2xksd1VyFg8kgh-p9w"/>
            </div>
        </div>
    </div>
  );
}
