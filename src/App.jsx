import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/1.Home"));
const Projects = lazy(() => import("./pages/2.Projects"));
const Contacts = lazy(() => import("./pages/3.Contacts"));

function App() {
  
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
