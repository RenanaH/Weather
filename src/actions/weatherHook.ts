import { useDispatch } from "react-redux";
import { cities } from "../config/cities";
import { setCitiyWeather } from "../store/weatherSlice";
import { getWeatherByCityName } from "./actions";

const WeatherHook = () => {
  const dispatch = useDispatch();
  const getWeather = async () => {
    cities.map(async (city) => {
      const weather = await getWeatherByCityName(city);
      dispatch(setCitiyWeather({ city, weather }));
      return { city, weather };
    });
  };

  return { getWeather };
};

export default WeatherHook;
