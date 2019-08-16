import React, { Component } from 'react';
import Card from '../components/Card';
import Form from '../components/Formik/SignUpForm';
import { Col, Row, Container } from "../components/Grid";
import Footer from '../components/Footer';

class Main extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="sm-12 md-8">
                        <Card>
                            
                        </Card>
                    </Col>
                    <Col size="sm-12 md-4">
                        <Card>
                            <Form />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col size="sm-12">
                        <Footer />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Main;