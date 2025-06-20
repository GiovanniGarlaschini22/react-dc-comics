// IMPORT //
import style from "./AppHeader.module.css";

function AppHeader() {
    return (
        <header className={style.header}>
            <img src="/dc-logo.png" alt="logo-header-dc" />
            <nav>
                <ul>
                    <li>
                        <a href="">characters</a>
                    </li>
                    <li>
                        <a href="">comics</a>
                    </li>
                    <li>
                        <a href="">movies</a>
                    </li>
                    <li>
                        <a href="">tv</a>
                    </li>
                    <li>
                        <a href="">games</a>
                    </li>
                    <li>
                        <a href="">collectibles</a>
                    </li>
                    <li>
                        <a href="">videos</a>
                    </li>
                    <li>
                        <a href="">fans</a>
                    </li>
                    <li>
                        <a href="">news</a>
                    </li>
                    <li>
                        <a href="">shop</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default AppHeader;