import styles from "./modal.module.css";

function Modal({ header, closeModal, children }) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p>{header}</p>
        </div>
        <div className={styles.body}>{children}</div>
        <div className={styles.footer}>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
