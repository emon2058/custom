import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Course from '../Course/Course';

const Courses = () => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
            <h1>Course</h1>
            <Row xs={1} md={3} className="g-4 mx-auto my-4">
            {
                courses.map(course =><Course
                id={course.id}
                course={course}
                ></Course>
                )
            }
            </Row>
        </div>
    );
};

export default Courses;