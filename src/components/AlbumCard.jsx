import Link from "next/link";



const AlbumCard = ({ album }) => {



    return (
        <>
         
                <div className=" rounded-2xl p-6 bg-gray-900/60 backdrop-blur-xl border border-white/10 shadow-xl text-white transition-all hover:border-purple-500/40 flex flex-col justify-between">

                    {/* Top Header: Genre & Release Year */}
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-xs text-purple-400 font-semibold tracking-wider uppercase bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                            {album.genre}
                        </span>
                        <span className="text-xs text-gray-400 font-medium">
                            {album.releaseYear}
                        </span>
                    </div>

                    {/* Title and Artist Username */}
                    <div className="mb-4">
                        <h2 className="text-lg font-bold text-gray-100 tracking-wide">{album.title}</h2>
                        <p className="text-xs text-gray-400 mt-0.5">@{album.artistUsername}</p>
                    </div>

                    {/* Track Count Info */}
                    <div className="mb-6 text-xs text-gray-400 flex items-center gap-2">
                        <i className="fa-solid fa-music text-purple-400"></i>
                        <span>{album.songs.length} Tracks</span>
                    </div>

                    {/* View Album Button (Next.js Link) */}
                    <Link
                        href={`/artist/${album.artistUsername}/${album.id}`}
                        className="w-full py-2.5 px-4 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold rounded-xl transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                        <span>View Album</span>
                        <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                    </Link>

            </div>
        </>
    );
};

export default AlbumCard;