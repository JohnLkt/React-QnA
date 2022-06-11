import React from "react";
import { Link } from "react-router-dom";

const Layout = ({children}) => (
    <React.Fragment>
        <header className="layout__header">
            <span className="layout__brand">QnA</span>
            <nav className="layout__header__nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/add">Add Question</Link>
            </nav>
        </header>
        <main className="layout__container">{children}</main>
    </React.Fragment>
)

export default Layout;