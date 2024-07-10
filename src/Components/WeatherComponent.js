import moment from "moment";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, { useEffect, useState } from "react";
import { Commonservice } from "../Services/Commonservice";
import CelciusParent from "./CelciusParent";

const WeatherComponent = () => {
  const [WeatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState({});
  const [latitude, setlatitude] = useState("");
  const [longitude, setlongitude] = useState("");
  async function fnLocationDetails(e) {
    const data = await fetch(`https://ipapi.co/json`)
      .then((res) => res.json())
      .then((data) => data);
    setlatitude(data.latitude);
    setlongitude(data.longitude);
    setCity(data);
  }
  async function fnweatherData(e) {
    if (latitude && longitude) {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${
          latitude !== "" &&
          latitude !== undefined &&
          latitude !== null &&
          latitude
        }&lon=${
          longitude !== "" &&
          longitude !== undefined &&
          longitude !== null &&
          longitude
        }&appid=32a5bb7b9aa1126387e06acad817149e`
      )
        .then((res) => res.json())
        .then((data) => data);
      let GropObj = {};
      data?.list?.forEach((element) => {
        const C_date = Commonservice.getDateFormat(element?.dt_txt);
        console.log("C_date ::", C_date);
        if (!GropObj[C_date]) {
          GropObj[C_date] = {
            date: C_date,
            celcius: Math.floor(element.main.temp - 273.15),
            wether: element?.weather[0],
            data: [element],
          };
        } else {
          GropObj[C_date] = {
            date: C_date,
            celcius: Math.floor(element.main.temp - 273.15),
            wether: element?.weather[0],
            data: [...GropObj[C_date].data, element],
          };
        }
      });
      setWeatherData(GropObj);
    }
  }

  useEffect(() => {
    fnLocationDetails();
    fnweatherData(new Date());
  }, [latitude, longitude]);

  return (
    <div className="wether-card position-relative">
      <h6>{city?.city}</h6>
      <div className="d-flex my-4     align-items-center">
        <span className="big-cloud-icon">
          <img
            src={Commonservice.getCoudIcon(
              WeatherData[Commonservice.getDateFormat(new Date())]?.wether?.main
            )}
          />
        </span>
        <div class="temperature">
          <h2 class="temperature-value">
            {WeatherData[Commonservice.getDateFormat(new Date())]?.celcius}
          </h2>
          <sup class="temperature-unit">°C</sup>
        </div>
      </div>
      <Tabs defaultActiveKey="hourly" id="uncontrolled-tab-example">
        <Tab eventKey="hourly" title="Hourly">
          <CelciusParent type="hourly" data={WeatherData} />
        </Tab>
        <Tab eventKey="daily" title="Daily">
          <CelciusParent type="daily" data={WeatherData} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default WeatherComponent;
