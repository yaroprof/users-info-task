import { useState } from 'react';
import type { User } from './types/user';

import './App.css'

import Header from './components/Header/Header';
import UserTable from './components/UserTable/UserTable';
import { useUsers } from './hooks/useUsers';
import UserModal from './components/UserModal/UserModal';

function App() {
  const { users, loading } = useUsers();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchTerm, setSearchTerm] = useState('');


  // Filtered users based on search term

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );


  return (
    <>
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <main className='p-4'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <UserTable users={filteredUsers} onSelectUser={setSelectedUser} />
          // <UserTable users={users} onSelectUser={setSelectedUser} />
        )}

        {/* Modal window */}
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      </main>



    </>
  )
}

export default App
