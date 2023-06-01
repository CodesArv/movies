import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function footer() {
  return (
    <Container fluid>
      <Row className="footercol">
        <Col md={2}></Col>
        <Col md={8} className="text-center pd-footer">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
}

export default footer;
