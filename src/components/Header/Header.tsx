interface Props {
    searchTerm: string;
    onSearchChange: (term: string) => void;
}


export default function Header({ searchTerm, onSearchChange }: Props) {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-100 shadow">
            <h1 className="text-xl md:text-2xl fonty-bold">User Information</h1>

            {/* Search field */}
            <div className="relative w-64">
                <input 
                type="text" 
                placeholder="Search by name..." 
                value={searchTerm} 
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border-gray-300 rounded"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
            </div>
        </header>
    )
}