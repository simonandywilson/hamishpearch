import React from "react"
import styled from "styled-components"

const Container = styled.header`
    position: fixed;
    width: 100%;
    padding: var(--padding);
    z-index: 99;
    display: grid;
    grid-template-columns: var(--three-column);
`;

const Header = () => {
    return (
        <Container>
            <div>Title</div>
            <div>Details</div>
            <div>Year</div>
        </Container>
    );
}

export default Header
