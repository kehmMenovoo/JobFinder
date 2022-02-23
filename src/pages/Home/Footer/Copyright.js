import { Link } from "react-router-dom";

const Copyright = () => {
    const toTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <>
            <footer className="copyright">
                <div className="container">
                    <div className="know-us">
                        <Link to="/about" onClick={toTop}>About Us</Link> | 
                        <Link to="/privacy" onClick={toTop}> Privacy Policy</Link> |
                        <Link to="/termofuse" onClick={toTop}> Term of Use</Link>
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
