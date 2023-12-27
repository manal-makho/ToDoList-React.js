import React, { useState } from 'react';

const Todo = ({ task }) => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      <label style={{ marginLeft: '8px', textDecoration: isChecked ? 'line-through' : 'none' }}>
        {task}
      </label>
    </div>
  );
};

export default Todo;
