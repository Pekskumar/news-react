import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardlistChild from "./CardlistChild";
import Spinner from "react-bootstrap/Spinner";

const CardlistParent = (props) => {
  let apikey = "81c1e2e35a9312bc4a346315dd7b89fd";
  const [NewsList, setNewsList] = useState([]);
  const [Loading, setLoading] = useState(false);
  async function fetchNews(pageSize = 100) {
    setLoading(true);
    const url = `https://gnews.io/api/v4/top-headlines?country=in&category=${props?.category}&max=${pageSize}&apikey=${apikey}`;
    const response = await fetch(url);
    const parsedData = await response.json();
    setLoading(false);
    setNewsList(parsedData?.articles);
  }
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <Row>
        {Loading ? (
          <Col md={12} className="my-5 text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        ) : (
          NewsList?.length > 0 &&
          NewsList?.map((item, index) => (
            <Col md={6} className="mb-3" key={index}>
              <CardlistChild data={item} />
            </Col>
          ))
        )}
      </Row>
    </>
  );
};

export default CardlistParent;
