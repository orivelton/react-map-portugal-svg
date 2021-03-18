import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MapPortugalSvg } from '../components/MapPortugalSvg';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
  const [fill, setFill] = useState('#FFFFFF');

  return (
    <>
      <label htmlFor="color">Color: </label>
      <input id="color" type="color" value={fill} onChange={e => setFill(e.target.value)}/>
      <hr />
      <MapPortugalSvg  {...{ fill, hoverCircle: 'blue' }}/>
    </>
  );
});
