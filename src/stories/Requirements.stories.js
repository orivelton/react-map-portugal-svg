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
    multipleSelect: { control: 'boolean'}
  }
}

const Template =  args => <MapPortugalSvg {...args} />

export const Default = Template.bind({})