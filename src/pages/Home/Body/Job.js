import { Link } from 'react-router-dom';

const Job = ({item}) => {

    return (
        <article className="col-sm-6 col-md-4 col-12 col-lg-3 mb-3">
            <div className="card text-dark mb-3">
                <Link to={`/jobinfo/${item.id}`}>
                    <div className="card-header">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={item.avatar} alt="item" width="212px" height="111px" className="img-fluid rounded-start" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.company}</h5>
                                    <p className="card-text area"><span className="iconify" data-icon="entypo:location"></span> {item.location}</p>
                                    <p className="card-text date"><small className="text-muted">Due: {item.due}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">We are looking for:</h5>
                        <p className="card-text">{item.position}</p>
                    </div>
                </Link>
                <div className="card-footer">
                    <div className="content">
                        <div className="apply">
                            <form>
                                <button type="submit">
                                    <span class="iconify" data-icon="bi:send-check"></span>
                                    <span class="iconify" data-icon="bi:send-check-fill"></span>
                                </button>
                            </form>
                        </div>
                        <div className="add-fav">
                            <form>
                                <button>
                                    <span className="iconify" data-icon="ant-design:heart-outlined"></span>
                                    <span className="iconify" data-icon="ant-design:heart-filled"></span>
                                </button>
                            </form>
                        </div>
                        <div className="share-job">
                            <form>
                                <button>
                                    <span className="iconify" data-icon="fluent:share-28-regular"></span>
                                    <span className="iconify" data-icon="fluent:share-48-filled"></span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </article>   
        
    )
}

export default Job
