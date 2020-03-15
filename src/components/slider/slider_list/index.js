import React from 'react';
import './style.css';
import Slide from '../slide';


function SlideItems(props) {
    return(
        <Slide classSlide={props.classSlide} src={props.src}/>
    )
}

export default SlideItems;
