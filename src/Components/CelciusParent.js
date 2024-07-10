import React from "react";
import CelciusChild from "./CelciusChild";
import { Col, Row, Table } from "react-bootstrap";
import { Commonservice } from "../Services/Commonservice";


const CelciusParent = (props) => {
  return (
    <>
      <Table responsive>
        <tbody>
          <tr>
            <td className="d-flex">
              {Object.keys(props.data)?.length > 0 &&
                Object.keys(props.data)?.map((item, index) => (
                  <React.Fragment key={index}>
                    {props.type !== "hourly" ? (
                      <>
                        <CelciusChild
                          type={props.type}
                          data={props.data[item]}
                        />
                      </>
                    ) : (
                      props.data[item].data?.map((itemc, indexc) =>
                        Commonservice.getDateFormat(itemc?.dt_txt) ===
                        Commonservice.getDateFormat(new Date()) ? (
                          <Col md={3} key={indexc}>
                            <CelciusChild type={props.type} data={itemc} />
                          </Col>
                        ) : null
                      )
                    )}
                  </React.Fragment>
                ))}
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default CelciusParent;
