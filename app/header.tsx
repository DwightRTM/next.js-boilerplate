export default function Header() {
    return (
        <header className="w-full bg-gray-900 text-white py-6 px-6 border-b border-gray-700">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">Your Brand</div>
                <nav className="flex gap-8">
                    <a href="/" className="hover:text-gray-300 transition">Home</a>
                    <a href="#" className="hover:text-gray-300 transition">About</a>
                    <a href="#" className="hover:text-gray-300 transition">Services</a>
                    <a href="#" className="hover:text-gray-300 transition">Contact</a>
                </nav>
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded transition">
                    Sign In
                </button>
            </div>
        </header>
    );
}
