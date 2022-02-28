import BrokenRobot from "../../images/404.png";

const Missing = () => {
    return (
        <div className="not-found">
            <div className="error-item">
                <div>
                    <img src={BrokenRobot} alt="not found" width="250px" />
                </div>
                <div className="error-message">
                    <h3>Page Not Found!</h3>
                    <p>Sorry, we couldn't find the page you were looking for. <br />
                    We suggest that you return to main sections.</p>
                    <br />

                    <div class="d-grid gap-2 d-md-block">
                        <button class="btn btn-primary" type="button">
                            <a href="/">GO TO HOMEPAGE</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Missing;
