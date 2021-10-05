import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import { Card, Col, Row } from 'react-bootstrap';

const Home = () => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
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