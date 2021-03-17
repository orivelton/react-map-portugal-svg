import React, { useEffect, useState } from 'react';


import { circleMap, pathMap } from '../helpers/map';
import '../assets/scss/Map.scss';

export default function Map ({ searchFilterBy, search }) {
  const [active, setActive] = useState('');

  useEffect(() => {
    setActive(search?.location);
  }, [search?.location]);

  return(
    <svg className="zs_map_of_portugal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 424 480" width="121%">
      {
        pathMap.map(({ title, path }) => (
          <g key={title} onClick={() => (setActive(title))} className={active === title ? 'active' : ''}>
            {
              title === 'Azores' && (
                <>
                  <rect x="7.4996252" fill="transparent" y="25.333334" className="st1" width="125.5003738" height="93.6666641"></rect>
                  <rect x="7.4996252" fill="transparent" y="124.125" className="st1" width="79.6253738" height="78.625"></rect>
                </>
              )
            }
            <g data-num="" title={title}>
              { path.map(({ d }) => <path className="st0" key={d} d={d}></path>) }
            </g>
          </g>
        ))
      }
      {
        circleMap.map(({ title, cx, cy, r }) => (
          <div key={title}>
            <circle className="st0" cx={cx} cy={cy} r={r} onClick={() => searchFilterBy({location: title, query: true})}></circle>
          </div>
        ))
      }
    </svg>
  )
}