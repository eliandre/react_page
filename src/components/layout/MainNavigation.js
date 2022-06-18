import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoritesContex from '../../store/favorites-contex';

function MainNavigation() {

    const favoritesCtx = useContext(FavoritesContex)

    return (
        <header className={classes.header}>
            <div className={classes.logo}>Piimajoojate kohtumised</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Kõik kohtumised</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">Uus kohtumine</Link>
                    </li>
                    <li>
                        <Link to="/favorites">
                            Lemmikud
                            <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;