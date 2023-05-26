import { Container, Card, Value, Caption } from "./Style";

export default function Cards() {
  return (
    <>
      <Container>
        <Card elevation={5}>
          <Value>123</Value>
          <Caption>No. of Packers</Caption>
        </Card>
        <Card elevation={5}>
          <Value>456</Value>
          <Caption>No. of Camera Connected</Caption>
        </Card>
        <Card elevation={5}>
          <Value>789</Value>
          <Caption>No. of Workstations</Caption>
        </Card>
        <Card elevation={5}>
          <Value>987</Value>
          <Caption>Total Packages captured</Caption>
        </Card>
        <Card elevation={5}>
          <Value>654</Value>
          <Caption>Average no. of packages packed per day</Caption>
        </Card>
        <Card elevation={5}>
          <Value>321</Value>
          <Caption>Average no. of packages packed per packer per day</Caption>
        </Card>
      </Container>
    </>
  );
}
