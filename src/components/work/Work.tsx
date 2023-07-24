import React from "react";
import { Tilt } from "react-tilt";
import styles from "./Work.module.scss";
import { useSelector } from "react-redux";
const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 50, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.3, // 2 = 200%, 1.5 = 150%, etc..
  speed: 2000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

interface WorkProps {
  imageName: string;
}

const Work = ({ imageName }: WorkProps) => {
  const { mode } = useSelector((state: any) => state.mode);
  return (
    <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <img
        className={`${
          mode === "dark" ? styles.card__dark : styles.card__light
        } ${styles.card}`}
        src={`../assets/img/${imageName}`}
        alt=""
      />
    </Tilt>
  );
};

export default Work;
