import { useEffect } from "react";
import { useSelector } from "react-redux";
import WeatherHook from "../../actions/weatherHook";
import { getCitiesWeather } from "../../store/weatherSlice";
import { CityWeather } from "../../types";
import { CardWeather } from "../card/Card";
import { CardsWrapper } from "./Cards.style";

export function Cards() {
  const { getWeather } = WeatherHook();
  const weatherCities = useSelector(getCitiesWeather);

  useEffect(() => {
    if (!weatherCities.length) getWeather();
  }, []);
  const renderCards = () => {
    return weatherCities.map((wh: CityWeather, index: number) => {
      const { weather } = wh;
      return <CardWeather key={index} {...weather} />;
    });
  };
  return <CardsWrapper>{renderCards()}</CardsWrapper>;
}
