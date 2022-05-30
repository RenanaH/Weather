let weatherBase = process.env.REACT_APP_WEATHER_BASE_URL;
let apiKey = process.env.REACT_APP_API_KEY;

export function getWeatherByCityName(city: string) {
  const url = `${weatherBase}?q=${city}&lang=he&&appid=${apiKey}&units=metric`;
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
}
