interface Props {
    searchTerm: string;
    onSearchChange: (term: string) => void;
}


export default function Header({ searchTerm, onSearchChange }) {
    return (
        <header className="bg-blue-600 text-white p-4 text-xl font-semibold shadow">
            <h1 className="text-2xl mb-2">User Information</h1>

            {/* Search field */}
            <div className="relative w-64">
                <input 
                type="text" 
                placeholder="Search by name..." 
                value={searchTerm} 
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border-gray-300 rounded"
                />
                <span className="">🔍</span>
            </div>
        </header>
    )
}