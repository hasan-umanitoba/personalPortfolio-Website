import React from 'react';
import { useSpring, animated } from 'react-spring'

function CardInfo(props) {
    const cardStyle = useSpring({ opacity: 1, from: { opacity: 0 } });// takes in an object , changing opacity
    return (
        <animated.div className="styl-card-info" style={cardStyle}>
            <p className="styl-card-title">{props.title}</p>
            <p className="styl-card-subtitle">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
        </animated.div> //anchor tag for link 
    );

}

export default CardInfo