import { Suspense, lazy, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Layout from "./components/Layout";

//import Home from "./pages/1.Home/Home";

const Home = lazy(() => import("./pages/1.Home"));
const Projects = lazy(() => import("./pages/2.Projects"));
const Contacts = lazy(() => import("./pages/3.Contacts"));

function App() {
  const [lang, setLang] = useState("ua");

  const funcChangeLanguage = (evt) => {
    const currentLang = evt.currentTarget.value.toLowerCase();
    setLang(currentLang);
  };
  return (
    // <Home/>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout lang={lang} funcChangeLanguage={funcChangeLanguage} />
          }
        >
          <Route index element={<Home lang={lang} />} />
          <Route path="projects" element={<Projects lang={lang} />} />
          <Route path="contacts" element={<Contacts lang={lang} />} />
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
