import React, { useState, useEffect, useRef } from 'react';

const RefExample = () => {
  const inputRef = useRef(null);

  const handleClickRef = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClickRef}>Focus</button>
    </div>
  );
};

export default RefExample;