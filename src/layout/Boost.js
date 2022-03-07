import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import JobFinder from "../images/JOBFINDER.png";

const Boost = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, []);
    const tableContent = [
        {
            period: "Posting period per job (15 days)",
            free: "N/A",
            basic: "$10",
            premium: "$20",
            top: "$50",
            basicLimit: "1 posting",
            freeLimit: "",
            premiumLimit: "1 posting"
        },
        {
            period: "Posting period per job (30 days)",
            free: "$0.00",
            basic: "$15",
            premium: "$30",
            top: "$70",
            basicLimit: "1 posting",
            freeLimit: "99 posting",
            premiumLimit: "1 posting"
        }, 
        {
            period: "Unlimited job posting for company",
            free: "N/A",
            basic: "$100",
            premium: "N/A",
            top: "N/A",
            basicLimit: "∞ posting",
            freeLimit: "",
            premiumLimit: ""
        }, 
        {
            period: "Unlimited job posting for recruitment agency",
            free: "N/A",
            basic: "$180",
            premium: "N/A",
            top: "N/A",
            basicLimit: "∞ posting",
            freeLimit: "",
            premiumLimit: ""
        },
        {
            period: "Validity of package",
            free: "30 days",
            basic: "30 days",
            premium: "30 days",
            top: "30 days",
            basicLimit: "",
            freeLimit: "",
            premiumLimit: ""
        }
        
    ]
    const toTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className="boost-job">
            {loading && (
                <div style={{width: "100%", height: "100%", position: "fixed", zIndex: "9999999", background: "white"}}>
                    <div class="d-flex justify-content-center loading" style={{display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center", height: "100%"}}>
                        <div id="loading2"> 
                            <svg width="16px" height="12px">
                                <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                                <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                            </svg>
                        </div>
                    </div>
                    
                </div>
            )}
            {!loading && (
                <>
                    <div className="side-content">
                        <div>
                            <h1>Boost now</h1>
                            <h6>You will get more offers than others</h6>
                            <h6>Your posts will become trend/popular</h6>
                        </div>
                        <div className="reserved">
                            <div className="know-us">
                                <Link to="/about" onClick={toTop}>About Us</Link> | 
                                <Link to="/privacy" onClick={toTop}> Privacy Policy</Link> |
                                <Link to="/termofuse" onClick={toTop}> Term of Use</Link>
                            </div>
                            <div className="c-right">
                                <p>Copyright 2022 <a href="/">Khom Rok</a> all rights reserved</p>
                            </div>
                        </div>
                    </div>
                    <div className="boost-content">
                        <div className="header">
                            <h3>Choose your package</h3>
                            <a href="/">
                                <img src={JobFinder} alt="job-finder" />
                            </a>
                        </div> 
                        <div className="body">
                            <table>
                                <tr>
                                    <th></th>
                                    <th>Free Package</th>
                                    <th>Basic Package</th>
                                    <th>Premium Package</th>
                                    <th>Top Package</th>
                                </tr>
                                {tableContent.map(item => (
                                    <tr>
                                        <td>{item.period}</td>
                                        <td>
                                            <span className={item.free !== "N/A" && item.free !== "30 days" ? "choice":"simple"}>
                                                {item.free !== "N/A" && item.free !== "30 days" ? <input type="radio" name="freeCost" /> : null}
                                                {item.free}
                                            </span> <br />
                                            {item.freeLimit}
                                        </td>
                                        <td>
                                            <span className={item.basic !== "N/A" && item.basic !== "30 days" ? "choice":"simple"}>
                                            {item.basic !== "N/A" && item.basic !== "30 days" ? 
                                                <input type="radio" name="basicCost" /> 
                                            : null}
                                                {item.basic}
                                            </span> <br />
                                            {item.basicLimit}
                                        </td>
                                        <td>
                                            <span className={item.premium !== "N/A" && item.premium !== "30 days" ? "choice":"simple"}>
                                                {item.premium !== "N/A" && item.premium !== "30 days" ? <input type="radio" name="premiumCost" /> : null}
                                                {item.premium}
                                            </span><br />
                                            {item.premiumLimit}
                                        </td>
                                        <td>
                                            <span className={item.top !== "N/A" && item.top !== "30 days" ? "choice":"simple"}>
                                            {item.top !== "N/A" && item.top !== "30 days" ? <input type="radio" name="topCost" /> : null}
                                                {item.top}
                                            </span> <br />
                                            {item.premiumLimit}
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td>Refresh job announcement to home page</td>
                                    <td>❌</td>
                                    <td>✔️</td>
                                    <td>✔️</td>
                                    <td>✔️</td>
                                </tr>
                                <tr>
                                    <td>Always display at home page after top</td>
                                    <td>❌</td>
                                    <td>❌</td>
                                    <td>✔️</td>
                                    <td>✔️</td>
                                </tr>
                                <tr>
                                    <td>Always display at top</td>
                                    <td>❌</td>
                                    <td>❌</td>
                                    <td>❌</td>
                                    <td>✔️</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><button>Choose</button></td>
                                    <td><button>Choose</button></td>
                                    <td><button>Choose</button></td>
                                    <td><button>Choose</button></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Boost;