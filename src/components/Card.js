import React from 'react';
import CardInfo from'../components/CardInfo';
function Card(props) {
return (
<div className="d-inline-block styl-card" onClick={(e)=> props.click(props.item)}>
    <img className="styl-card-image" src ={props.item.imgSrc} alt={props.item.imgSrc}></img>
    {props.item.selected && <CardInfo title ={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>}
</div>



);
}
export default Card; 
