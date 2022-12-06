import React, { useEffect } from "react";
import { BsDropletHalf, BsWind } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { forecastweather } from "../JS/actions/weatherActions";
import Spinner from 'react-bootstrap/Spinner'

const Forecast = () => {
  const dispatch = useDispatch();
  const { id_fcast } = useParams();

  useEffect(() => {
    dispatch(forecastweather(id_fcast));
  }, [id_fcast]);
  const el = useSelector((state) => state.weatherReducers.forecast);
  const loading=useSelector((state)=>state.weatherReducers.loading)
  if (loading) {
    return <Spinner animation="border"variant="primary" />
  }
  return (
    <div className="forecastCard">
      {el.map((day) => (
        <div style={{padding:'10px'}}>
          <h6>{day.date}</h6>
          <img src={day.day.condition.icon} />
          <h5 style={{ color: "red" }}>{day.day.maxtemp_c}°C</h5>
          <h5 style={{ color: "blue" }}>{day.day.mintemp_c}°C</h5>
          <p>
            <BsWind />
            {day.day.maxwind_kph}
          </p>
          <p>
            <BsDropletHalf />
            {day.day.avghumidity}%
          </p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
