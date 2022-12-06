import { Route, Routes } from "react-router-dom";
import "./App.css";
import Forecast from "./Components/Forecast";
import NavSearch from "./Components/NavSearch";
import WeatherList from "./Components/WeatherList";
function App() {
  return (
    <div className="App">
      <NavSearch />
      <Routes>
        <Route path="/" element={<WeatherList />} />

        <Route
          path="/:id_fcast"
          element={
            <div>
              <WeatherList />
              <Forecast />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
