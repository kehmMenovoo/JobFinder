import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Job = ({item}) => {

    const shrink = (str, length) => {
        if(str.length > length) {
            str = str.slice(0, length) + "..."
        }

        return str;
    }
    const toTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <motion.article layout className="col-sm-6 col-md-4 col-12 col-lg-3 mb-3">
            <div className="card text-dark mb-3">
                <Link to={`/jobinfo/${item.id}`} onClick={toTop}>
                    <div className="card-header">
                        <div className="row g-0">
                            <div className="col-4">
                                <img src={item.avatar} alt="item" width="212px" height="111px" className="img-fluid rounded-start" />
                            </div>
                            <div className="col-8">
                                <div className="card-body">
                                    <h5 className="card-title">{shrink(item.company, 19)}</h5>
                                    <p className="card-text area"><span className="iconify" data-icon="entypo:location"></span> {shrink(item.location, 11)}</p>
                                    <p className="card-text date"><small className="text-muted">Due: {item.due}</small></p>
                                    {item.boost ? (<small className="pop" style={{color: "#33cc33"}}>(Popular)</small>) : null} 
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">We're looking for:</h5>
                        <p className="card-text">{shrink(item.position, 56)}</p>
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
        </motion.article>   
        
    )
}

export default Job
