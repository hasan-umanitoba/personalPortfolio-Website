import React from 'react';
import FrontSection from '../components/FrontSection';
import Description from '../components/Description';

function Experience(props) {

    return (
        <div className="abc" >
            <FrontSection title={props.title} subTitle={props.subTitle} text={props.text} />

            <Description>
                <p>-Created components of desktop and web-based data scraping applications that fully automated the process of data collection, making calculations and filling forms. As a result, it saved several hundred team hours of manual data gathering, validation and labelling.</p>

                <p>-Built a new "helpful chatbot" integrated with slack which serve as a personal assistant by scheduling meetings, reminding tasks and organizing resources in an efficient way.</p>

                <p>-Analyzed hundreds of lines of automation code refactoring several functions to use multi-threading so asynchronous operations could be performed in less time</p>

                <p>-Developed unit, functional and automated tests to ensure higher test coverage. Performed QA regression testing of multiple applications and was able to log defects.</p>

                <p>-Communicated effectively with business analysts to refactor and improve the usability of programs according to the requirements of clients.</p>
            </Description>
        </div>
    );

}

export default Experience;