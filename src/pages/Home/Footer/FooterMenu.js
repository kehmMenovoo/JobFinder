
const FooterMenu = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="f-contact col-md-3 col-sm-4 ">
                            <h5>Contact</h5>
                            <p>
                                <span className="iconify" data-icon="foundation:telephone"></span>
                                 <span> +855 123 456 789</span>
                            </p>
                            <p>
                                <span className="iconify" data-icon="bx:bxs-envelope"></span>
                                 <span> khomrok@gmail.com</span>
                            </p>
                        </div>

                        <div className="f-menu col-md-3 col-sm-4 ">
                            <h5>job seekers</h5>
                            <p>
                                <a href="/jobtype">Discover Job Types</a>
                            </p>
                        </div>

                        <div className="f-menu col-md-3 col-sm-4 ">
                            <h5>employers</h5>
                            <p>
                                <a href="/post">Post a Job</a>
                            </p>
                            <p>
                                <a href="#">Browe Freelancer</a>
                            </p>
                            <p>
                                <a href="#">Post a Project</a>
                            </p>
                        </div>

                        <div className="f-menu col-md-3 col-sm-4 ">
                            <h5>Social Media</h5>
                            <p>
                                <a href="#" target="_blank">Facebook Page</a>
                            </p>
                            <p>
                                <a href="#">LinkedIn</a>
                            </p>
                            <p>
                                <a href="#">Twitter</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterMenu
