import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Course = (props) => {

    const {img,name,owner,rating,price} = props.course;
    console.log(props.course);
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} height="250px"/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title> <div>
<Rating
  emptySymbol={['fa fa-star-o fa-2x', 'fa fa-heart-o fa-2x']}
  fullSymbol={['fa fa-star fa-2x', 'fa fa-heart fa-2x']}
/>
</div>
                        <Card.Title className="text-secondary">{owner}</Card.Title>
                        <Card.Title>
                        <Rating
  initialRating={rating}
  readonly
/><Rating
  emptySymbol="fa fa-star-o fa-2x"
  fullSymbol="fa fa-star fa-2x"
/></Card.Title>
<Rating
  stop={6}
  emptySymbol={['fa fa-star-o fa-2x low', 'fa fa-star-o fa-2x low',
    'fa fa-star-o fa-2x medium', 'fa fa-star-o fa-2x medium',
    'fa fa-star-o fa-2x high', 'fa fa-star-o fa-2x high']}
  fullSymbol={['fa fa-star fa-2x low', 'fa fa-star fa-2x low',
    'fa fa-star fa-2x medium', 'fa fa-star fa-2x medium',
    'fa fa-star fa-2x high', 'fa fa-star fa-2x high']}
/><Rating
  emptySymbol="glyphicon glyphicon-heart-empty"
  fullSymbol="glyphicon glyphicon-heart"
/><Rating
  emptySymbol="fa fa-star-o fa-2x"
  fullSymbol="fa fa-star fa-2x"
  fractions={2}
/>
                        <Card.Title><Rating
  stop={4}
  emptySymbol="fa fa-battery-empty fa-2x"
  fullSymbol={['fa fa-battery-1 fa-2x', 'fa fa-battery-2 fa-2x',
    'fa fa-battery-3 fa-2x', 'fa fa-battery-4 fa-2x']}
/>${price}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;