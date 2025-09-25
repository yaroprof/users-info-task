interface Props {
    searchTerm: string;
    onSearchChange: (term: string) => void;
}


export default function Header({ searchTerm, onSearchChange }: Props) {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-400 shadow">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 ml-4">User Information</h1>

            {/* Search field */}
            <div className="relative w-72">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">🔍</span>
            </div>
        </header>
    );
}