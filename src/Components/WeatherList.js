import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentweather } from "../JS/actions/weatherActions";
import WeatherCard from "./WeatherCard";
import Spinner from 'react-bootstrap/Spinner'

const WeatherList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentweather("london"));
  }, []);
  const list = useSelector((state) => state.weatherReducers.list);
  const loading=useSelector((state)=>state.weatherReducers.loading)
  if (loading) {
    return <Spinner animation="border"variant="primary" />
  }
  
  
  
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
     
        <WeatherCard el={list}  />
     
    </div>
  );
};

export default WeatherList;
