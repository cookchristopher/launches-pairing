import { render, screen } from '@testing-library/react';
import React from 'react';
import LaunchGrid from './LaunchGrid';
import mockResponse from '../../services/launches/mockResponse.json';

describe('LaunchGrid', () => {
  let props = {
    launches: mockResponse
  };

  it('should render a LaunchCard component for each items in props.launches.docs', () => {
    render(<LaunchGrid {...props} />);

    expect(screen.getAllByTestId('launch-card')).toHaveLength(2);
  });
});