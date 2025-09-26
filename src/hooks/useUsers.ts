import { useEffect, useState } from "react";
import type { User } from "../types/user";

export function useUsers() {
    // State for users and loading status
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);


    // Fetch users from API on component mount
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())

            .then((data: User[]) => {
                console.log(data);
                setUsers(data);
            })
            .finally(() => setLoading(false));
    }, []);

    return { users, loading };
}
