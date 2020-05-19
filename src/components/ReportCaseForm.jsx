import * as React from "react";
import {Form, Col, Row, Button} from "react-bootstrap";

export class ReportCaseForm extends React.Component {
    componentDidMount() {
    }

    render() {
        return <div className="report-form">
            <div className="report-title">
                Report a new case
            </div>
            <Form>
                <Form.Group as={Col} controlId="formGridAge" className="row-label">
                    <Form.Label sm="6" className="row-value">Patient's Age</Form.Label>
                    <Form.Control sm="6" as="select" value="Choose..." className="row-value">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Row} className="row-label">
                    <Form.Label as="legend" column sm={6} className="row-value">
                        Gender
                    </Form.Label>
                    <Col sm={6} className="row-value">
                        <Form.Check
                            type="radio"
                            label="Male"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                        <Form.Check
                            type="radio"
                            label="Female"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                        />
                        <Form.Check
                            type="radio"
                            label="Don't answer"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                        />
                    </Col>
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

            </Form>
            <div className="button">
                <Button variant="primary" type="submit">
                    Report
                </Button>
            </div>
        </div>
    }
}

export default ReportCaseForm;