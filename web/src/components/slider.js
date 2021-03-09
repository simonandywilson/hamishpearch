import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";
import "../styles/swiper.scss";
import "../styles/navigation.scss";
import "../styles/pagination.scss";
import style from "./slider.module.css";
SwiperCore.use([Navigation, Pagination]);


const Slider = (props) => {
    return (
        <section className={style.section}>
            <div className={style.slider}>
                <div className={style.sliderContainer}>
                    <Swiper
                        navigation
                        pagination={{ type: "progressbar" }}
                        observer={"true"}
                        observeParents={"true"}
                    >
                        {props.children}
                    </Swiper>
                </div>
            </div>
            <div className={style.description}>{props.description}</div>
        </section>
    );
};

export default Slider;
