import axios from 'axios';

export default class ClashOfClans {
  constructor(apiKey, {
    baseUrl = 'https://api.clashofclans.com/v1',
    requestTimeout = 10000, // 10 seconds
  } = {}) {
    this.apiKey = apiKey;

    this.httpClient = axios.create({
      baseURL: baseUrl,
      timeout: requestTimeout,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: 'application/json',
      },
    });
  }

  clanInfo(tag) {
    return this.httpClient.get(`/clans/${encodeURIComponent(tag)}`)
      .then(response => response.data);
  }

  searchClans({
    name,
    warFrequency,
    locationId,
    minMembers,
    maxMembers,
    minClanPoints,
    minClanLevel,
  }) {
    const search = (pagingToken = undefined, acc = []) =>
      this.httpClient.get('/clans', {
        params: {
          name,
          warFrequency,
          locationId,
          minMembers,
          maxMembers,
          minClanPoints,
          minClanLevel,
          after: pagingToken,
        },
      }).then(response => response.data).then(data => {
        const clans = acc.concat(data.items);

        return data.paging.after ? search(data.paging.after, clans) : clans;
      });

    return search();
  }
}
