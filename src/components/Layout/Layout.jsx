import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ lang, funcChangeLanguage }) => {
  return (
    <>
      <Header
        lang={lang}
        funcChangeLanguage={funcChangeLanguage}
        sectionName="header"
      />
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
