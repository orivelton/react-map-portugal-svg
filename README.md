# react-map-portugal-svg 🇵🇹       

The `react-map-portugal-svg` is a SVG map of Portugal that we can interact with some events.

## [Demo](https://orivelton.github.io/react-map-portugal-svg/?path=/docs/mapportugalsvg--default)




## Install

```bash
npm install --save react-map-portugal-svg
# or
yarn add react-map-portugal-svg
```

## Usage

```javascript
import React, { useState } from 'react';
import { MapPortugalSvg } from 'react-map-portugal-svg'

function App() {
  const [selected, setSelected] = useState([]);

  return (
    <>
      {JSON.stringify(selected)}  {/* 👈 The result */}
      <MapPortugalSvg setSelected={setSelected}/> 
    </>
  );
}

export default App;

```


## Props

| Name                 | Type              | Description | Default |
| -------------------- | ----------------- | ----------- | ------- |
| mapColor                 | -   | - | #FFFFFF |
| hoverCircle                 | -   | - | #EF6060 |
| selectedColor                 | -   | - | #000000 |
| width                 | -  | - | 100% |
| multipleSelect                 | -  | - | false |
| hoverBorderSize                 | -  | - | 2 |
| setSelected                 | function (useState)  | - |  |


## License

MIT © [Orivelton César](https://github.com/orivelton)

[NPM](https://www.npmjs.com/package/react-map-portugal-svg)
