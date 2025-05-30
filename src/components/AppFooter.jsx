// IMPORT //
import styles from './AppFooter.module.css';

function AppFooter() {
    return (
        <footer>
            {/* Top Footer */}
            <div className={styles.topFooter}>
                <div className={styles.footerColumns}>
                    <div>
                        <h4>DC COMICS</h4>
                        <ul>
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                        </ul>
                    </div>
                    <div>
                        <h4>DC</h4>
                        <ul>
                            <li>Terms Of Use</li>
                            <li>Privacy policy</li>
                            <li>Ad Choices</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscriptions</li>
                            <li>Talent Workshops</li>
                        </ul>
                    </div>
                    <div>
                        <h4>SITES</h4>
                        <ul>
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                            <li>DC Power Visa</li>
                        </ul>
                    </div>
                </div>
                <img src="/public/dc-logo-bg.png" alt="DC Logo" className={styles.bgLogo} />
            </div>

            {/* Bottom Footer */}
            <div className={styles.bottomFooter}>
                <a href="#" className={styles.signupBtn}>SIGN-UP NOW!</a>
                <div className={styles.social}>
                    <span>FOLLOW US</span>
                    <img src="/public/footer-facebook.png" alt="Facebook" />
                    <img src="/public/footer-twitter.png" alt="Twitter" />
                    <img src="/public/footer-youtube.png" alt="YouTube" />
                    <img src="/public/footer-pinterest.png" alt="Pinterest" />
                    <img src="/public/footer-periscope.png" alt="Periscope" />
                </div>
            </div>
        </footer>
    );
};

export default AppFooter;