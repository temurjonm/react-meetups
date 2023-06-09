import {Link} from "react-router-dom";

import classes from './MainNavigation.module.css'
import {useContext} from "react";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
    const favoriteContext = useContext(FavoritesContext)
    return <header className={classes.header}>
        <div>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Add New Meetups</Link>
                </li>
                <li>
                    <Link to='/favorites'>
                        My favorites
                        <span className={classes.badge}>{favoriteContext.totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;
