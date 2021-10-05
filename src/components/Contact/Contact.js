import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="container">
            <h1 className="text-center">GET IN TOUCH</h1>
            <Form className="contact bg-secondary my-4 mx-auto  text-light px-4 py-2">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="your password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Link to="/">
                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Link>
            </Form>
        </div>
    );
};

export default Contact;