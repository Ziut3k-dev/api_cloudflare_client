const Cloudflare = require('./index');
require('dotenv').config({path: './.env'});
const cloudflareInstance = new Cloudflare({
  email: process.env.CLOUDFLARE_EMAIL,
  key: process.env.CLOUDFLARE_API_KEY,
});
(async () => {
  try {
    const zones = await cloudflareInstance.zones.browse();
    let zone = await cloudflareInstance.zones.browse(zones.result[0].id);
    let zone2 = await cloudflareInstance.zones.read(zones.result[0].id);
    if (zone.result.id === zone2.result.id) {
      console.log(true);
    }
    let dnsRecord = await cloudflareInstance.dnsRecords.browse(
      zones.result[0].id
    );
    console.log(dnsRecord);
    // console.log(zone);
    // console.log(zones);
  } catch (e) {
    console.log(e);
  }
})();
