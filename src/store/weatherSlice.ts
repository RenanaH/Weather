import { createSlice } from "@reduxjs/toolkit";
interface WeatherState {
  citiesWeather: Array<object>;
}

export const initialState = {
  citiesWeather: [],
} as WeatherState;

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCitiyWeather: (state, { payload }) => {
      const weatherArray = [...state.citiesWeather];
      weatherArray.push(payload);
      state.citiesWeather = weatherArray;
    },
  },
});
export const getCitiesWeather = (state: any) => state.weather.citiesWeather;

export const { setCitiyWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
