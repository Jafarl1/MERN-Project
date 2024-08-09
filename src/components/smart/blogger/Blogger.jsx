import { Link } from "react-router-dom";
import styles from "./blogger.module.css";

function Blogger({ blogger }) {
  return (
    <Link to={`/${blogger.id}/places`} className={styles.blogger}>
      <img src={blogger.image} alt="Blogger photo" />
      <div className={styles.info}>
        <h2>{blogger.name}</h2>
        <h3>
          {blogger.places} {blogger.places > 1 ? "places" : "place"} visited
        </h3>
      </div>
    </Link>
  );
}

export default Blogger;
