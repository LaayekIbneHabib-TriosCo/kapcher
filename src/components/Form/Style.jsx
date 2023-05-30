import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
`;

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 50rem;
  margin-top: 3rem;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  height: 5rem;
  background: rgba(84, 192, 169, 0.5);
  border: 0;
  border-radius: 1rem;
  font-size: 1.5rem;
  padding: 0 3rem 0 3rem;
`;

export const Select = styled.select`
  height: 5rem;
  background: rgba(84, 192, 169, 0.5);
  border: 0;
  border-radius: 1rem;
  font-size: 1.5rem;
  padding: 0 3rem 0 3rem;
  appearance: none;
  cursor: pointer;
`;

export const Option = styled.option`
  font-size: 1.5rem;
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
`;
