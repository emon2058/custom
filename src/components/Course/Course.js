import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Course = (props) => {
    const {img,name,owner,rating,price} = props.course;
    console.log(props.course);
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} height="250px"/>
                    <Card.Body>
                        <Card.Title text="info">{name}</Card.Title>
                        <Card.Title>{owner}</Card.Title>
                        <Card.Title>{rating}</Card.Title>
                        <Card.Title>{price}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;