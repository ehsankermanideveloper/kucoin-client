import {Container, Row, Col} from 'reactstrap';

const ContentItem = ({title, text, image}) => {    
    return (
        <Container className="main-content-item">
            <Row className="align-items-center">
                <Col sm={6} md={6} lg={6} className="order-1 order-sm-1">
                    <img src={image} alt="loading" className="imageContent" />
                </Col>
                <Col sm={6} md={6} lg={6} className="order-2 order-sm-2">
                    <h3 className="text-center bold-fa">{title}</h3>
                    <p>{text}</p>
                </Col>
            </Row>
        </Container>
    );

}

export default ContentItem;