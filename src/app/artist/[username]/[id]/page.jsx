import Link from "next/link";

const getAlbum = async (id) => {
    const res = await fetch(`http://localhost:3002/albums/${id}`);
    return res.json();
}

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:3002/albums/${id}`);
    const album = await res.json();
    return (
        { title: album.title }
    )
}
// export async function generateStaticParams({ params }) {
//     const { id } = await params;
//     const res1 = await fetch(`http://localhost:3002/albums/${id}`);
//     const data = await res1.json();
//     const res = await fetch(`http://localhost:3002/albums?artistUsername=${data.artistUsername}`)
//     const albums = await res.json();
//     return albums.map(album => ({ id: album.id }))
// }

export async function generateStaticParams() {
  
    const res = await fetch(`http://localhost:3002/albums`);
    const albums = await res.json();
 
    return albums.map((album) => ({
      username: album.artistUsername,
      id: album.id,
    }));
}



const AlbumDetailsPage = async ({ params }) => {

    const { id } = await params;
    const album = await getAlbum(id);

    return (
        <>
            <div className="min-h-screen bg-gray-950 text-white p-6 md:p-12 flex justify-center items-center">
                <div className="max-w-2xl w-full bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">

                    {/* Back Button */}
                    <Link
                        href={`/artist/${album.artistUsername}`}
                        className="inline-flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white mb-6 transition-colors"
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                        <span>Back to Albums</span>
                    </Link>

                    {/* Album Header Info */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-xs text-purple-400 font-semibold tracking-wider uppercase bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                                    {album.genre}
                                </span>
                                <span className="text-xs text-gray-400 font-medium">
                                    {album.releaseYear}
                                </span>
                            </div>
                            <h1 className="text-2xl md:text-3xl font-bold tracking-wide">{album.title}</h1>
                            <p className="text-sm text-gray-400 mt-1">Artist: <span className="text-purple-300">@{album.artistUsername}</span></p>
                        </div>

                        <div className="bg-purple-600/20 border border-purple-500/30 px-4 py-3 rounded-2xl text-center">
                            <span className="block text-xl font-bold text-purple-300">{album.songs.length}</span>
                            <span className="text-[10px] text-gray-400 uppercase tracking-wider">Total Tracks</span>
                        </div>
                    </div>

                    {/* Track List Section */}
                    <div className="mt-6">
                        <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Album Tracks</h2>

                        <div className="space-y-3">
                            {album.songs.map((song, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all group"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-gray-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                            {index + 1}
                                        </span>
                                        <span className="text-sm font-medium text-gray-200">{song}</span>
                                    </div>

                                    <button className="text-gray-400 hover:text-purple-400 text-sm transition-colors p-2">
                                        <i className="fa-solid fa-play"></i>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default AlbumDetailsPage;