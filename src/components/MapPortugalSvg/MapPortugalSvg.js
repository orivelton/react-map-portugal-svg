import React, { useState, useEffect} from 'react';
import { circleMap, pathMap } from '../../const/map';
import '../../Map.css';

export const MapPortugalSvg = ({ 
  mapColor = '#FFFFFF', 
  width = '100%', 
  hoverCircle = '#EF6060', 
  selectedColor = '#EF6060', 
  multipleSelect = false,
  hoverBorderSize = 2,
  setSelected
}) => {
  const [active, setActive] = useState([]);

  const handleMultipleSelect = ({ currentTarget }) => {
    const text = currentTarget.children[0].textContent;
    const setData = multipleSelect ? [...active, text] : [text]
    active.includes(text) ? setActive(active.filter(item => item !== text)) : setActive(setData)
  }
  
  useEffect(() => { setSelected(active) }, [active]);
  
  return(
    <>
      <svg 
        className="portugal-map" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 424 480"
        style={{ 
          '--hoverCircle': hoverCircle,
          '--selectedColor': selectedColor,
          '--hoverBorderSize': hoverBorderSize,
          width
        }}
      >
        {
          pathMap.map(({ title, path }) => (
            <g key={title} onClick={handleMultipleSelect} className={active.includes(title) ? 'active' : ''}>
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
                { path.map(({ d }) => <path className="st0" fill={mapColor} key={d} d={d} />) }
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
