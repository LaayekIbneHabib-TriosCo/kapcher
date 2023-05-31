import { Container } from "./Style";

export default function TitleBar() {
  return (
    <>
      <Container>
        <img style={{ width: "4rem", marginLeft: "1.7rem" }} src="assets/brand-icon.png" alt="" />
        <img style={{ width: "14rem" }} src="assets/brand-name.svg" alt="" />
      </Container>
    </>
  );
}
