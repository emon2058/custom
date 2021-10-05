import React from 'react';
import Image from '../../images/about.webp'
const About = () => {
    return (
        <div>
            <div className="text-light text-center bg-info p-4 my-4">
                <h1>About</h1>
            </div>
            <div className="container">
                <h1>Our Mission</h1>
                <p>Our dynamic team serves the college community by providing training, research, and flexible support services. Through creative problem solving, collaboration, and reflection we provide an environment for growth in teaching and learning in an effort to best support our students, faculty and staff</p>
                <h1>Our Vission</h1>
                <p>eLearning inspires community engagement and inclusive learning environments through the use of emerging technologies</p>
            </div>
            <div className="text-light bg-info p-4 my-4">
                <div className="text-center my-2" >
                    <img src={Image} alt="" /> 
                </div>
                <h4>You can’t succeed if you just do what others do and follow the well-worn path. You need to create a new and original path for yourself</h4>
            </div>
        </div>
    );
};

export default About;