import React from "react";
import { useNavigate } from "react-router-dom";
import DemoIcon from "../Assets/Images/DemoIcon";

const SingleCardCount = (props) => {
  const navigate = useNavigate();

  function fnRedirectPage() {
    navigate("/cardlist", { state: { title: props?.title, data: props?.data } });
  }

  return (
    <div className="SingleCard" onClick={fnRedirectPage}>
      <DemoIcon />
      <h5 className="mt-5 text-uppercase">
        {props?.title} ({props?.count})
      </h5>
      {/* <p className="m-0">{props?.data?.[0]?.title}</p> */}
    </div>
  );
};

export default SingleCardCount;
