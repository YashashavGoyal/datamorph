export default function Header() {
    return (
        <header className="flex items-center justify-between pb-4 border-b border-gray-800">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                DataMorph
            </h1>
            <div className="text-sm text-gray-400">
                <nav className="flex space-x-4">
                    <a href="/" className="px-3 py-1 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-200">Home</a>
                    <a href="/validate" className="px-3 py-1 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-200">Validate</a>
                    <a href="/convert" className="px-3 py-1 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-200">Convert</a>
                </nav>
            </div>
        </header>
    );
}