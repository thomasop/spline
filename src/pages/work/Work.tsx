import React from 'react'
import styles from "../home/Home.module.scss";
import { motion, useScroll, useSpring } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import WorkClient from '../../components/work/client/WorkClient';
import WorkPerso from '../../components/work/perso/WorkPerso';
import WorkPhp from '../../components/work/php/WorkPhp';
import WorkReact from '../../components/work/react/WorkReact';

const Work = () => {
    const { mode } = useSelector((state: any) => state.mode);
  const { work } = useSelector((state: any) => state.work);
  const dispatch = useDispatch();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
     <div className={`${
          mode === "dark" ? styles.container__dark : styles.container__light
        }`}
      ></div>
    <motion.div style={{ scaleX }} className="progress-bar"></motion.div>
        <Header />
          <h1
            className={`${
              mode === "dark" ? styles.home__h1__dark : styles.home__h1__light
            } ${styles.home__h1}`}
          >
            Work
          </h1>
          <div className={styles.home__work}>
            <button
              className={`${
                work === "php" ? styles.home__work__btn__current : null
              } ${styles.home__work__btn}`}
              onClick={() => {
                dispatch({ type: "work/changeWork", payload: { work: "php" } });
              }}
            >
              Projet OC PHP/symfony
            </button>
            <button
              className={`${
                work === "react" ? styles.home__work__btn__current : null
              } ${styles.home__work__btn}`}
              onClick={() => {
                dispatch({
                  type: "work/changeWork",
                  payload: { work: "react" },
                });
              }}
            >
              Projet OC React
            </button>
            <button
              className={`${
                work === "perso" ? styles.home__work__btn__current : null
              } ${styles.home__work__btn}`}
              onClick={() => {
                dispatch({
                  type: "work/changeWork",
                  payload: { work: "perso" },
                });
              }}
            >
              Projet personnel
            </button>
            <button
              className={`${
                work === "client" ? styles.home__work__btn__current : null
              } ${styles.home__work__btn}`}
              onClick={() => {
                dispatch({
                  type: "work/changeWork",
                  payload: { work: "client" },
                });
              }}
            >
              Projet client
            </button>
            {work !== "" && (
              <button
                className={`${styles.home__work__btn} ${styles.home__work__btn__close}`}
                onClick={() => {
                  dispatch({ type: "work/closeWork" });
                }}
              >
                Fermer
              </button>
            )}
          </div>
          {work === "php" && (
            <div className={styles.home__div}>
              <WorkPhp />
            </div>
          )}
          {work === "react" && (
            <div className={styles.home__div}>
              <WorkReact />
            </div>
          )}
          {work === "client" && (
            <div className={styles.home__div}>
              <WorkClient />
            </div>
          )}
          {work === "perso" && (
            <div className={styles.home__div}>
              <WorkPerso />
            </div>
          )}
    <Footer />
    </>
  )
}

export default Work