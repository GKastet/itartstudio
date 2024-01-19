import PropTypes from "prop-types";

const RepeatWord = ({ word, count }) => {
    const wordsArray = new Array(count).fill(word);
    const repeatedText = wordsArray.join('  ');
  
    return (
      <>
        <p>{repeatedText}</p>
      </>
    );
  };

  RepeatWord.propTypes = {
    word: PropTypes.string,
    count: PropTypes.number,
  };

  export default RepeatWord;
  