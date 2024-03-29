import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default class Header extends React.Component {
    render() {
        return (
            <Router>
                <header className="header">
                    <div className="wrapper">
                        <h1 className="logo">Plan <span>your food</span></h1>
                        <nav className="header__nav">
                            <ul className="header__nav__list">
                                <li className="header__nav__list__el header__nav__list__el-app">
                                    <Link to="/app">Plan your meals!</Link>
                                </li>
                                <li className="header__nav__list__el">
                                    <HashLink
                                        to="/#dlaczegowarto"
                                        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                                    >Why?</HashLink>
                                </li>
                                <li className="header__nav__list__el">
                                    <HashLink
                                        to="/#omnie"
                                        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                                    >About</HashLink>
                                </li>
                                <li className="header__nav__list__el">
                                    <HashLink
                                        to="/#kontakt"
                                        scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                                    >Contact</HashLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </Router>
        )
    }
}