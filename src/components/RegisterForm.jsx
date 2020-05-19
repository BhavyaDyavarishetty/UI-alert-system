import * as React from "react";
import {Form, Col, Row, Button} from "react-bootstrap";

export class RegisterForm extends React.Component {
    componentDidMount() {
    }

    render() {
        return <div className="register-form">
            <div className="register-title">
                Register to get Alerts
            </div>
            <Form>
                <Form.Row className="row-label">
                    <Form.Label column sm="6" className="row-value">
                        Name
                    </Form.Label>
                    <Form.Control sm="6" className="row-value" placeholder="Name"/>
                </Form.Row>
                <Form.Group controlId="formTextMessage" className="row-label">
                    <Form.Label column sm="6" className="row-value">
                        Type of alert
                    </Form.Label>
                    <Form.Check type="checkbox" label="Text message" className="row-value" sm="6"/>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextEmail" className="row-label">
                    <Form.Label column sm="6" className="row-value">
                        Phone number
                    </Form.Label>
                    <Form.Control sm="6" className="row-value" plaintext readOnly placeholder="999-999-9999"/>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextEmail" className="row-label">
                    <Form.Label column sm="6" className="row-value">
                        Email
                    </Form.Label>
                    <Form.Control sm="6" className="row-value" plaintext readOnly defaultValue="email@example.com"/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState" className="row-label">
                    <Form.Label sm="6" className="row-value">State</Form.Label>
                    <Form.Control sm="6" as="select" value="Choose..." className="row-value">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip" className="row-label">
                    <Form.Label sm="6" className="row-value">Zip</Form.Label>
                    <Form.Control sm="6" className="row-value"/>
                </Form.Group>
                <Form.Group as={Row} className="row-label">
                    <Form.Label as="legend" column sm={6} className="row-value">
                        Select alert preference
                    </Form.Label>
                    <Col sm={6} className="row-value">
                        <Form.Check
                            type="radio"
                            label="On new case"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                        <Form.Check
                            type="radio"
                            label="Every day at 9:00 AM"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                        />
                        <Form.Check
                            type="radio"
                            label="Every week at 9:00AM"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="row-label">
                    <Form.Label as="legend" column sm={6} className="row-value">
                        Alerts for <br/> zipcodes
                    </Form.Label>
                    <Form.Control as="textarea" rows="3" className="row-value"/>
                </Form.Group>
                <Form.Group controlId="formBasicRange" className="row-label">
                    <Form.Label className="row-value">Range</Form.Label>
                    <Form.Control type="range" className="row-value"/>
                </Form.Group>
            </Form>
            <div className="button">
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </div>
        </div>
    }
}

export default RegisterForm;