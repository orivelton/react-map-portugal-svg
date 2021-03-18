import { render, screen } from '@testing-library/react';
import MapPortugalSvg from '../components/MapPortugalSvg';

test('Map component test', () => {
  render(<MapPortugalSvg />)
  expect(screen).toMatchSnapshot
})