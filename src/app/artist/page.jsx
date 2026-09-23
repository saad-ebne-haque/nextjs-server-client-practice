import ArtistCard from "@/components/ArtistCard";


async function getArtist() {
    const res = await fetch('http://localhost:3002/artists');
    return res.json();
}

export const metadata={
    title:'Artist',
}

export default async function ArtistsPage() {
    const artists =await getArtist();

   
    return (
        <main className="min-h-screen bg-slate-950 px-4 py-12 text-white sm:px-6 lg:px-8">

            <div className="mx-auto max-w-7xl">

                {/* Hero Section */}
                <section className="relative mb-12 overflow-hidden rounded-3xl border border-purple-500/20 bg-linear-to-br from-purple-900/60 via-slate-900 to-slate-950 px-6 py-12 sm:px-10 sm:py-16">

                    {/* Decorative Circles */}
                    <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />

                    <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />

                    <div className="relative z-10 max-w-2xl">

                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
                            Sound & Soul
                        </p>

                        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                            Discover Your
                            <span className="block text-purple-400">
                                Favorite Artists
                            </span>
                        </h1>

                        <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                            Explore talented artists, discover their music,
                            and find the albums that match your mood.
                        </p>

                        {/* Decorative Music Bars */}
                        <div className="mt-8 flex items-end gap-1.5">
                            <span className="h-4 w-1.5 rounded-full bg-purple-400" />
                            <span className="h-8 w-1.5 rounded-full bg-purple-400" />
                            <span className="h-12 w-1.5 rounded-full bg-purple-500" />
                            <span className="h-6 w-1.5 rounded-full bg-purple-400" />
                            <span className="h-10 w-1.5 rounded-full bg-purple-500" />
                            <span className="h-5 w-1.5 rounded-full bg-purple-400" />
                            <span className="h-9 w-1.5 rounded-full bg-purple-500" />
                        </div>

                    </div>

                </section>

                {/* Section Heading */}
                <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

                    <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
                            Explore Music
                        </p>

                        <h2 className="text-3xl font-bold sm:text-4xl">
                            All Artists
                        </h2>

                        <p className="mt-2 text-sm text-slate-400">
                            Find your next favorite voice.
                        </p>
                    </div>

                    {/* Practice: Add artist count dynamically */}
                    <div className="w-fit rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
                        16 Artists
                    </div>

                </div>

                {/* Search & Filter UI */}
                <div className="mb-10 flex flex-col gap-4 sm:flex-row">

                    <div className="flex flex-1 items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3">

                        <span className="text-slate-500">⌕</span>

                        <input
                            type="text"
                            placeholder="Search artists..."
                            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                        />

                    </div>

                    <button
                        className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-purple-500 hover:text-purple-400"
                    >
                        All Genres ▾
                    </button>

                </div>

                {/* Artists Grid */}
                {/* Practice: Map your artists data here */}

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {/* Example Card Layout */}
                    {
                        artists.map(artist => <ArtistCard key={artist.id} artist={artist}></ArtistCard>)
                    }

                </div>

            </div>

        </main>
    )
}