import React, { useState } from "react";
import Header from "../components/header";
import Project from "../components/project";
import Footer from "../components/footer";

const Home = () => {
    // const [count, setCount] = useState(0);
    // const increment = () => {
    //     setCount(count + 1);
    //     console.log(count)
    // };

        const [state, setState] = useState(0);

        // const handleProject = () => {
        //     setState(state + 1);
        //     console.log(state);
        // };

    return (
        <>
            <Header />
            <Project setState={setState} />
            {/* <Project onClick={increment} count={count} /> */}
            <Footer />
        </>
    );
};

export default Home;
