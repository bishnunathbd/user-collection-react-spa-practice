import React from 'react';
import Button from 'react-bootstrap/Button';

const AddedUser = (props) => {
  const addedUser = props.addedUser;
  const totalSalary = addedUser.reduce((sum, user) => sum + user.salary, 0);

  return (
    <div>
      <h2 className='bg-success'>Summary</h2>
      <h4>Total Added Users: {addedUser.length}</h4>
      <h4>Total Salary: {totalSalary}</h4>
      <Button variant="primary">React Bootstrap Button</Button>
    </div>
  );
};

export default AddedUser;