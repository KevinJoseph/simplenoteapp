import React from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const ListNote = () => {
    return (
        <div className='container'>
            <br>
            </br>
            <br>
            </br>
            <br></br>
            <br></br>
            <br>
            </br>
            <br>
            </br>
            <br></br>
            <br></br>
            <br>
            </br>
            <br>
            </br>
            <br></br>
            <br></br>
            <Container fluid="md">
                <Row>
                    <center>
                        <Col md={3}>
                            <Form.Text id="passwordHelpBlock" muted>
                                Type the password
                            </Form.Text>

                            <Form.Control
                                type="password"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            />
                            <br></br>
                            <Button variant="dark" type="submit">
                                Enter
                            </Button>

                        </Col>
                    </center>
                </Row>
            </Container>
        </div>
    )
}

export default ListNote;