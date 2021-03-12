import React from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import PortableText from "@sanity/block-content-to-react";
import { Swiper } from "swiper/react";
import "../styles/swiper.scss";
import "../styles/navigation.scss";
import "../styles/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import style from "./slider.module.css";
SwiperCore.use([Navigation, Pagination]);

const Slider = React.forwardRef((props, ref) => {
    return (
        <section className={style.section} ref={ref}>
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
            <PortableText
                className={style.description}
                blocks={props.description}
                renderContainerOnSingleChild={true}
            />
        </section>
    );
});

export default Slider;
