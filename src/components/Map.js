import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';


import { circleMap, pathMap } from '../helpers/map';
import '../assets/scss/Map.scss';

export default function MapPortugalSvg ({ search }) {
  const [active, setActive] = useState('');

  useEffect(() => {
    setActive(search?.location);
  }, [search?.location]);

  return(
    <>
      <svg className="portugal-map" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 424 480">
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
            <circle key={title} title={title} data-tip={title} className="st0" cx={cx} cy={cy} r={r} onClick={() => console.log(cx, cy)}></circle>
          ))
        }
      </svg>
      <ReactTooltip />
  </>
  )
}