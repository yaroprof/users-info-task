import type { User } from '../../types/user';

interface Props {
    users: User[];
    onSelectUser: (user: User) => void;
}

export default function UserTable({ users, onSelectUser }: Props) {
    return (
        <div className="container mx-auto px-4 py-6 bg-gray-50 rounded-xl shadow-lg">
            {/* Mobile cards */}
            <div className="sm:hidden space-y-6">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="border border-gray-200 p-6 rounded-xl shadow-md bg-white hover:shadow-xl transition-all duration-300 hover:bg-gradient-to-r from-gray-50 to-white"
                    >
                        <p className="text-lg font-semibold text-gray-800"><strong>Name:</strong> {user.name}</p>
                        <p className="text-md text-gray-600"><strong>Email:</strong> {user.email}</p>
                        <p className="text-md text-gray-600"><strong>Company:</strong> {user.company.name}</p>
                        <button
                            className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105"
                            onClick={() => onSelectUser(user)}
                        >
                            View
                        </button>
                    </div>
                ))}
            </div>

            {/* Desktop table */}
            <div className="hidden sm:block overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden mx-auto shadow-md bg-white">
                    <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
                        <tr>
                            <th className="p-4 text-lg text-left font-medium text-gray-700 border-b">Name</th>
                            <th className="p-4 text-lg text-left font-medium text-gray-700 border-b">Email</th>
                            <th className="p-4 text-lg text-left font-medium text-gray-700 border-b">Company</th>
                            <th className="p-4 text-lg text-left font-medium text-gray-700 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr
                                key={user.id}
                                className="hover:bg-gray-50 hover:shadow-lg transition-all duration-300"
                            >
                                <td className="p-4 border-b text-gray-800">{user.name}</td>
                                <td className="p-4 border-b text-gray-800">{user.email}</td>
                                <td className="p-4 border-b text-gray-800">{user.company.name}</td>
                                <td className="p-4 border-b">
                                    <button
                                        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105"
                                        onClick={() => onSelectUser(user)}
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


