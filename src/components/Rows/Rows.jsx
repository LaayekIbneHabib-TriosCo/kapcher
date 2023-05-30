import { TableContainer, Head, Wrapper, Row, Col, Delete, Edit, Body, AddUser } from "./Style";

import React from "react";

export default function Rows({ data }) {
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
        <AddUser onClick={() => alert("Why did you click me?")}>
          <p>Add User</p>
          <img src="assets/plus.svg" alt="" />
        </AddUser>
      </TableContainer>
    </Wrapper>
  );
}
