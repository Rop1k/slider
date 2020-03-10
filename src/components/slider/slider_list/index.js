import React from 'react';
import './style.css';
import Slide from '../slide';


function SlideItems(props) {
    return(
        <Slide width={props.width} src={props.src} slideNumber="1"/>
    )
}

export default SlideItems;
