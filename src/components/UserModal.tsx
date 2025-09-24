import React from 'react';
import type { User } from '../types/user';

interface Props {
    user: User | null;
    onClose: () => void;
}


export default function UserModal({ user, onClose }: Props) {
    if (!user) return null;


    return (
        <div>
            UserModal
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Company: {user.company.name}</p>
            <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>

            <button onClick={onClose}>Close</button>
        </div>
    )
}


