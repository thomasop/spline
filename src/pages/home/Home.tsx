import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "../../global.css";
import styles from "./Home.module.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import WorkPhp from "../../components/work/php/WorkPhp";
import WorkPerso from "../../components/work/perso/WorkPerso";
import WorkClient from "../../components/work/client/WorkClient";
import WorkReact from "../../components/work/react/WorkReact";
import Contact from "../../components/contact/Contact";
import Spline from "@splinetool/react-spline";

const App = () => {
  return (
    <>
      <div className="container">

         <Spline style={{ width: "100%", height: "100%" }} scene="https://prod.spline.design/U2-xZhvLjaw3Y7dg/scene.splinecode" />
      </div>
    </>
  );
};

export default App;
