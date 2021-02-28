import React from "react"
import footerStyle from "./footer.module.css"

const Bio = props => (
    <div className={footerStyle.bio}>
        <div>{props.name}</div>
        <div>{props.occupation}</div>
        <div>{props.location}</div>
        <div>{props.dob}</div>
        <div className={footerStyle.plus}>{props.icon}</div>
    </div>
)

const About = props => (
    <>
        <div>{props.title}</div>
        <div>{props.type}</div>
        <div>{props.location}</div>
        <div>{props.date}</div>
    </>
)

const Contact = props => (
    <div className={footerStyle.contact}>
        <div>{props.email}</div>
        <div>{props.social1}</div>
        <div>{props.social2}</div>
        <div>{props.social3}</div>
    </div>
)

export default function Footer() {
    return (
    <footer className={footerStyle}>
        <Bio
            name="Hamish Pearch"
            occupation="Sculptor"
            location="London"
            dob="b.1996"
            icon="&#10005;"
        />
        <div className={footerStyle.about}>
            <About
                title="Artnet"
                type="Press"
                location="We’ve Changed Everything This Year"
                date="2020"
            />
            <Contact
                email="Email"
                social1="Instagram"
            />
        </div>
    </footer>)
}