import { Container } from "./Style";

export default function TitleBar() {
  return (
    <>
      <Container>
        <img style={{ width: "6rem" }} src="assets/brand-logo.svg" alt="" />
        <img style={{ width: "14rem" }} src="assets/brand-name.svg" alt="" />
      </Container>
    </>
  );
}
