import moment from "moment";
import React from "react";
import { Commonservice } from "../Services/Commonservice";

const CelciusChild = (props) => {
  return (
    <>
      {props?.type === "daily" ? (
        <div className="celcius-card text-center">
          <p>{moment(props?.data?.date).format("DD MMM")}</p>
          <span className="small-cloud-icon">
            <img src={Commonservice.getCoudIcon(props?.data?.wether?.main)} />
          </span>
          <p className="m-0 mt-3">
            {props?.data?.celcius}
            <sup style={{ fontSize: "6px", top: "-7px", bottom: "-2px" }}>
              0
            </sup>
          </p>
        </div>
      ) : (
        <div className="celcius-card text-center">
          <p>{moment(props?.data?.dt_txt).format("hh:mm A")}</p>
          <span className="small-cloud-icon">
            <img
              src={Commonservice.getCoudIcon(props?.data?.weather[0]?.main)}
            />
          </span>
          <p className="m-0 mt-3">
            {Math.floor(props?.data?.main.temp - 273.15)}
            <sup style={{ fontSize: "6px", top: "-7px", bottom: "-2px" }}>
              0
            </sup>
          </p>
        </div>
      )}
    </>
  );
};

export default CelciusChild;
