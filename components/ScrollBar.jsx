import styles from "./ScrollBar.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

function ScrollBar() {
  const [active, setActive] = useState("scrollButton1");

  const clickHandler = (e) => {
    if (e === "scrollButton1") {
      const nextSection = document.getElementById("sec1");
      nextSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
      setActive(e);
    } else if (e === "scrollButton2") {
      const nextSection = document.getElementById("sec2");
      nextSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
      setActive(e);
    } else if (e === "scrollButton3") {
      const nextSection = document.getElementById("sec3");
      nextSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
      setActive(e);
    } else if (e === "scrollButton4") {
      const nextSection = document.getElementById("sec4");
      nextSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
      setActive(e);
    }
  };

  useEffect(() => {
    const thisSection = document.getElementById(active);
    console.log(thisSection);
  }, [active]);

  return (
    <>
      <div className={styles.container}>
        <ul>
          <li onClick={(e) => clickHandler(e.target.id)}>
            <Image
              src="/images/circle-fill.svg"
              height={8}
              width={8}
              alt="Scroll icon"
              id="scrollButton1"
            />
          </li>
          <li onClick={(e) => clickHandler(e.target.id)}>
            <Image
              src="/images/circle-fill.svg"
              height={8}
              width={8}
              alt="Scroll icon"
              id="scrollButton2"
            />
          </li>
          <li onClick={(e) => clickHandler(e.target.id)}>
            <Image
              src="/images/circle-fill.svg"
              height={8}
              width={8}
              alt="Scroll icon"
              id="scrollButton3"
            />
          </li>
          <li onClick={(e) => clickHandler(e.target.id)}>
            <Image
              src="/images/circle-fill.svg"
              height={8}
              width={8}
              alt="Scroll icon"
              id="scrollButton4"
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default ScrollBar;
