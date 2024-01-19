import { Suspense, lazy, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import Layout from "./components/Layout";

const Home = lazy(() => import('./pages/1.Home'));
const Projects = lazy(() => import("./pages/2.Projects"));
const Contacts = lazy(() => import("./pages/3.Contacts"));

function App() {
  const [lang, setLang] = useState('en')

  const funcChangeLanguage = (evt) => {           
    const currentLang = evt.currentTarget.value
    setLang(currentLang);
  }
  console.log("render");
  return (    
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout lang={lang} funcChangeLanguage={funcChangeLanguage}/>}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects lang={lang}/>} />
          <Route path="contacts" element={<Contacts lang={lang}/>} />
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
