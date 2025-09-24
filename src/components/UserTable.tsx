import type { User } from '../types/user';

interface Props {
    users: User[];
    onSelectUser: (user: User) => void;
}

export default function UserTable({ users, onSelectUser }: Props) {
    return (

        <table className="min-w-full border-red-700 text-sm">
            <thead className="bg-gray-100">
                <tr>
                    <th className="p-2 next-left border-b">Name</th>
                    <th className="p-2 next-left border-b">Email</th>
                    <th className="p-2 next-left border-b">Company</th>
                    <th className="p-2 next-left border-b">Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                        <td className="p-2 border-b">test</td>
                        <td className="p-2 border-b">test</td>
                        <td className="p-2 border-b">test</td>
                        <td className="p-2 border-b">
                            <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600" onClick={() => onSelectUser(user)}>View</button></td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}