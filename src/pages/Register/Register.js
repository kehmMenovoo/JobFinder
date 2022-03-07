import DataContext from "../../contexts/DataContext";
import JobFinder from "../../images/JOBFINDER.png";
import { Link } from "react-router-dom";
import React, { useContext, useMemo} from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

const Register = () => {
    const option = useMemo(() => countryList().getData(), []);

    const {history} = useContext(DataContext);
    const goBack = () => {
        history.goBack();
    }
    return (
        <div className="register-form" id="register-form">
            <div class="card text-dark mb-3">
                <div class="card-header">
                    <div className="signBlank" onClick={goBack}>
                        <span className="iconify" data-icon="bi:arrow-left-short"></span>
                    </div>
                    <div className="signTitle">
                        <h3>Register</h3>
                    </div>
                    <div className="logoSign">
                        <img src={JobFinder} alt="JF" />
                    </div>
                </div>
                
                <div class="card-body">                  
                    <form autoComplete="on">
                        <div className="signEmail">
                            <span className="iconify" data-icon="akar-icons:envelope"></span>
                            <input type="email" required pattern=".+@gmail\.com" placeholder="Email" />
                        </div>
                        <div className="signEmail">
                            <span class="iconify" data-icon="bx:lock"></span>
                            <input type="password" required placeholder="Password" minLength={8} />
                        </div>

                        <div className="signEmail">
                            <span class="iconify" data-icon="bx:lock"></span>
                            <input type="password" required placeholder="Confirm Password" minLength={8} />
                        </div>
                        <div className="user-name">
                            <div className="first">
                                <span class="iconify" data-icon="icon-park-outline:edit-name"></span>
                                <input type="firstname" required placeholder="First Name" />
                            </div>
                            <div className="last">
                                <span class="iconify" data-icon="icon-park-outline:edit-name"></span>
                                <input type="lastname" required placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="gender">
                            <input type="radio" name="gender" value="male" />
                            <label>Male</label>
                            <input type="radio" name="gender" value="female" />
                            <label>Female</label>
                        </div>

                        <div className="country-select">
                            <Select options={option} placeholder="Select Country" />
                        </div>
                        
                        <div className="term">
                            <input type="checkbox" />
                            <label>I agreed with <Link to="/termofuse">terms</Link> and <Link to="/privacy">conditions</Link></label><br />
                            <label>
                                <Link to="sign_in">Already have an account?</Link>
                            </label>
                        </div>

                        <div className="submit">
                            <button className="btn-register" type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
