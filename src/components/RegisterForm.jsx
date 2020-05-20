import * as React from "react";
import {Form, Col, Row, Button} from "react-bootstrap";
import RangeSlider from 'react-bootstrap-range-slider';
import RegisterApiClient from "../api/RegisterApiClient";

export class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            isPhoneNumber: false,
            phoneNumber: '',
            emailAddress: '',
            state: '',
            zipcode: '',
            alertPreference: '',
            range: 5
        }
    }

    updateData = (e) => {
        let field = e.target.name;
        let value = e.target.value;
        if (field === "isPhoneNumber") {
            value = !this.state.isPhoneNumber
        }
        this.setState({
            ...this.state,
            [field]: value
        })
    };

    updatePreference(value) {
        this.setState({
            ...this.state,
            alertPreference: value
        })
    }

    setRange(value) {
        this.setState({
            ...this.state,
            range: value
        })
    }


    onSubmit = (e) => {
        console.log(this.state);
        // this.validate();
        let s = this.register();
    };

    async register() {
        try {
            await RegisterApiClient.register({
                ...this.state
            });
        } catch (error) {
            console.error('Failed to register');
        }
    }


    componentDidMount() {
    }

    render() {
        return <div className="register-form">
            <div className="register-title">
                Register to get Alerts
            </div>
            <Form>
                <Form.Row className="row-label">
                    <Form.Label as={Col} sm={6} className="row-value">
                        Name
                    </Form.Label>
                    <Form.Control name="name" sm="6" className="row-value" placeholder="Name"
                                  onChange={this.updateData}/>
                </Form.Row>
                <Form.Group controlId="formTextMessage" className="row-label">
                    <Form.Label as={Col} sm={6} className="row-value">
                        Type of alert
                    </Form.Label>
                    <Form.Check type="checkbox" name="isPhoneNumber" label="Text message" className="row-value" sm="6"
                                onChange={this.updateData}/>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextEmail" className="row-label">
                    <Form.Label as={Col} sm={6} className="row-value">
                        Phone number
                    </Form.Label>
                    <Form.Control name="phoneNumber" sm="6" className="row-value" plaintext placeholder="999-999-9999"
                                  disabled={!this.state.isPhoneNumber} onChange={this.updateData}/>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextEmail" className="row-label">
                    <Form.Label as={Col} sm={6} className="row-value">
                        Email
                    </Form.Label>
                    <Form.Control sm="6" className="row-value" plaintext readOnly defaultValue="email@example.com"
                                  disabled={this.state.isPhoneNumber}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState" className="row-label">
                    <Form.Label sm={6} className="row-value">State</Form.Label>
                    <Form.Control sm={6} as="select" value="Choose..." className="row-value" name="state"
                                  onChange={this.updateData}>
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip" className="row-label">
                    <Form.Label sm={6} className="row-value">Zip</Form.Label>
                    <Form.Control sm={6} className="row-value" name="zipcode" onChange={this.updateData}/>
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
                            onChange={this.updatePreference.bind(this, "new_case")}
                        />
                        <Form.Check
                            type="radio"
                            label="Every day at 9:00 AM"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            onChange={this.updatePreference.bind(this, "every_day")}
                        />
                        <Form.Check
                            type="radio"
                            label="Every week at 9:00AM"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                            onChange={this.updatePreference.bind(this, "every_week")}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="row-label">
                    <Form.Label as="legend" column sm={6} className="row-value">
                        Alerts for <br/> zipcodes
                    </Form.Label>
                    <Form.Control as="textarea" rows="4" className="row-value"/>
                </Form.Group>
                <Form.Group controlId="formBasicRange" className="row-label">
                    <Form.Label as={Col} sm={6} className="row-value">Range</Form.Label>
                    <Col sm={6}>
                        <RangeSlider
                            value={this.state.range} className="row-value" size="lg"
                            onChange={changeEvent => this.setRange(Number(changeEvent.target.value))}
                        />
                    </Col>

                </Form.Group>

            </Form>
            <div className="button">
                <Button variant="primary" type="submit" onClick={this.onSubmit}>
                    Register
                </Button>
            </div>
        </div>
    }
}

export default RegisterForm;