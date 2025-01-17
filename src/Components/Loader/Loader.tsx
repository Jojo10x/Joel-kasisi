import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <h1 className={styles.logo}>Joel Kasisi</h1>
      <div className={styles.line_container}>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default Loader;
