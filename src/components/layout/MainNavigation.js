import { Link } from 'react-router-dom';

function MainNavigation() {
    return <header>
        <div>Piimajoojate kohtumised</div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Kõik kohtumised</Link>
                </li>
                <li>
                    <Link to="/new-meetup">Uus kohtumine</Link>
                </li>
                <li>
                    <Link to="/favorites">Lemmikud</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;