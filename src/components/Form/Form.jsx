import { Typography } from "@mui/material";
import { Wrapper, Container, Input, Select, Option, Controls } from "./Style";

import { PrimaryButton, SecondaryButton } from "../Buttons/Buttons";

export default function Form({ click }) {
  return (
    <>
      <Wrapper>
        <Typography variant="h4" sx={{ fontWeight: 500 }}>
          Register User
        </Typography>
        <Container>
          <Input placeholder="Enter name" />
          <Input placeholder="Enter mobile number" />
          <Input placeholder="Enter email id" />
          <Input placeholder="Create password" />
          <Select>
            <Option disabled selected>
              Select your role
            </Option>
            <Option>Admin</Option>
            <Option>Security</Option>
            <Option>Packer</Option>
          </Select>
          <Controls>
            <PrimaryButton value="Register" />
            <SecondaryButton click={click} value="Back" />
          </Controls>
        </Container>
      </Wrapper>
    </>
  );
}
