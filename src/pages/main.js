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
                            <CardHeader><h2>About GPS</h2></CardHeader>
                            <Image src={MainImg} className="main-image" alt="beagle puppies for life" fluid />
                            <p>Doggo ipsum noodle horse doing me a frighten boofers dat tungg tho borkf stop it fren many pats, blop shooberino long water shoob blep you are doin me a concern. Fluffer corgo heckin angery woofer pats heckin I am bekom fat wow such tempt, the neighborhood pupper fluffer floofs shoob. Doge blep super chub extremely cuuuuuute wow such tempt fluffer pupperino pupper blep, bork waggy wags long doggo mlem maximum borkdrive much ruin diet smol.

Such treat doing me a frighten shibe, many pats. <br></br>
Smol heckin wow very biscit smol, heck aqua doggo. Doge woofer shoober, lotsa pats. I am bekom fat you are doing me a frighten aqua doggo blop waggy wags, big ol pupper shoob. Most angery pupper I have ever seen what a nice floof the neighborhood pupper pupper I am bekom fat extremely cuuuuuute, you are doin me a concern doggo long water shoob. Bork pupper big ol, heckin good boys. Pupperino heckin what a nice floof ruff heckin angery woofer, ruff h*ck. <br></br>Heckin extremely cuuuuuute shoob puggo noodle horse shibe shooberino long water shoob, heck fat boi smol borking doggo with a long snoot for pats puggo puggorino smol. Shibe long bois much ruin diet, long doggo.

Length boy shoober length boy blop, such treat pupper.  pupper stop it fren.<br></br>
You are doing me a frighten porgo smol borking doggo with a long snoot for pats fluffer you are doin me a concern, shooberino long woofer corgo. Borkdrive doggorino yapper floofs, doge. Clouds extremely cuuuuuute stop it fren maximum borkdrive vvv, puggo long woofer sub woofer h*ck borkdrive, long woofer boofers many pats. Dat tungg tho ruff doggo wrinkler, shoob. He made many woofs shoob smol tungg what a nice floof long bois doge, very jealous pupper smol borking doggo with a long snoot for pats extremely cuuuuuute heckin good boys shoob, tungg such treat clouds you are doing me a frighten porgo.

</p>
                        </Card>
                    </Col>
                    <Col size="sm-12 md-5 lg-3">
                        <Card className="form-card">
                            <CardHeader><h2>Join Us!</h2></CardHeader>
                            <Form />
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Main;