import React, {useEffect} from 'react';
import './style.css';


function Slide(props) {



    return(
        <div className={props.classSlide} style={{background:props.src}}>
            {props.slideNumber}
            <img className="slide_img" src={props.src}/>
        </div>
    )
}

export default Slide;
