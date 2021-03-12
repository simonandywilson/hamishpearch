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

const overrides = {
    times: (props) => <p className="times" {...props} />,
};

const serializers = {
    types: {
        block: (props) =>
            // Check if we have an override for the “style”
            overrides[props.node.style]
                ? // if so, call the function and pass in the children, ignoring
                  // the other unnecessary props
                  overrides[props.node.style]({ children: props.children })
                : // otherwise, fallback to the provided default with all props
                  PortableText.defaultSerializers.types.block(props),
    },
};

const Slider = React.forwardRef((props, ref) => {
    console.log(props.description);
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
                serializers={serializers}
            />
        </section>
    );
});

export default Slider;
