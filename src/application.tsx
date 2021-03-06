import React, { useState } from 'react';
import { Card, CardBody, Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap'
import SurveyComponent from './components/survey';
import defaulltSurveyConfig from './config/survey';
import * as SurveyCreator from "survey-creator";

SurveyCreator.StylesManager.applyTheme("bootstrap");

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = props => {
    const [navbarOpen, setNavbarOpen] = useState<boolean>(false)

    return (
        <>
            <Navbar color='primary' dark expand='md'>
                <Container>
                    <NavbarBrand>Survey Website</NavbarBrand>
                    <NavbarToggler onClick={() => setNavbarOpen(!navbarOpen)} />
                    <Collapse isOpen={navbarOpen} navbar>
                        <Nav className='me-auto' navbar></Nav>
                    </Collapse>
                </Container>
            </Navbar>
            <Container>
                <Card>
                    <CardBody>
                        <SurveyComponent 
                            css={defaulltSurveyConfig.defaultSurveyCss}
                            json={defaulltSurveyConfig.defaultSurveyJson}
                            data={defaulltSurveyConfig.defaultSurveyData}
                            onComplete={(survey: any) => {
                                console.log(survey.data);
                            }}
                        />
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}

export default Application