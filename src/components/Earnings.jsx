import React from 'react';
import SelectSearch from 'react-select-search';
import { useState } from 'react';
import { airports, planes } from '../vars';

function Earnings() {
  const [plane, setPlane] = useState();
  const [path, setPath] = useState();

  let airportOptions = airports.map((airport) => {
    return { name: airport[0], value: airport[0] };
  });

  let planeOptions = planes.map((plane) => {
    return { name: plane[0], value: plane[0] };
  });

  return (
    <div>
      <SelectSearch
        options={planeOptions}
        placeholder='Pick a Plane'
        search={true}
        value={plane}
        onChange={setPlane}
      />
    </div>
  );
}

export default Earnings;
