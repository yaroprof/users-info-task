import type { User } from '../types/user';

interface Props {
    user: User | null;
    onClose: () => void;
}


export default function UserModal({ user, onClose }: Props) {
    if (!user) return null;


    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
                <h2 className='text-lg font-bold mb-4'>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <p>Company: {user.company.name}</p>
                <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>

                <button onClick={onClose}>Close</button>
            </div>


        </div>
    )
}


