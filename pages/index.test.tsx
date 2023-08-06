import { act, render, screen } from '@testing-library/react';
import React from 'react';
import * as launchesService from '../services/launches/launchesService';
import mockResponse from '../services/launches/mockResponse.json';
import Home from './index';

describe('Home', () => {
  it('should render a LaunchGrid component when launches are returned', async () => {
    jest.spyOn(launchesService, "getLaunches").mockResolvedValue(mockResponse);

    await act(async () => {
      render(<Home/>);
    });

    expect(screen.getByTestId('launch-grid')).toBeInTheDocument();
    expect(screen.queryByText('No launches found')).not.toBeInTheDocument();
  });

  it('should render text when no launches are available', async () => {
    jest.spyOn(launchesService, "getLaunches").mockResolvedValue(null);

    await act(async () => {
      render(<Home/>);
    });

    expect(screen.queryByTestId('launch-grid')).not.toBeInTheDocument();
    expect(screen.getByText('No launches found')).toBeInTheDocument();
  });
});