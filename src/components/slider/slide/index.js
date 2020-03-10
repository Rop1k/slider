import React, {useEffect, useState} from 'react';
import './style.css';


function Slide(props) {

    console.log(props.src+' props.src');

    const slideClassName = 'slide';
    //const defaultSlideImg = props.src;

    const [slideName, setSlideClassName] = useState(slideClassName);
   // const [slideImg, setSlideImg] = useState(defaultSlideImg);
    useEffect(() => {

       // setSlideImg(props.src);
        return () => {
            setSlideClassName('slide slide_hide');
        }
    });

    return(
        <div className={slideName} style={{width:props.width, background:props.src}}>
            {props.slideNumber}
            <img className="slide_img" src={props.src}/>
        </div>
    )
}

export default Slide;
