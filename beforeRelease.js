const Cloudflare = require('./index');
const cloudflareInstance = new Cloudflare({});
(async () => {
  try {
    const zones = await cloudflareInstance.zones.browse();
    console.log(zones);
  } catch (e) {
    console.log(e);
  }
})();
