import { Typography } from "@mui/material";
import { Wrapper, Container, Input, Select, Option, Controls } from "./Style";

import { PrimaryButton, SecondaryButton } from "../Buttons/Buttons";

export default function Form({ purpose, input, dropdown, date, click }) {
  return (
    <>
      <Wrapper>
        <Typography variant="h4" sx={{ fontWeight: 500 }}>
          {purpose}
        </Typography>
        <Container>
          {input.map((item, index) => (
            <Input key={index} placeholder={`Enter ${item}`} />
          ))}

          {dropdown && (
            <Select>
              <Option disabled selected>
                {dropdown?.[0]}
              </Option>
              {dropdown.slice(1).map((item, index) => (
                <Option key={index}>{item}</Option>
              ))}
            </Select>
          )}

          {date && (
            <>
              {date.map((item, index) => (
                <Input
                  placeholder={item}
                  type="text"
                  onFocus={(e) => (e.target.type = "date")}
                  key={index}
                />
              ))}
            </>
          )}

          <Controls>
            <PrimaryButton value="Register" />
            <SecondaryButton click={click} value="Back" />
          </Controls>
        </Container>
      </Wrapper>
    </>
  );
}
