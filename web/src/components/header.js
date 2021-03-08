import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Container = styled.header`
    position: fixed;
    width: calc(100% - (var(--padding)) * 2);
    margin: var(--padding);
    z-index: 99;
    display: grid;
    grid-template-columns: var(--three-column);

    visibility: hidden;
`;

const Header = () => {
    let header = useRef(null);

    useEffect(() => {
        gsap.to(header, {
            autoAlpha: 1,
            duration: 2
        });
    });

    return (
        <Container ref={(el) => (header = el)}>
            <div>Title</div>
            <div>Details</div>
            <div>Year</div>
        </Container>
    );
};

export default Header;
