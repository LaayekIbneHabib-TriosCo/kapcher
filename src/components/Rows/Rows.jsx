import { AddButton } from "../Buttons/Buttons";
import { TableContainer, Head, Wrapper, Row, Col, Delete, Edit, Body } from "./Style";

import React from "react";

export default function Rows({ click, data }) {
  return (
    <Wrapper>
      <TableContainer>
        <Head>
          <Row style={{ background: 0 }}>
            <Col>Serial number</Col>
            <Col>User name</Col>
            <Col>Email Id</Col>
            <Col>Mobile Number</Col>
            <Col>Role</Col>
          </Row>
        </Head>

        {data.map((item) => (
          <Body>
            <Row key={item.id}>
              <Col>{item.id}</Col>
              <Col>{item.name}</Col>
              <Col>{item.email}</Col>
              <Col>{item.mobile}</Col>
              <Col>{item.role}</Col>
            </Row>
            <Delete>
              <img src="assets/delete.svg" />
            </Delete>
            <Edit>
              <img src="assets/edit.svg" />
            </Edit>
          </Body>
        ))}
        <AddButton click={click} value="Add user" />
      </TableContainer>
    </Wrapper>
  );
}
