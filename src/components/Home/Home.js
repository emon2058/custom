import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import { Card, Col, Row } from 'react-bootstrap';
import './Home.css';
const Home = () => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
            <div className="header">
                <h1>ONLINE LEARNING</h1>
                <h1>Learn Everyday</h1>
                <p>Learning something new every day is one of the top ways to keep the mind sharp. The brain is like a muscle and needs to be exercised</p>
            </div>
            <Row xs={1} md={3} className="g-4 mx-auto my-4">
            {
                courses.map(course => course.id ===1||course.id===4 || course.id===7?<Course
                id={course.id}
                course={course}
                ></Course>:""
                )
            }
            </Row>
        </div>
    );
};

export default Home;