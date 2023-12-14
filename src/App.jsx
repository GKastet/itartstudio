import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/1.Home/Home"));
const About = lazy(() => import("./pages/2.About/About"));
console.log('About: ', About);


function App() {
  return (    
    <Suspense fallback={<Loader />}>
       <Routes>
         <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="about" element={<About />} />
           <Route path="*" element={<Navigate to="/" />}></Route>
         </Route>
       </Routes>
     </Suspense>
  );
}

export default App;
