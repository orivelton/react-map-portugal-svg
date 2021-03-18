import React, { useState } from 'react';
import { circleMap, pathMap } from '../helpers/map';
import '../assets/scss/Map.scss';

export default function MapPortugalSvg ({ fill = '#FFF'}) {
  const [active, setActive] = useState('');

  return(
    <>
      <svg className="portugal-map" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 424 480">
        {
          pathMap.map(({ title, path }) => (
            <g key={title} onClick={() => (setActive(title))} className={active === title ? 'active' : ''}>
              <title>{title}</title>
              {
                title === 'Azores' && (
                  <>
                    <rect x="7.4996252" fill="transparent" y="25.333334" className="st1" width="125.5003738" height="93.6666641" />
                    <rect x="7.4996252" fill="transparent" y="124.125" className="st1" width="79.6253738" height="78.625" />
                  </>
                )
              }
              <g>
                { path.map(({ d }) => <path className="st0" fill={fill} key={d} d={d} />) }
              </g>
            </g>
          ))
        }
        {
          circleMap.map(({ title, cx, cy, r }) => (
            <circle key={title} className="st0" cx={cx} cy={cy} r={r}>
              <title>{title}</title>
            </circle>
          ))
        }
      </svg>
  </>
  )
}
