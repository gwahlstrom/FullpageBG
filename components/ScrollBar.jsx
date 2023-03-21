import styles from "./ScrollBar.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

function ScrollBar() {
  const [active, setActive] = useState(1);

  const clickHandler = (e) => {
    if (e === "1") {
      const nextSection = document.getElementById("sec1");
      nextSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
      setActive(1);
    } else if (e === "2") {
      const nextSection = document.getElementById("sec2");
      nextSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
      setActive(2);
    } else if (e === "3") {
      const nextSection = document.getElementById("sec3");
      nextSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
      setActive(3);
    } else if (e === "4") {
      const nextSection = document.getElementById("sec4");
      nextSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
      setActive(4);
    }
  };
  const liArr = [1, 2, 3, 4];

  useEffect(() => {
    setActive(1);
  }, []);

  const myLiMapping = liArr.map((item, index) => {
    return (
      <li key={index} onClick={(e) => clickHandler(e.target.id)}>
        <Image
          src="/images/circle-fill.svg"
          height={8}
          width={8}
          alt="Scroll icon"
          id={item}
          className={active === item ? styles.active : styles.notActive}
        />
      </li>
    );
  });

  return (
    <>
      <div className={styles.container}>
        <ul>
          {myLiMapping}
          {/* {liArr.map((item, index) => {
            return (
              <li key={index} onClick={(e) => clickHandler(e.target.id)}>
                <Image
                  src="/images/circle-fill.svg"
                  height={8}
                  width={8}
                  alt="Scroll icon"
                  id={item}
                  className={active === item ? styles.active : styles.notActive}
                />
              </li>
            );
          })} */}
          {/* <li onClick={(e) => clickHandler(e.target.id)}>
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
          </li> */}
        </ul>
      </div>
    </>
  );
}

export default ScrollBar;
