import ClashOfClans from './lib/clashofclans';

// This'll only work from my IP, so no real need to keep it secret.
const API_KEY =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2Nh' +
  'NSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijk5OTkxMmMxLTI3ZjY' +
  'tNGJjOC1iZGQzLWUzNDIwZmRiMmNhMSIsImlhdCI6MTQ1NDc5NDYxMywic3ViIjoiZGV2ZWxvcGVyLzBhNjFjYjRkLTA' +
  '5YzUtYTYwYy00YzA3LThkMDkyYzI2MDJhZSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZ' +
  'lbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE1MS4yMjUuMzMuMjEzIl0sInR5cGU' +
  'iOiJjbGllbnQifV19.8ZWGNNyzF7VyOr6OSDCjTQrR_8mXtOJQpFlaZ3mRzOcXxMbpf58Hk36EmGT2mHWynHNzWxaPrs' +
  'iiyarOH13juw';

if (process.argv.length < 3) {
  console.error('A clan tag must be passed as an argument');
  process.exit(1);
}

const [tag] = process.argv.slice(2);

const clashofclans = new ClashOfClans(API_KEY);

// Get info about the clan to start with, as we need it to establish which rankings we need
clashofclans.clanInfo(tag)
  .then(clan => {
    const location = clan.location.id;
    const clanLevel = clan.clanLevel;

    return clashofclans.searchClans({
      locationId: location,
      minClanLevel: clanLevel,
    }).then(clans =>
      clans.filter(c => c.warWins >= clan.warWins)
        .sort((clan1, clan2) => clan1.warWins - clan2.warWins)
        .reverse()
    ).then(clans => {
      console.log(`Clans in ${clan.location.name}, minimum clan level ${clan.clanLevel}`);
      console.log('==========================================');
      console.log('');

      clans.forEach((c, index) => {
        console.log(`${index + 1}. ${c.name} [${c.clanLevel}] - ${c.warWins}`);
      });

      process.exit(0);
    });
  })
  .catch(e => console.error(e.message, e.stack));
