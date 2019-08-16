import React, { Component } from 'react';
import Card from '../components/Card';
import { Col, Row, Container } from "../components/Grid";
import Footer from '../components/Footer';

class Main extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="sm-12 md-8">
                        <Card>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Cum ne case tation rationibus, nam ad iusto atomorum assueverit. Qui gloriatur scribentur et, id velit verear mel, cum no porro debet. Ex nam agam veri, dicunt efficiantur ad qui, ad legere adversarium sit. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Sonet cotidieque ei vel. Usu ut commune mentitum, putent facete vim id. Pri viderer tamquam ei. Scripta periculis ei eam, te pro movet reformidans. Id doctus accommodare eam, pri an esse tota prodesset, te veniam oblique posidonium mel. Sed no sumo stet, est ei quodsi feugait liberavisse, in pro quot facete definitiones. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec.
</Card>
                    </Col>
                    <Col size="sm-12 md-4">
                        <Card>Form</Card>
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