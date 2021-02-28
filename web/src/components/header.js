import React from "react"
import headerStyle from "./header.module.css"

export default function Header() {
    return (
    <header className={headerStyle}>
        <div>Title</div>
        <div>Details</div>
        <div>Year</div>
    </header>)
}