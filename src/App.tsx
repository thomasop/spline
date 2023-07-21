import "./global.css";
import Spline from "@splinetool/react-spline";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
        <div style={{ width: "300px", height: "300px" }}>
        <Spline scene="https://prod.spline.design/F2mvwDTtOCAaSwPi/scene.splinecode" />

        </div>
    </>
  );
};

export default App;
