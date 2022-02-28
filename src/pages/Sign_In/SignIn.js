import JobFinder from "../../images/JOBFINDER.png";
import facebook from "../../images/facebook.png";
import google from "../../images/google.png";
import linkedin from "../../images/linkedin.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../../contexts/DataContext";

const SignIn = () => {

    const { history } = useContext(DataContext);

    const toTop = () => {
        window.scrollTo(0, 0);
    }
    const goBack = () => {
        history.goBack()
    }
    return (
        <div className="signIn">
            <div class="signCard card border-success mb-3">
                <div class="signInHeader card-header bg-transparent">
                    <div className="signBlank" onClick={goBack}>
                        <span className="iconify" data-icon="bi:arrow-left-short"></span>
                    </div>
                    <div className="signTitle">
                        <h3>Sign in</h3>
                    </div>
                    <div className="logoSign">
                        <img src={JobFinder} alt="JF" />
                    </div>
                </div>
                <div class="card-body">
                    <form>
                        <label>Email:</label><br />
                        <div className="signEmail" style={{marginBottom: "10px"}}>
                            <span className="iconify" data-icon="akar-icons:envelope"></span>
                            <input type="email" required pattern=".+@gmail\.com" placeholder="Email..." />
                        </div>

                        <label>Password:</label><br />
                        <div className="signEmail">
                            <span class="iconify" data-icon="bx:lock"></span>
                            <input type="password" required placeholder="Password..." minLength={8} />
                        </div>
                        <label style={{color: "gray", fontSize: "12px"}}>Forgot password?</label>
                        <br /><br />
                        <div className="log">
                            <button>Create Account</button>
                            <button>Log in</button>
                        </div>
                    </form>
                </div>
                <div class="card-footer bg-transparent">
                    <div className="otherWays">
                        <div className="other-sub">
                            <p>Or</p>
                            <p>Log in with:</p>
                        </div>
                    </div>
                    <div className="socialMedia">
                        <Link><img src={google} alt="google" /></Link>
                        <Link><img src={facebook} alt="facebook" /></Link>
                        <Link><img src={linkedin} alt="linkedin" /></Link>
                    </div>
                    <div className="container">
                        <div className="know-us">
                            <Link to="/about" onClick={toTop}>About Us</Link> | 
                            <Link to="/privacy" onClick={toTop}> Privacy Policy</Link> |
                            <Link to="/termofuse" onClick={toTop}> Term of Use</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
