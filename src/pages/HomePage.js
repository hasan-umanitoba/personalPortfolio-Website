import React from 'react';
import FrontSection from '../components/FrontSection';
import Carousel from '../components/Carousel';
function HomePage(props) {
    return (
        <div>
            <FrontSection title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel></Carousel>
        </div>

    );
}
export default HomePage;