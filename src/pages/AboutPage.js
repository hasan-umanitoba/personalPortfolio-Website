import React from 'react';
import FrontSection from '../components/FrontSection';
import Description from '../components/Description';

function AboutPage(props) {

    return (
        <div>
            <FrontSection title={props.title} />

            <Description>
                <p>Hello, my name is Hasan. I am currently a third year Computer Science Student at the University of Manitoba.</p>

                <p>Building products with advanced intelligence and smart process automation. Interested in infrastructure and scalability. Always open for new ideas and collaboration. </p>

                <p>I am an Experienced Software Developer with a history of working on valuable projects involving technologies such as C#, Java, TypeScript, HTML, CSS, AWS, Node.js, React, and etc </p>

                <p>Through my experiences, I have shaped my mental abilities to accept different kinds of challenges which requires me to learn any new language, platform or to interact with new individuals for collaboration. I have managed to be more resourceful by reaching out to developers outside my team and by utilizing my time to learn and break barriers quickly. I continue to work with diverse people having the goal to create scalable technologies improving the lives of masses</p>

                <p>Along with my technical skills, I am a very community-driven person. During my time at the University of Manitoba, I have represented the needs of students in the budgeting committee and initiated multiple programs to improve mental health resources on campus.</p>
            </Description>
        </div>
    );

}

export default AboutPage;