import { PrimaryBtn, SecondaryBtn, AddBtn } from "./Style";

export function PrimaryButton({ click, value }) {
  return <PrimaryBtn onClick={click}>{value}</PrimaryBtn>;
}

export function SecondaryButton({ click, value }) {
  return <SecondaryBtn onClick={click}>{value}</SecondaryBtn>;
}

export function AddButton({ click, value }) {
  return (
    <AddBtn onClick={click}>
      <p>{value}</p>
      <img src="assets/plus.svg" alt="" />
    </AddBtn>
  );
}
