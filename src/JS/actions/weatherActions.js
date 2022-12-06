import axios from "axios";
import {
  C_WEATHERFAILED,
  C_WEATHERSUCCESS,
  FORECASTFAILED,
  FORECASTSUCCESS,
  LOADING,
} from "../types/weatherTypes";

export const currentweather = (searchedvalue) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const res = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=a3c8d65fb9324ce9963164342222411&q=${searchedvalue.trim()}`
    );
    dispatch({
      type: C_WEATHERSUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: C_WEATHERFAILED,
      payload: error,
    });
  }
};
export const forecastweather = (id) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const res = await axios.get(
     ` http://api.weatherapi.com/v1/forecast.json?key=a3c8d65fb9324ce9963164342222411&q=${id}&days=5`    );
    dispatch({
      type: FORECASTSUCCESS,
      payload: res.data.forecast.forecastday
      
    });
    console.log(res)
  } catch (error) {
    dispatch({
      type:FORECASTFAILED,
      payload: error,
    });
  }
};
