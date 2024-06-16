import React, { useState } from 'react';
import Button from '@mui/material/Button';

function ParentCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Parent Counter: {count}</p>
      <Button onClick={handleClick} variant="contained"> +1 </Button>
      <ChildCount count={count} />
    </div>
  );
}

function ChildCount({ count }) {
  return (
    <div>
      <p>Child Counter: {count}</p>
    </div>
  );
}

export default ParentCounter;