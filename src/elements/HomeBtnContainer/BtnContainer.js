import { Button, Container, Row, Col } from "react-bootstrap";
import "./style.css";

function BtnContainer() {
  return (
    <>
      <Container className='btnContainer' d-flex justify-content-center>
        <div className="p-d-flex p-jc-center">
          <div className="card">
            <div className="p-fluid">
              <Row className="p-d-flex p-jc-center">
                <Col>
                  <Button block className="login" href="/login">
                    Login
                  </Button>
                </Col>
                <Col>
                  <Button block className="userBtn" href="/signup">
                    Create User
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default BtnContainer;
