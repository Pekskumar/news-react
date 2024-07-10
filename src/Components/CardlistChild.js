import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import Imgsr from "../Assets/Images/News_placeholder-image.jpg";

const CardlistChild = (props) => {
  return (
    <>
      <Link className="CardlistChild" to={props?.data?.url} target="_blank">
        <img
          src={
            props?.data?.urlToImage !== "" && props?.data?.urlToImage !== null
              ? props?.data?.urlToImage
              : Imgsr
          }
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = Imgsr;
          }}
        />
        <div className="mt-3 my-2 d-flex ">
          <p className="m-0">{props?.data?.source?.name}</p>
          <p className="publishedAt position-relative m-0 ms-3 ">
            {moment(props?.data?.publishedAt).fromNow()}
          </p>
        </div>
        <h5 className="m-0">{props?.data?.title}</h5>
        {props?.data?.author && (
          <p className="author m-0">Author: {props?.data?.author}</p>
        )}
      </Link>
    </>
  );
};

export default CardlistChild;
