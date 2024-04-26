import React from "react";

import { footerText } from "../constants";

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <h2 className="footer__text">
                    <div>webstoryboy</div>
                    <div>@webs</div>
                </h2>
                <div className="footer__info">
                    <div className="left">
                        <div className="title">
                            <a href="/">sign up</a>
                        </div>
                        <p className="desc"></p>
                    </div>
                    <div className="right">
                        <h3>social</h3>
                    </div>
                </div>
                <div className="footer__right">
                    &copy; 2024 <br />
                </div>
            </div>
        </footer>
    )
}

export default Footer;