import React, { useState } from 'react';

const Visible = ({ data }) => {
  const [show, setShow] = useState(false);

  const blockShow = () => {
    setShow(!show)
  };
  
  return (
    <div>
      <button onClick={blockShow}>show/hide</button>
      <div style={{display: show ? 'block': 'none'}}>{data}</div>
  </div>
  );
};

export default Visible;