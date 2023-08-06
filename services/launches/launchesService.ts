import { LAUNCHES_ENDPOINTS } from '../../constants/apiConstants';

export async function getLaunches() {
  try {
    const data = await fetch(LAUNCHES_ENDPOINTS, {
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
    return await data.json();
  } catch (error) {
    return null;
  }
}