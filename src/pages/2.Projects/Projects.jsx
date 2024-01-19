import PropTypes from "prop-types";
import { textsAbout } from "../../helpers/texts";
// import Hero from "../../components/Hero";
// import Services from "../../components/Services";
// import FeaturesList from "../../components/Features/FeaturesList/FeaturesList";

const ProjectsPage = ({ lang }) => {
  // console.log("lang: ", lang);
  const { sectionIntroduction, sectionWhereIdeaMeets } = textsAbout;
  return (
    <>
      <div
        style={{ width: "700px", height: "500px", outline: "1px solid orange" }}
      >
        <div>About</div>
        <h1>
          {lang === "eng" && sectionIntroduction.mainText.eng}
          {lang === "sk" && sectionIntroduction.mainText.sk}
          {lang === "pl" && sectionIntroduction.mainText.pl}
          {lang === "ua" && sectionIntroduction.mainText.ua}
        </h1>
        <h2>
          {lang === "eng" && sectionWhereIdeaMeets.title.eng}
          {lang === "sk" && sectionWhereIdeaMeets.title.sk}
          {lang === "pl" && sectionWhereIdeaMeets.title.pl}
          {lang === "ua" && sectionWhereIdeaMeets.title.ua}
        </h2>
        <p>
          {lang === "eng" && sectionWhereIdeaMeets.box3.eng}
          {lang === "sk" && sectionWhereIdeaMeets.box3.sk}
          {lang === "pl" && sectionWhereIdeaMeets.box3.pl}
          {lang === "ua" && sectionWhereIdeaMeets.box3.ua}
        </p>
      </div>
      {/* <Hero />
      <FeaturesList />
      <Services /> */}
    </>
  );
};

ProjectsPage.propTypes = {
  lang: PropTypes.string,
};

export default ProjectsPage;
