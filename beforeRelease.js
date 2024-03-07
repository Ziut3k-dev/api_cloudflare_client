const Cloudflare = require('./index');
require('dotenv').config({path: './.env'});
const cloudflareInstance = new Cloudflare({
  email: process.env.CLOUDFLARE_EMAIL,
  key: process.env.CLOUDFLARE_API_KEY,
});
(async () => {
  try {
    const zones = await cloudflareInstance.zones.browse();
    console.log(zones);
  } catch (e) {
    console.log(e);
  }
})();
