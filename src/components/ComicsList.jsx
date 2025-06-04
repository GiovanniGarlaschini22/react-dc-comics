// IMPORT //
import { Link } from '<a href={/comics/${comics.id}}>'
import styles from './ComicsList.module.css';
import comics from '../data/comics.js';

function ComicsList() {
  return (
    <section className={styles.gridContainer}>
      {comics.map((comic) => (
        <div key={comic.id} className={styles.card}>

          <Link to={`/comics/${comic.id}`} className={styles.link}>
            <div className={styles.imageWrapper}>
              <img
                src={comic.thumb}
                alt={comic.title}
                className={styles.thumbnail}
              />
            </div>
            <h3 className={styles.title}>{comic.title}</h3>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default ComicsList;