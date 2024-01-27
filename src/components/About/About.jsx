import { StyledAbout } from "./About.styled";
import { useLang } from "../../langContext";
import { fontSizeDetector } from "../../helpers/fontSizeDetector";
import allContent from "../../data/allContent";
import image from "../../images/About@2x.webp";
import SecondaryTitle from "../Typography/SecondaryTitle/SecondaryTitle";
import SectionDescription from "../Typography/SectionDescription/SectionDescription";
import AccentText from "../Typography/AccentText/AccentText";
import { useInView } from "react-intersection-observer";

// import TickerYellow from "../Ticker/TickerYellow";

function About() {
  const { lang } = useLang();
  const {
    about: { title, description, accentText },
  } = allContent;

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <StyledAbout ref={ref} id="about">
      <div> 
        <div>
          <img src={image} alt="developer at work" className={inView ? "inView" : ""}/>
        </div>
        <div>
          <SecondaryTitle dangerouslySetInnerHTML={{ __html: title[lang]}}/>
          <SectionDescription
            className={fontSizeDetector(
              description[lang],
              description["en"].length
            )}
            dangerouslySetInnerHTML={{ __html: description[lang] }}
          />
          <ul>
            {accentText[lang].map((text, idx) => (
              <li key={idx}>
                <AccentText>{text}</AccentText>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <TickerYellow /> */}
    </StyledAbout>
  );
}

export default About;
