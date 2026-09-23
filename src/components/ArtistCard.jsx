import Link from "next/link";

export default function ArtistCard({ artist }) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-purple-500/60">

            {/* Artist Cover */}
            <div className="relative flex h-52 items-center justify-center overflow-hidden bg-linear-to-br from-purple-700 via-indigo-700 to-slate-950">

                {/* Background Circles */}
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />

                <div className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-black/10" />

                {/* Artist Avatar */}
                <div className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-white/20 bg-slate-800 shadow-2xl">

                    <span className="text-4xl font-bold text-white">
                        {artist.name.charAt(0)}
                    </span>

                </div>

                {/* Artist Badge */}
                <span className="absolute right-3 top-3 rounded-full bg-black/30 px-3 py-1 text-xs text-white backdrop-blur-sm">
                    Artist
                </span>

            </div>

            {/* Artist Details */}
            <div className="p-5">

                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
                    {artist.genre}
                </p>

                <h2 className="text-xl font-bold text-white transition group-hover:text-purple-300">
                    {artist.name}
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                    🌍 {artist.country}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-slate-800 pt-4">

                    <span className="text-sm text-slate-500">
                        Music Artist
                    </span>

                    {/* Practice: Add functionality here */}
                    <span className="text-sm font-medium text-purple-400">
                        <Link href={`artist/${artist.username}`}>View Albums →</Link>
                    </span>

                </div>

            </div>

        </article>
    )
}