// src/components/DataDisplayComponent.jsx

import React from 'react';

const DataDisplayComponent = ({ filteredData }) => {
  return (
    <div>
      <h2>Filtered Data</h2>
      <pre>{JSON.stringify(filteredData, null, 2)}</pre>
    </div>
  );
};

export default DataDisplayComponent;
