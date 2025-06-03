// IMPORT //
import styles from './AppMain.module.css';

function AppMain() {
    return (
        <main className={styles.main}>

            <div className={styles.blackBar}>
            </div>


            <div className={styles.blueBar}>
                <div className={styles.iconBox}>
                    <img src="/public/buy-comics-digital-comics.png" alt="Digital Comics" />
                    <span>DIGITAL COMICS</span>
                </div>
                <div className={styles.iconBox}>
                    <img src="/public/buy-comics-merchandise.png" alt="DC Merchandise" />
                    <span>DC MERCHANDISE</span>
                </div>
                <div className={styles.iconBox}>
                    <img src="/public/buy-comics-subscriptions.png" alt="Subscription" />
                    <span>SUBSCRIPTION</span>
                </div>
                <div className={styles.iconBox}>
                    <img src="/public/buy-comics-shop-locator.png" alt="Comic Shop Locator" />
                    <span>COMIC SHOP LOCATOR</span>
                </div>
                <div className={styles.iconBox}>
                    <img src="/public/buy-dc-power-visa.svg" alt="DC Power Visa" />
                    <span>DC POWER VISA</span>
                </div>
            </div>
        </main>
    );
};

export default AppMain;