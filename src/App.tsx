// import { useState } from 'react';
// import { User } from './types/user';

import './App.css'

import Header from './components/Header';
import UserTable from './components/UserTable';

function App() {
  // const { users, setUsers } = useUsers();


  return (
    <>
      <Header />
      <main className='p-4'>
        <UserTable />


        {/* <UserTable users={users} onSelectUser={setSelectUser} /> */}


{/* {loading ? (
  <p>Loading...</p>
)} */}

   
      </main>

    </>
  )
}

export default App
