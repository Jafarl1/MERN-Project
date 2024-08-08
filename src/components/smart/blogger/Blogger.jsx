import styles from "./blogger.module.css";

function Blogger({ blogger }) {
  return (
    <div className={styles.blogger}>
      <img src={blogger.image} alt="Blogger photo" />
      <div className={styles.info}>
        <h2>{blogger.name}</h2>
        <h3>
          {blogger.places} {blogger.places > 1 ? "places" : "place"} visited
        </h3>
      </div>
    </div>
  );
}

export default Blogger;
