import { fontSizeDetector } from "../../helpers/fontSizeDetector";
import { StyledHero } from "./Hero.styled";
import { useLang } from "../../langContext";
import ModalOrderLogic from "../Modal/ModalOrder/ModalOrderLogic/ModalOrderLogic";
import SectionDescription from "../Typography/SectionDescription/SectionDescription";
import HeroBtn from "./HeroBtn/HeroBtn";
import allContent from "../../data/allContent";
import Spline from "@splinetool/react-spline";
import { useState } from 'react';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { lang } = useLang();
  const {
    hero: { title, description, button },
  } = allContent;

  return (
    <StyledHero id="main">
      <div>
        <div>
          <div>
            <h1
              className={fontSizeDetector(
                title[lang][0],
                title["en"][0].length
              )}
            >
              {title[lang][0]}
              <span></span>
              <span></span>
              {title[lang][1]}
            </h1>
            <HeroBtn
              className={fontSizeDetector(button[lang], button["en"].length)}
              handlerModal={setIsModalOpen}
            >
              {button[lang]}
            </HeroBtn>
          </div>
          <SectionDescription
            className={fontSizeDetector(
              description[lang],
              description["en"].length
            )}
            dangerouslySetInnerHTML={{ __html: description[lang] }}
          />
        </div>
        <div>
          <Spline scene="https://prod.spline.design/RYWKcIOkNx-li9UP/scene.splinecode" />
        </div>
      </div>
      {isModalOpen && <ModalOrderLogic isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>}
    </StyledHero>
  );
};

export default Hero;
