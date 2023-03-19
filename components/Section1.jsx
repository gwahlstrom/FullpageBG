import styles from "./Section1.module.css";

function Section1(props) {
  return (
    <>
      <main className={styles.main} id="sec1">
        <div className={styles.container}>
          <div className={styles.mainText}>
            <h1 className={styles.mainTexth1}>Welcome</h1>
          </div>
        </div>
      </main>
    </>
  );
}

export default Section1;
