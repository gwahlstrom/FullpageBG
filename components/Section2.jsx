import styles from "./Section2.module.css";

function Section2(props) {
  return (
    <>
      <main className={styles.main} id="sec2">
        <div className={styles.container}>
          <div className={styles.mainText}>
            <h1 className={styles.mainTexth1}>Part 2</h1>
          </div>
        </div>
      </main>
    </>
  );
}

export default Section2;
