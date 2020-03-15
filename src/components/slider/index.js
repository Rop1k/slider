import React, {useEffect, useState, useRef} from 'react';
import './style.css';
import SlideItems from './slider_list';
import Img_1 from '../../img/test_img_1.jpg';
import Img_2 from '../../img/test_img_2.jpg';
import Img_3 from '../../img/test_img_3.jpg';

const ArrayImg = [Img_1,Img_2,Img_3];

class Slider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            slideImg: ArrayImg[0],
            prevImg: ArrayImg[ArrayImg.length - 1],
            nextImg: ArrayImg[1],
            current:0,
            animateClass: 'slider_cont'
        }
    }


    componentDidUpdate(prevProps, prevState){
        console.log(prevState.slideImg ,' prevState.slideImg ');
        console.log(this.state.slideImg ,' this.state.slideImg ');
        if((this.state.animateClass === 'slider_cont animate_right' || this.state.animateClass === 'slider_cont animate_left') && prevState.slideImg !== this.state.slideImg){
            setTimeout(()=>{
                const imgTotal = ArrayImg.length;
                this.setState({
                    nextImg: imgTotal === this.state.current + 1 ? ArrayImg[0] : ArrayImg[this.state.current + 1],
                    prevImg: this.state.current === 0 ? ArrayImg[imgTotal - 1] : ArrayImg[this.state.current - 1],
                    animateClass: 'slider_cont'
                })
            },500)
        }
    }

    onClickPrev = () => {
        console.log(this.state.current+' this.state.prev');
        const imgTotal = ArrayImg.length;
        const prevSlide = this.state.current - 1;

        this.setState({
            animateClass: 'slider_cont animate_right'
        })

        setTimeout(()=>{
           this.setState({
                current: prevSlide <  0 ? imgTotal-1 : this.state.current - 1,
                slideImg :  prevSlide < 0 ? ArrayImg[imgTotal-1] : ArrayImg[prevSlide],
            });
        },1100)

    }
    onClickNext = () => {
        console.log(this.state.current+' this.state.next');
        const imgTotal = ArrayImg.length;
        const nextSlide = this.state.current + 1;

        this.setState({
            animateClass: 'slider_cont animate_left'
        })

        setTimeout(()=>{
            this.setState({
                current: imgTotal === nextSlide ? 0 : this.state.current + 1,
                slideImg : imgTotal === nextSlide ? ArrayImg[0] : ArrayImg[this.state.current + 1],
            });
        },1100)

    }




    render(){
        console.log(this.state.current+' this.state.current');
        const {slideImg,nextImg,prevImg, animateClass} = this.state
        const imgTotal = ArrayImg.length
        return (

            <div className="slider_wrap">

                <div className="prev_btn"
                     onClick={this.onClickPrev}>
                </div>
                <div className="next_btn"
                     onClick={this.onClickNext}>
                </div>
                <div className="slider_wr" id="slider_wr">
                    <div className={animateClass}>
                        <SlideItems classSlide="slide prev" src={prevImg}/>
                        <SlideItems classSlide="slide active" src={slideImg}/>
                        <SlideItems classSlide="slide next" src={nextImg}/>
                    </div>
                </div>
            </div>
        );
    }
}



/*function Slider(){

    const sliderId = useRef(null);

    const defaultSlideImg = Img_1;
    const [slideImg, setSlideImg] = useState(defaultSlideImg);

    const onClickPrev = () => {
        setSlideImg(Img_1);
    }
    const onClickNext = () => {
        setSlideImg(Img_2);
    }

    return(
        <div className="slider_wrap">

            <div className="prev_btn"
                onClick={onClickPrev}>
            </div>
            <div className="next_btn"
                 onClick={onClickNext}>
            </div>
            <div className="slider_wr" id="slider_wr" ref={sliderId}>
                <div className="slider_cont">
                    <SlideItems src={slideImg} slideNumber="1"/>
                </div>
            </div>
        </div>
    )
}*/

export default Slider;