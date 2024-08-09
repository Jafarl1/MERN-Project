import styles from "./place.module.css";

function Place({ place }) {
  console.log(place);

  return (
    <div className={styles.place}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${place.image})` }}
      />
      <div className={styles.info}>
        <h2>{place.title}</h2>
        <h3>{place.description}</h3>
        <h4>{place.address}</h4>
      </div>
    </div>
  );
}

export default Place;
