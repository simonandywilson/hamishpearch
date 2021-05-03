import React, { useState, useRef } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";
import "../styles/swiper.scss";
import "../styles/navigation.scss";
import "../styles/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import style from "../styles/slider.module.css";

import Description from "../components/description"
SwiperCore.use([Navigation, Pagination]);

const Slider = React.forwardRef((props, ref) => {
    let navPrev = useRef(null);
    let navNext = useRef(null);

    const [count, setCount] = useState({
        index: null,
        total: props.length,
    });


    // Initial setup
    // useEffect(() => {
    //     if (!mq.matches) {
    //         // const timeline = gsap.timeline({
    //         //     onComplete: setState({
    //         //         initial: false,
    //         //         landscape: false,
    //         //         portrait: true,
    //         //         collapsed: false,
    //         //     }),
    //         // });
    //         // Portait
    //         // timeline.set(expand, {
    //         //     display: "block",
    //         // });
    //         // timeline.set(textContainer, {
    //         //     height: 0,
    //         // });
    //         // timeline.set(textContainer, {
    //         //     height: "auto",
    //         // });
    //     } else if (mq.matches) {
    //         // Landscape
    //         // const timeline = gsap.timeline({
    //         //     onComplete: setState({
    //         //         initial: false,
    //         //         landscape: true,
    //         //         portrait: false,
    //         //         collapsed: false,
    //         //     }),
    //         // });
    //         // timeline.set(expand, {
    //         //     display: "none",
    //         // });
    //         // timeline.set(textContainer, {
    //         //     height: 0,
    //         // });
    //         // timeline.set(textContainer, {
    //         //     height: "auto",
    //         // });
    //     }

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    return (
        <section className={style.section} ref={ref}>
            <div className={style.row}>
                <div className={style.counter}>
                    {count.index}/{count.total}
                </div>
            </div>
            <div className={style.slider}>
                <div className={style.sliderContainer}>
                    <Swiper
                        navigation={{
                            prevEl: navPrev.current ? navPrev.current : undefined,
                            nextEl: navNext.current ? navNext.current : undefined,
                        }}
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = navPrev.current;
                            swiper.params.navigation.nextEl = navNext.current;
                            swiper.navigation.update();
                            setCount({ ...count, index: swiper.realIndex + 1 });
                        }}
                        pagination={{ type: "progressbar" }}
                        observer={"true"}
                        observeParents={"true"}
                        onSlideChange={(swiper) => {
                            setCount({ ...count, index: swiper.realIndex + 1 });
                        }}
                    >
                        {props.children}
                        <div className={style.navPrev} ref={navPrev}></div>
                        <div className={style.navNext} ref={navNext}></div>
                    </Swiper>
                </div>
            </div>
            <Description description={props.description}/>
        </section>
    );
});

export default Slider;
