import type { User } from '../../types/user';

interface Props {
    users: User[];
    onSelectUser: (user: User) => void;
}

export default function UserTable({ users, onSelectUser }: Props) {
    return (
        <div>
            {/* Mobile cards */}
            <div className="sm:hidden space-y-4">
                {users.map((user) => (
                    <div key={user.id} className='border p-4 rounded shadow-sm bg-white text-center'>
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Name:</strong> {user.email}</p>
                        <p><strong>Name:</strong> {user.company.name}</p>
                        <button className='mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600' onClick={() => onSelectUser(user)}>View</button>
                    </div>
                ))}
            </div>

            {/* Desktop table */}
            <div className="hidden sm:block overflow-x-auto">
                <table className='min-w-full text-sm border border-gray-200'>
                    <thead className='bg-gray-100'>
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
                                <td className="p-2 border-b">{user.name}</td>
                                <td className="p-2 border-b">{user.email}</td>
                                <td className="p-2 border-b">{user.company.name}</td>
                                <td className="p-2 border-b">
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600" onClick={() => onSelectUser(user)}>View</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )







    // return (

    //     <table className="min-w-full border-red-700 text-sm">
    //         <thead className="bg-gray-100">
    // <tr>
    //     <th className="p-2 next-left border-b">Name</th>
    //     <th className="p-2 next-left border-b">Email</th>
    //     <th className="p-2 next-left border-b">Company</th>
    //     <th className="p-2 next-left border-b">Actions</th>
    // </tr>
    //         </thead>
    //         <tbody>
    //             {users.map((user) => (
    // <tr key={user.id} className="hover:bg-gray-50">
    //     <td className="p-2 border-b">{user.name}</td>
    //     <td className="p-2 border-b">{user.email}</td>
    //     <td className="p-2 border-b">{user.company.name}</td>
    //     <td className="p-2 border-b">
    //         <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600" onClick={() => onSelectUser(user)}>View</button></td>
    // </tr>
    //             ))}

    //         </tbody>
    //     </table>


    // )
}