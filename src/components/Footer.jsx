import React from "react";

import { footerText } from "../constants";

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <h2 className="footer__text">
                </h2>
                <div className="footer__info">
                    <div className="left">
                        <div className="title">
                        </div>
                        <p className="desc"></p>
                    </div>
                    <div className="right">
                    </div>
                </div>
                <div className="footer__right">
                    &copy; 2024 Kummate<br />
                </div>
            </div>
        </footer>
    )
}

export default Footer;