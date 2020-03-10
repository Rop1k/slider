import React, {useEffect, useState, useRef} from 'react';
import './style.css';
import SlideItems from './slider_list';
import Img_1 from '../../img/test_img_1.jpg';
import Img_2 from '../../img/test_img_2.jpg';

function Slider(){

    const sliderId = useRef(null);
    const defaultSlideWidth = 1920;

    const [slideWidth, setSlideWidth] = useState(defaultSlideWidth);

    const defaultSlideImg = Img_1;
    const [slideImg, setSlideImg] = useState(defaultSlideImg);

    const onClickPrev = () => {

    }
    const onClickNext = () => {
        setSlideWidth(1000);
        setSlideImg(Img_2);
    }

    //const slides = document.getElementsByClassName('slide');




    useEffect(() =>{
        const newSlideWidth = sliderId.current.offsetWidth;
        setSlideWidth(newSlideWidth);

        // [...slides] когда работаем с псевдомассивами нужно его преврадить в массив
        //[...slides].forEach((item) => {
        /*slides.current.forEach((item) => {
            item.style.width = slideWidth + 'px'
        });*/

        /*for (var i=0;i<slides.length;i++) {
            slides[i].style.width=slideWidth+'px';
        };*/

        //console.log(slides+' slides');


    });

    return(
        <div className="slider_wrap">

            <div className="prev_btn"></div>
            <div className="next_btn"
                 onClick={onClickNext}>
            </div>
            <div className="slider_wr" id="slider_wr" ref={sliderId}>
                <div className="slider_cont">
                    <SlideItems width={slideWidth} src={slideImg} slideNumber="1"/>
                </div>
            </div>
        </div>
    )
}

export default Slider;