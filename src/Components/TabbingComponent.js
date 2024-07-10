import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Imgsr from "../Assets/Images/News_placeholder-image.jpg";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import CardlistChild from "./CardlistChild";
import CardlistParent from "./CardlistParent";
import { CategoryList } from "../Services/Commonservice";

const TabbingComponent = () => {
  const [activeTab, setActiveTab] = useState(CategoryList[0]);
  return (
    <>
      <Tabs
      navbarScroll      
        defaultActiveKey={CategoryList[0]}
        id="uncontrolled-tab-example"
        className="mb-3"
        fill
        onSelect={(e) => {
          setActiveTab(e);
        }}
      >
        {CategoryList?.map((item, index) => (
          <Tab eventKey={item} title={item} key={index}>
            {activeTab === item && <CardlistParent category={item} />}
          </Tab>
        ))}
      </Tabs>
    </>
  );
};

export default TabbingComponent;
