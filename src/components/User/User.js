import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import './User.css';

const User = (props) => {
  const { name, email, phone, picture, salary } = props.user;

  const [mobile, setMobile] = useState('');

  const handleShowPhoneNo = () => setMobile(phone);

  return (
    <div className='user'>
      <div className='profile'>
        <img src={picture.large} alt="" />
      </div>
      <div>
        <h2 className='text-primary'>{name.title + ' ' + name.first + ' ' + name.last}</h2>
        <h4>Email: {email}</h4>
        <h4>Salary: {salary}</h4>
        <h4>Phone: {mobile}</h4>
        <button onClick={handleShowPhoneNo} className='add-btn'>
          <FontAwesomeIcon icon={faPhoneSquare} /> Show Phone No.
        </button>
        <button onClick={() => props.handleAddUser(props.user)} className='add-btn'>
          <FontAwesomeIcon icon={faPlusSquare} /> Add User
        </button>
      </div>
    </div>
  );
};

export default User;