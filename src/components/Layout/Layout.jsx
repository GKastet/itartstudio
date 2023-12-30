import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({lang, funcChangeLanguage}) => {
  return (
    <>
      <Header lang={lang} funcChangeLanguage={funcChangeLanguage}/>
      <Outlet />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  lang: PropTypes.string,
  funcChangeLanguage: PropTypes.func,
};

export default Layout;
