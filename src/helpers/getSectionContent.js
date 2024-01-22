import allContent from "../data/allContent.js";

function getTranslatedData(data, lang) {
  let translatedData = {};
  for (const key in data) {
    const isObject = !Array.isArray(data[key]) && typeof data[key] !== "string";

    isObject && (translatedData[key] = data[key][lang]);

    typeof data[key] === "string" && (translatedData[key] = data[key]);

    Array.isArray(data[key]) &&
      (translatedData[key] = data[key].map((item) => {
        // let newItem = {};
        // for (const key in item) {
        //   const isObject =
        //     !Array.isArray(item[key]) && typeof item[key] !== "string";

        //   isObject && (newItem[key] = item[key][lang]);

        //   typeof item[key] === "string" && (newItem[key] = item[key]);
        // }
        return typeof item === "string" ? item : getTranslatedData(item, lang);
      }));
  }
  // console.log("translatedData: ", translatedData);
  return translatedData;
}

export default function getSectionContent(lang, sectionName) {
  const dataSection = allContent[sectionName];

  let translatedContent = getTranslatedData(dataSection, lang);
  // let translatedContent = {};

  // for (const key in dataSection) {
  //   const isObject =
  //     !Array.isArray(dataSection[key]) && typeof dataSection[key] !== "string";

  //   isObject && (translatedContent[key] = dataSection[key][lang]);

  //   typeof dataSection[key] === "string" &&
  //     (translatedContent[key] = dataSection[key]);

  //   Array.isArray(dataSection[key]) &&
  //     (translatedContent[key] = dataSection[key].map((item) => {
  //       let newItem = {};
  //       for (const key in item) {
  //         const isObject =
  //           !Array.isArray(item[key]) && typeof item[key] !== "string";

  //         isObject && (newItem[key] = item[key][lang]);

  //         typeof item[key] === "string" && (newItem[key] = item[key]);
  //       }
  //       return newItem;
  //     }));
  // }
  // console.log("translatedContent: ", translatedContent);
  return translatedContent;
}
