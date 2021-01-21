import React from 'react';

const AddedUser = (props) => {
  const addedUser = props.addedUser;
  const totalSalary = addedUser.reduce((sum, user) => sum + user.salary, 0);

  return (
    <div>
      <h2>Summary</h2>
      <h4>Total Added Users: {addedUser.length}</h4>
      <h4>Total Salary: {totalSalary}</h4>
    </div>
  );
};

export default AddedUser;