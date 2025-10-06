async function getWeather() {
  const city = document.getElementById('city').value;
  if (!city) {
    document.getElementById('result').innerHTML = "❗ Please enter a city name!";
    return;
  }
  const api = `https://wttr.in/${city}?format=%t`;
  try {
    const response = await fetch(api);
    const temp = await response.text();
    document.getElementById('result').innerHTML = `🌡️ Temperature in ${city}: ${temp}`;
  } catch (error) {
    document.getElementById('result').innerHTML = "⚠️ Error fetching weather!";
  }
}
