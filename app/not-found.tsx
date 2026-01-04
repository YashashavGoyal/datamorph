import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] text-center space-y-4 sm:space-y-6 px-4 pt-24 sm:pt-0">
            <div className="space-y-2">
                <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400 animate-pulse">
                    404
                </h1>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-200">Page Not Found</h2>
            </div>
            <p className="text-gray-400 text-sm sm:text-lg max-w-xs sm:max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-200 border rounded-full hover:bg-white/10 border-white/10 hover:border-white/20 hover:scale-105 active:scale-95"
            >
                Return Home
            </Link>
        </div>
    )
}
