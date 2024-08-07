import styles from "./container.module.css";

function Container({ children, style }) {
  return (
    <section className={styles.container} style={style}>
      {children}
    </section>
  );
}

export default Container;
