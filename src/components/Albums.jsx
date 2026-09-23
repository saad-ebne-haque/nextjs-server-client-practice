





export default  function Albums({ list }) {

    return (
        <section className="min-h-screen bg-slate-950 px-4 py-10 text-white">
            <div className="mx-auto max-w-6xl">

                {/* Section Header */}
                <div className="mb-8">
                    <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
                        Music Collection
                    </p>

                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Latest Albums
                    </h2>

                    <p className="mt-3 text-slate-400">
                        Explore the {"artist's"} music collection.
                    </p>
                </div>

                {/* Album Cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {list.map((album) => (
                        <article
                            key={album.id}
                            className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-purple-500/60 hover:shadow-purple-900/20"
                        >
                            {/* Album Cover */}
                            <div className="relative flex h-48 items-center justify-center overflow-hidden bg-linear-to-br from-purple-600 via-indigo-600 to-slate-900">

                                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />

                                <div className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-black/10" />

                                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-8 border-white/20 bg-slate-950 shadow-xl transition duration-500 group-hover:rotate-12">
                                    <div className="h-8 w-8 rounded-full border-4 border-purple-400 bg-slate-900" />
                                </div>

                                <span className="absolute bottom-3 left-3 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                    {album.releaseYear}
                                </span>

                                <span className="absolute right-3 top-3 rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-sm">
                                    Album
                                </span>
                            </div>

                            {/* Album Content */}
                            <div className="p-5">

                                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
                                    {album.genre}
                                </p>

                                <h3 className="text-xl font-bold text-white transition group-hover:text-purple-300">
                                    {album.title}
                                </h3>

                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-sm text-slate-400">
                                        {album.songs.length} Songs
                                    </span>

                                    <span className="text-sm text-slate-500">
                                        {album.releaseYear}
                                    </span>
                                </div>

                                {/* Song List */}
                                <div className="mt-4 space-y-2 border-t border-slate-800 pt-4">
                                    {album.songs.map((song, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 text-sm text-slate-300"
                                        >
                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs text-slate-400">
                                                {index + 1}
                                            </span>

                                            <span className="truncate">
                                                {song}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Action Button */}
                                <button
                                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-purple-500 active:scale-95"
                                >
                                    <span>▶</span>
                                    Explore Album
                                </button>

                            </div>
                        </article>
                    ))}

                </div>
            </div>
        </section>
    )
}