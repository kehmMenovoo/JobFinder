import Copyright from "../Home/Footer/Copyright";
import FooterMenu from "../Home/Footer/FooterMenu";

const About = () => {
    return (
        <div className="term-of-use">
            <div className="term-sheet">
                <div className="title-term">
                    <h3>About</h3>
                    <hr />
                </div>
                <div className="text-content-sheet">
                    <h5>About Khom Rok</h5><br />
                    <p>Khom Rok was established by four students from Management Information System (MIS) and Computer Science (CS).</p>
                    <p>Khom Rok is a professional Job site & HR recruitment agency based in Cambodia. We are recognized in Cambodia for our ability to search and hunt the highest profiles for CEO, Managing Director, and middle management, and other senior positions.</p>
                    <p>Khom Rok boosts the career potential of qualified candidates who are experienced in our specialty industries. We are dedicated to finding great combinations of talented individuals and dynamic companies, where both can grow and benefit together.</p>
                    <p>--------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                    <p>Khan Tuol Kouk, Phnom Penh, Cambodia</p>
                    <p>Tel: 0123456789</p>
                    <p>Email: <a href="#">khomrok@gmail.com</a></p>
                </div>
            </div>

            <FooterMenu />
            <Copyright />
        </div>
    )
}

export default About;
