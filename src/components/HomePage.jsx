import * as React from "react";
import {Container} from "react-bootstrap";

import Header from "../components/Header";
import RegisterForm from "./RegisterForm";
import ReportCaseForm from "./ReportCaseForm";

const VerticalLine = () => (
    <div className="vertical-bar"/>
);

export class HomePage extends React.Component{

    componentDidMount() {
    }

    render() {
        return <div>
            <Container>
                <Header/>
                <div className="homepage">
                    <RegisterForm/>
                    <VerticalLine/>
                    <ReportCaseForm/>
                </div>
            </Container>
        </div>
    }
}

export default HomePage;