import { AddButton } from "../Buttons/Buttons";
import { TableContainer, Head, Wrapper, Row, Col, Delete, Edit, Body } from "./Style";

import React from "react";

export default function Rows({ click, title, data }) {
  return (
    <Wrapper>
      <TableContainer>
        <Head>
          <Row style={{ background: 0 }}>
            {title?.map((item, index) => (
              <Col key={index}>{item}</Col>
            ))}
          </Row>
        </Head>

        {data.map((item, index) => (
          <Body>
            <Row key={index}>
              <Col>{item.id}</Col>
              <Col>{item.name || item.cameraName || item.workstationName}</Col>
              <Col>{item.email || item.RTSP || item.cameraName}</Col>
              <Col>{item.mobile || item.startTime || item.workstationType}</Col>
              <Col>{item.role || item.stopTime}</Col>
            </Row>
            <Delete>
              <img src="assets/delete.svg" />
            </Delete>
            <Edit>
              <img src="assets/edit.svg" />
            </Edit>
          </Body>
        ))}
      </TableContainer>
      <AddButton click={click} value="Add user" />
    </Wrapper>
  );
}
