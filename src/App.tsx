import { useState } from 'react';
import type{ User } from './types/user';

import './App.css'

import Header from './components/Header';
import UserTable from './components/UserTable';
import { useUsers } from './hooks/useUsers';

function App() {
  const { users, loading } = useUsers();
  const [selectedUser, setSelectedUser] = useState<User | null >(null);



  return (
    <>
      <Header />
      <main className='p-4'>
            {loading ? (
          <p>Loading...</p>
        ) : (
          <UserTable users={users} onSelectUser={setSelectedUser} />
        )}






   
      </main>

    </>
  )
}

export default App
