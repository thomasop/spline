import ReactDOM from "react-dom/client";
import "./global.css";
import App from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Work from "./pages/work/Work";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
