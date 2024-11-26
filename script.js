// Fetch real-time Forex data (for example, from Alpha Vantage)
const forexDataContainer = document.getElementById('forexData');

// Replace YOUR_API_KEY with your actual API key from Alpha Vantage
const apiKey = '15WUCV0VFAKW7WIZ';
const url = `https://www.alphavantage.co/query?function=FX_INTRADAY&from_symbol=USD&to_symbol=EUR&interval=5min&apikey=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data && data['Time Series FX (5min)']) {
      const latestData = data['Time Series FX (5min)'];
      const mostRecentTime = Object.keys(latestData)[0];
      const price = latestData[mostRecentTime]['4. close'];
      
      forexDataContainer.innerHTML = `
        <h3>Latest Forex Data (USD to EUR)</h3>
        <p>Price: ${price} EUR</p>
        <p>Last Updated: ${mostRecentTime}</p>
      `;
    } else {
      forexDataContainer.innerHTML = '<p>Error fetching Forex data. Please try again later.</p>';
    }
  })
  .catch(error => {
    forexDataContainer.innerHTML = '<p>Error fetching Forex data. Please try again later.</p>';
    console.error('Error fetching Forex data:', error);
  });