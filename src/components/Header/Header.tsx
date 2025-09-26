interface Props {
    searchTerm: string;
    onSearchChange: (term: string) => void;
}


export default function Header({ searchTerm, onSearchChange }: Props) {
    return (
        <header className="sticky top-0 z-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 sm:px-10 bg-white/70 backdrop-blur-md shadow-md border-b border-gray-200">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center sm:text-left">User Information</h1>

            {/* Search field */}
            <div className="relative w-full sm:w-72">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 bg-white/80 text-gray-800 
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 backdrop-blur-sm"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">🔍</span>
            </div>
        </header>
    );
}