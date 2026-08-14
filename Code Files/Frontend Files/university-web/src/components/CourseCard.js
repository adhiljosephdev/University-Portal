import React from 'react';

function CourseCard(props) {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: '10px',
        margin: '10px'
      }}
    >
      <h3>{props.title}</h3>
      <p>Code: {props.code}</p>
      <p>Credits: {props.credits}</p>

      {props.credits > 3 ? (
        <span style={{ color: 'red' }}>
          Heavy Workload
        </span>
      ) : null}
    </div>
  );
}

export default CourseCard;