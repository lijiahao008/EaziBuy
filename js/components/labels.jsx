import React from 'react';


const Labels = ({ labels, loading }) => {
  if (loading) {
    return <div className="loader">Loading...</div>
  }

  return(
    <div className="labels">
      {JSON.stringify(labels)}
    </div>
  );
};


export default Labels;
