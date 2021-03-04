import React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <table>
                <tbody>{children}</tbody>
            </table>
            <Footer />
        </>
    );
}

export default Layout