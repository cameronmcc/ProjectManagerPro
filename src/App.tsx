import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appbar from "./components/Appbar";

function App() {
  return (
    <>
      <div>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default WrappedApp;
