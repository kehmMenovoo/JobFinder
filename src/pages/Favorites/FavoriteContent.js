import React, { useState } from 'react'
import ContentItems from './ContentItems';
import Copyright from "../Home/Footer/Copyright";
import FooterMenu from "../Home/Footer/FooterMenu";

const FavoriteContent = () => {

    const [toggleClass, setToggleClass] = useState(false);

    const showMenu = () => {
        setToggleClass(!toggleClass);
    }

    return (
        <div className='favorites'>
            <div className="sidebar">
                <div className="card text-dark mb-3">
                    <div className="card-header">
                        <><h3>Favorites</h3></>
                        <div onClick={showMenu}>
                            <span class="iconify" data-icon="entypo:menu"></span>
                        </div>
                    </div>
                    <div className={toggleClass ? "card-body active":"card-body"}>
                        <form>
                            <div className="tools">
                                <select name="filter" className="filter">
                                    <option value="oldest">Oldest</option>
                                    <option value="newest">Newest</option>
                                </select>
                                <label className="remove">
                                    <span class="iconify" data-icon="dashicons:trash"></span>
                                </label>
                            </div>
                            <div className="find-fav">
                                <label className="find">
                                    <span class="iconify" data-icon="bx:bx-search-alt-2"></span>
                                </label>
                                <br />
                                <input type="text" placeholder="Find..." />
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>

            <div className="fav-items-content">
                <ContentItems />
                <FooterMenu />
                <Copyright />
            </div>
        </div>
    )
}

export default FavoriteContent;