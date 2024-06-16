import React from 'react';
import PropTypes from 'prop-types';

const Student = ({ name, age, isStudent }) => {
  return (
    <div className="proptype">
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Is Student: {isStudent ? 'Student' : 'Not student'}</p>
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool.isRequired,
}

export default Student;