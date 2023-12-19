import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Layout from "./components/Layout";

//import Home from "./pages/1.Home/Home";

const Home = lazy(() => import('./pages/1.Home'));
const About = lazy(() => import("./pages/2.About"));

function App() {
  return (
    // <Home/>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
