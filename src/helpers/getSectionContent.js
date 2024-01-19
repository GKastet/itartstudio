import { textsServices } from "../helpers/texts";
import { textsTest1 } from "../helpers/texts";

export default function getSectionContent(lang, name) {
  //   console.log(textsServices);

  const data = textsTest1[name];

  console.log("data: ", data);
  let translatedContent = {};
  for (const key in textsServices) {
    !Array.isArray(textsServices[key]) &&
      typeof textsServices[key] !== "string" &&
      (translatedContent[key] = textsServices[key][lang]);
    typeof textsServices[key] === "string" &&
      (translatedContent[key] = textsServices[key]);
    console.log(typeof textsServices[key]);
  }
  // console.log("translatedContent: ", translatedContent);
  return translatedContent;
}
