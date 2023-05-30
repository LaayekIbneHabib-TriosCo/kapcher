import styled from "styled-components";
// import theme from "../../theme/theme";

export const PrimaryBtn = styled.button`
  padding: 1.25rem 5rem 1.25rem 5rem;
  font-size: 1.5rem;
  border: 0;
  border-radius: 1.25rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #ebfffb;
  cursor: pointer;
  &:active {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  }
`;

export const SecondaryBtn = styled.button`
  padding: 1.25rem 5rem 1.25rem 5rem;
  font-size: 1.5rem;
  border: 0;
  border-radius: 1.25rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #94d2c7;
  cursor: pointer;
  &:active {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  }
`;

export const AddBtn = styled.button`
  padding: 0.75rem 3rem 0.75rem 3rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  border: 0;
  border-radius: 1.25rem;
  gap: 2rem;
  cursor: pointer;
  &:active {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.35rem;
    font-weight: 500;
  }
`;
