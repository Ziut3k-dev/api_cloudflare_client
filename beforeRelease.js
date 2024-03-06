const Cloudflare = require('./index');
const cloudflareInstance = new Cloudflare({
  email: 'cf-siecportali@hostersi.pl',
  key: '84778aadb620891cff368bd2be7d67b6ccb52',
});
(async () => {
  try {
    const zones = await cloudflareInstance.zones.browse();
    console.log(zones);
  } catch (e) {
    console.log(e);
  }
})();
