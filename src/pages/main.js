import React, { Component } from 'react';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import Form from '../components/Formik/SignUpForm';
import MainImg from '../assets/beagle.jpg';
import { Col, Row, Container } from "../components/Grid";
import Image from 'react-bootstrap/Image';

class Main extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="sm-12 md-7 lg-9">
                        <Card>
                            <CardHeader>Header</CardHeader>
                            <Image src={MainImg} className="main-image" alt="beagle puppies for life" fluid/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Qui gloriatur scribentur et, id velit verear mel, cum no porro debet. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Scripta periculis ei eam, te pro movet reformidans. Scripta periculis ei eam, te pro movet reformidans. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Scripta periculis ei eam, te pro movet reformidans. An dicant apeirian qui, at vide indoctum pro.
</p>
                        </Card>
                    </Col>
                    <Col size="sm-12 md-5 lg-3">
                        <Card className="form-card">
                            <CardHeader>Header</CardHeader>
                            <Form />
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Main;