import styles from "./NavBar.module.css";

function NavBar() {
  const clickHandler = (e) => {
    if (e === "Fullpage BG") {
      const nextSection = document.getElementById("sec1");
      nextSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    } else if (e === "Part 2") {
      const nextSection = document.getElementById("sec2");
      nextSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    } else if (e === "Part 3") {
      const nextSection = document.getElementById("sec3");
      nextSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    } else if (e === "Contact") {
      const nextSection = document.getElementById("sec4");
      nextSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
  };
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.background}></div>
        <div className={styles.foreground}>
          <div className={styles.navText}>
            <h3 onClick={(e) => clickHandler(e.target.textContent)}>Fullpage BG</h3>
            <ul className={styles.ul}>
              <li onClick={(e) => clickHandler(e.target.textContent)}>Part 2</li>
              <li onClick={(e) => clickHandler(e.target.textContent)}>Part 3</li>
              <li onClick={(e) => clickHandler(e.target.textContent)}>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
