import React, { useEffect, useState } from 'react';
import fakeUsers from '../../fakeUsers/usersData.json';
import AddedUser from '../AddedUser/AddedUser';
import User from '../User/User';
import './UsersCollection.css';

const UsersCollection = () => {
  const [users, setUsers] = useState([]);
  const [addedUser, setAddedUser] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
      .then(res => res.json())
      .then(data => {
        const usersData = data.results;
        for (let i = 0; i < usersData.length; i++) {
          // const user = usersData[i];
          usersData[i].salary = fakeUsers[i].salary;
        }
        setUsers(usersData);
      })
  }, [])

  const handleAddUser = (user) => {
    const newAddedUser = [...addedUser, user];
    setAddedUser(newAddedUser);
  }

  return (
    <div className='data-container'>
      <div className='user-container'>
        {
          users.map(user => <User user={user} handleAddUser={handleAddUser}></User>)
        }
      </div>
      <div className='added-user-container'>
        <AddedUser addedUser={addedUser}></AddedUser>
      </div>
    </div>
  );
};

export default UsersCollection;