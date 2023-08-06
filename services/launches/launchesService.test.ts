import fetchMock from 'jest-fetch-mock';
import { getLaunches } from "./launchesService";
import { LAUNCHES_ENDPOINTS } from '../../constants/apiConstants';
import mockResponse from './mockResponse.json';

describe('getLaunches', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should return expected data', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const launches = await getLaunches();

    expect(launches).toEqual(mockResponse);
    expect(global.fetch).toHaveBeenCalledWith(LAUNCHES_ENDPOINTS, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: {},
        options: {
          select: ['name', 'date_utc', 'cores', 'payloads', 'links.patch.small', 'success', 'failures.reason'],
          populate: [{
            path: 'cores.core',
            select: ['serial'],
          }, {
            path: 'payloads',
            select: ['id', 'type'],
          }],
        },
      }),
    });
  });

  it('should return null when API call fails', async () => {
    fetchMock.mockReject(new Error('API is down'));
    const launches = await getLaunches();

    expect(launches).toEqual(null);
  });
});