import React from "react";
import style from "../styles/project.module.css";
import SanityMuxPlayer from "sanity-mux-player";

const Vid = React.forwardRef((props, ref) => {

    const RenderVideo = () => {
        if (props.type === "normal") {
            return (
                <SanityMuxPlayer
                    assetDocument={props.video.asset}
                    autoload={true}
                    height={"100%"}
                    width={"100%"}
                    autoplay={false}
                    loop={false}
                    muted={false}
                    showControls={true}
                />
            );
        } else if (props.type === "autoplay") {
            return (
                <SanityMuxPlayer
                    assetDocument={props.video.asset}
                    autoload={true}
                    height={"100%"}
                    width={"100%"}
                    autoplay={true}
                    loop={true}
                    muted={true}
                    showControls={true}
                />
            );
        } else if (props.type === "gif") {
            return (
                <SanityMuxPlayer
                    assetDocument={props.video.asset}
                    autoload={true}
                    height={"100%"}
                    width={"100%"}
                    autoplay={true}
                    loop={true}
                    muted={true}
                    showControls={false}
                />
            );
        }
    };

    return (
        <figure className={style.figure} key={props._key} ref={ref}>
            <figcaption className={style.figcaption}>
                <div className={style.name}>{props.title}</div>
                <div className={style.materials}>{props.materials}</div>
                <div className={style.dimensions}>{props.dimensions}</div>
                <div className={style.year}>{props.date}</div>
            </figcaption>
            <div className={style.image}>
                <div className={style[props.size]}>
                    <RenderVideo />
                </div>
            </div>
        </figure>
    );
});

export default Vid;
