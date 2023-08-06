import { render, screen } from '@testing-library/react';
import React from 'react';
import LaunchCard from './LaunchCard';

describe('LaunchCard', () => {
  let props = {
    launch: {
      cores: [{
        core: {
          id: 'coreId1',
          serial: 'coreSerial1',
        },
      }],
      date_utc: '2006-03-24T22:30:00.000Z',
      failures: [],
      id: 'launchId1',
      links: {
        patch: {
          small: 'https://images2.imgbox.com/94/f2/NN6Ph45r_o.png'
        }
      },
      name: 'launchName1',
      payloads: [{
        id: 'payloadId1',
        type: 'payloadId2',
      }],
      success: true,
    }
  };

  it('should render expected elements', () => {
    render(<LaunchCard {...props} />);

    const image = document.querySelector('img');
    const formattedDate = new Date(props.launch.date_utc).toLocaleString();

    expect(image).toBeInTheDocument();
    expect(image.alt).toBe(props.launch.name);
    expect(image.src).toBe(props.launch.links.patch.small);

    expect(screen.getByText(props.launch.name, {exact: false})).toBeInTheDocument();
    expect(screen.getByText(formattedDate, {exact: false})).toBeInTheDocument();

    expect(screen.getByText(`Serial: ${props.launch.cores[0].core.serial}`)).toBeInTheDocument();
    expect(screen.getByText(`id: ${props.launch.cores[0].core.id}`)).toBeInTheDocument();

    expect(screen.getByText(props.launch.payloads[0].id, {exact: false})).toBeInTheDocument();
    expect(screen.getByText(props.launch.payloads[0].type, {exact: false})).toBeInTheDocument();

    expect(screen.getByText('Launch successful!')).toBeInTheDocument();
  });

  it('should render expected elements for failures', () => {
    props = {
      ...props,
      launch: {
        ...props.launch,
        failures: [{
          reason: 'failureReason1',
        }],
        success: false,
      },
    };

    render(<LaunchCard {...props} />);

    expect(screen.queryByText('Launch successful!')).not.toBeInTheDocument();
    expect(screen.getByText('Launch failure reasons:')).toBeInTheDocument();
    expect(screen.getByText(props.launch.failures[0].reason)).toBeInTheDocument();
  });
});