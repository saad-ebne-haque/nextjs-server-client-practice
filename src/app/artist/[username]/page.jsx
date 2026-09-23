// import AlbumCard from '@/components/AlbumCard'

// import { generateMetadata } from "@/app/books/[id]/page";
import AlbumCard from "@/components/AlbumCard";



const getAlbums = async (username) => {
    const res = await fetch(`http://localhost:3002/albums?artistUsername=${username}`);
    return res.json();
}

const getArtist = async (username) => {
    const res = await fetch(`http://localhost:3002/artists?username=${username}`);
    return res.json();
}

export async function generateMetadata({ params }) {
    const { username } = await params;
    const res = await fetch(`http://localhost:3002/artists?username=${username}`);
    const artist = await res.json();
    return (
        { title: artist[0].name }
    )
}

export async function generateStaticParams() {
    const res = await fetch('http://localhost:3002/artists');
    const artists = await res.json();

    return artists.map(artist => ({ username: artist.username }))
}


export default async function AlbumsPage({ params }) {
    const { username } = await params;

    const albumsRes = getAlbums(username);
    const artistRes = getArtist(username);

    const [artist, albums] = await Promise.all([artistRes, albumsRes]);

    const { name, genre, country } = artist[0];


    return (

        <main className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                {/* Header Section */}
                <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
                            Artist Profile: {name} ({country})
                        </p>
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            {genre}
                        </h2>

                    </div>

                    {/* Album Count Badge */}
                    <div className="w-fit rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
                        {albums.length} Albums
                    </div>
                </div>

                {/* Albums Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        albums.map(album => <AlbumCard key={album.id} album={album}></AlbumCard>)
                    }
                </div>

            </div>
        </main>
    )
}