import { Link } from "react-router-dom";

const Copyright = () => {
    return (
        <>
            <footer className="copyright">
                <div className="container">
                    <div className="know-us">
                        <Link to="/about">About Us</Link> | 
                        <Link to="/privacy"> Privacy Policy</Link> |
                        <Link to="/termofuse"> Term of Use</Link>
                    </div>
                    <div className="c-right">
                        <p>Copyright 2022 <a href="/">Khom Rok</a> all rights reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Copyright
