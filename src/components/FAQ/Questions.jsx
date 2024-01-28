import { useState } from "react";
import { ButtonPlus, ItemQuestion, Line, ListQuestions, ParagraphQuestion, Plus, SectionQuestion, TitleFAQs, TitleQuestion, Wrapper } from "./Questions";
import { useLang } from "../../langContext";
import getSectionContent from "../../helpers/getSectionContent";

const Questions = () => {
  const [answerVisible, setAnswerVisible] = useState(false);
  const { lang } = useLang();
  const { questions, answers } = getSectionContent(lang, "faq");

  return (
    <SectionQuestion>
      <TitleFAQs>FAQs</TitleFAQs>
      <ListQuestions>
        {questions.map((question, index) => (
          <ItemQuestion key={index}>
            <Wrapper>
              <TitleQuestion>{question}</TitleQuestion>
              <ButtonPlus onClick={() => setAnswerVisible(index)}>
                <Plus />
              </ButtonPlus>
            </Wrapper>
            {answerVisible === index && (
              <ParagraphQuestion>{answers[index]}</ParagraphQuestion>
            )}
            <Line/>
          </ItemQuestion>
        ))}
      </ListQuestions>
    </SectionQuestion>
  );
};

export default Questions;
