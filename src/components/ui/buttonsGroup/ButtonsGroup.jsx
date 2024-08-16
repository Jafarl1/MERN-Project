import styles from "./buttonsGroup.module.css";

function ButtonGroup({ isValid, button1, button2 }) {
  return (
    <div className={styles.btnGroup}>
      <button type="reset" className={styles.reset}>
        {button1}
      </button>
      <button type="submit" className={styles.submit} disabled={!isValid}>
        {button2}
      </button>
    </div>
  );
}

export default ButtonGroup;
