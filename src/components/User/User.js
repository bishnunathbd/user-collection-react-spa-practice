import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import './User.css';

const User = (props) => {
  const { name, email, phone, picture, salary } = props.user;

  return (
    <div className='user'>
      <div className='profile'>
        <img src={picture.large} alt="" />
      </div>
      <div>
        <h2>{name.title + ' ' + name.first + ' ' + name.last}</h2>
        <h4>Phone: {phone}</h4>
        <h4>Email: {email}</h4>
        <h4>Salary: {salary}</h4>
        <button onClick={() => props.handleAddUser(props.user)} className='add-btn'>
          <FontAwesomeIcon icon={faPlusSquare} /> Add User
        </button>
      </div>
    </div>
  );
};

export default User;