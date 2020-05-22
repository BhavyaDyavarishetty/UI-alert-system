import * as React from "react";
import {Form, Col, Row, Button} from "react-bootstrap";
import _ from "lodash";
import ValidatorUtil from "../utils/ValidatorUtil";
import ReportApiClient from "../api/ReportApiClient";

export class ReportCaseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: '',
            gender: '',
            state: '',
            zipcode: '',
            errors: {
                age: '',
                gender: '',
                state: '',
                zipcode: ''
            }
        }
    }

    updateData = (e) => {
        let field = e.target.name;
        let value = e.target.value;
        this.setState({
            ...this.state,
            [field]: value
        })
    };

    updateGender(value) {
        this.setState({
            ...this.state,
            gender: value
        })
    }

    onSubmit = async (e) => {
        await this.validate();
        let hasErrors = _.values(this.state.errors).some((value) => {
            return value !== '';
        })
        if (!hasErrors) {
            await this.report();
        }
    }

    async report() {
        try {
            await ReportApiClient.report({
                ...this.state
            });
        } catch (error) {
            console.error('Failed to register');
        }
    }

    validate() {
        let values = this.state;
        this.validateField("age", values.age);
        this.validateField("gender", values.gender);
        this.validateField("state", values.state);
        this.validateField("zipcode", values.zipcode);
    }

    validateField(field, value) {
        let message = '';
        switch (field) {
            case("age"):
                message = ValidatorUtil.validateRange(value);
                break;
            case("gender"):
                message = ValidatorUtil.validateIsEmpty(value);
                break;
            case("state"):
                message = ValidatorUtil.validateIsEmpty(value);
                break;
            case("zipcode"):
                message = ValidatorUtil.validateZipcode(value);
                break;
            default:
                break;

        }
        this.setErrorMessage(message, field);
    }

    setErrorMessage(message, field) {
        if (!(message === '')) {
            this.setState(state => {
                state.errors[field] = message
            })
        }
    }

    render() {
        return <div className="report-form">
            <div className="report-title">
                Report a new case
            </div>
            <Form>
                <Form.Group as={Col} controlId="formGridAge" className="row-label">
                    <Form.Label sm={6} className="row-value">Patient's Age</Form.Label>
                    <Form.Control sm={6} as="select" value="Choose..." className="row-value" name="patientAge"
                                  onChange={this.updateData}>
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
                            OnChange={this.updateGender.bind(this, "Male")}
                        />
                        <Form.Check
                            type="radio"
                            label="Female"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            OnChange={this.updateGender.bind(this, "Female")}
                        />
                        <Form.Check
                            type="radio"
                            label="Don't answer"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                            OnChange={this.updateGender.bind(this, "NA")}
                        />
                    </Col>
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

            </Form>
            <div className="button">
                <Button variant="primary" type="submit" onClick={this.onSubmit}>
                    Report
                </Button>
            </div>
        </div>
    }
}

export default ReportCaseForm;