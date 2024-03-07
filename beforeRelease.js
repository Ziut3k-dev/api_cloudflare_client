const Cloudflare = require('./index');
require('dotenv').config({path: './.env'});

// Inicjalizacja instancji Cloudflare
const cloudflareInstance = new Cloudflare({
  email: process.env.CLOUDFLARE_EMAIL,
  key: process.env.CLOUDFLARE_API_KEY,
});

// Funkcja samowywołująca się, używająca funkcji async/await do obsługi Promise
(async () => {
  try {
    // Pobieranie listy wszystkich stref (zones)
    const zones = await cloudflareInstance.zones.browse();

    // Pobieranie informacji o konkretnej strefie (zone) na podstawie jej ID
    let zone = await cloudflareInstance.zones.browse(zones.result[0].id);

    // Pobieranie informacji o konkretnej strefie (zone) na podstawie jej ID
    let zone2 = await cloudflareInstance.zones.read(zones.result[0].id);

    // Porównanie dwóch obiektów stref i wypisanie wyniku porównania
    if (zone.result.id === zone2.result.id) {
      console.log('Zones match:', true);
    }

    // Pobieranie listy wszystkich rekordów DNS dla danej strefy
    let dnsRecord = await cloudflareInstance.dnsRecords.browse(
      zones.result[0].id
    );

    // Sprawdzenie, czy istnieje przynajmniej jeden rekord DNS
    if (dnsRecord.result.length > 0) {
      // Pobieranie informacji o konkretnym rekordzie DNS w danej strefie
      let dnsRecord2 = await cloudflareInstance.dnsRecords.read(
        zones.result[0].id,
        dnsRecord.result[0].id
      );

      // Porównanie dwóch obiektów rekordów DNS i wypisanie wyniku porównania
      if (dnsRecord.result[0].id === dnsRecord2.result.id) {
        console.log('DNS Records match:', true);
      }
    }

    // Pobieranie listy wszystkich reguł firewalla dla danej strefy
    let firewall = await cloudflareInstance.firewall.browse(zones.result[0].id);

    // Sprawdzenie, czy istnieje przynajmniej jedna reguła firewalla
    if (firewall.result.length > 0) {
      // Pobieranie informacji o konkretnej regule firewalla w danej strefie
      let firewall2 = await cloudflareInstance.firewall.read(
        zones.result[0].id,
        firewall.result[0].id
      );

      // Porównanie dwóch obiektów reguł firewalla i wypisanie wyniku porównania
      if (firewall.result[0].id === firewall2.result.id) {
        console.log('Firewall Rules match:', true);
      }
    }
    let pageRules = await cloudflareInstance.pageRules.browse(
      zones.result[0].id
    );
    // console.log(pageRules);
    if (pageRules.result.length > 0) {
      let pageRule = await cloudflareInstance.pageRules.read(
        zones.result[0].id,
        pageRules.result[0].id
      );
      if (pageRules.result[0].id === pageRule.result.id) {
        console.log('Page Rules match:', true);
      }
    }
    let ips = await cloudflareInstance.ips.browse();
    console.log(ips);
  } catch (e) {
    // Obsługa błędów w przypadku wystąpienia wyjątku
    console.log('Error:', e);
  }
})();
