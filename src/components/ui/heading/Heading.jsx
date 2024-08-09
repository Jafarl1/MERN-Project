import { Link } from "react-router-dom";
import styles from "./heading.module.css";

function Heading({ track }) {
  console.log(track);

  return (
    <div className={styles.heading}>
      {track &&
        track.map((item) => (
          <Link to={item.to} key={item.to}>
            {item.title}
          </Link>
        ))}
    </div>
  );
}

export default Heading;
