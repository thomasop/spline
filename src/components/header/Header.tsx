import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const { mode } = useSelector((state: any) => state.mode);
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.header__nav}>
          <ul className={styles.header__nav__ul}>
            <li className={styles.header__nav__ul__li}>
              <Link
                className={`${
                  mode === "dark"
                    ? styles.header__nav__ul__li__a__dark
                    : styles.header__nav__ul__li__a__light
                } ${styles.header__nav__ul__li__a}`}
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li className={styles.header__nav__ul__li}>
              <Link
                className={`${
                  mode === "dark"
                    ? styles.header__nav__ul__li__a__dark
                    : styles.header__nav__ul__li__a__light
                } ${styles.header__nav__ul__li__a}`}
                to={"/"}
              >
                About Me
              </Link>
            </li>
            <li className={styles.header__nav__ul__li}>
              <Link
                className={`${
                  mode === "dark"
                    ? styles.header__nav__ul__li__a__dark
                    : styles.header__nav__ul__li__a__light
                } ${styles.header__nav__ul__li__a}`}
                to={"/"}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
