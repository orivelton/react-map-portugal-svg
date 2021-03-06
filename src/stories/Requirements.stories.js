import React, { useState } from 'react';
import { MapPortugalSvg } from '../components/MapPortugalSvg';

export default {
  title: 'MapPortugalSvg',
  component: MapPortugalSvg,
  argTypes: {
    mapColor: { control: 'color'},
    hoverCircle: { control: 'color'},
    selectedColor: { control: 'color'},
    width: { control: 'text'},
    multipleSelect: { control: 'boolean'},
    hoverBorderSize: { control: 'number' }
  }
}

const Template =  args => {
  const [selected, setSelected] = useState([]);

  return(
    <>
      { JSON.stringify(selected) }
      <MapPortugalSvg {...{...args, setSelected}} />
    </>
  )
};

export const Default = Template.bind({});
