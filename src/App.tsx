import "./global.css";
import Spline from "@splinetool/react-spline";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Spline scene="https://prod.spline.design/F2mvwDTtOCAaSwPi/scene.splinecode" />
    </>
  );
};

export default App;
