import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import './styles.css';
import MapPortugalSvg from '../components/MapPortugalSvg';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
  return (
    <MapPortugalSvg />
  );
});
