import redesignImg from "../assets/images/Image (1).png";
import landingImg from "../assets/images/landing.png";
import corporateImg from "../assets/images/corporate.png";

const dataServicesCard = [
  {
    name_card: "landing",
    title_card: "Landing pages",
    img: landingImg,
    img_alt: "white oval geometric shape",
    main_results: ["web design", "web development", "seo", "copywriting"],
    description:
      "It is necessary to stimulate your sales, attract new potential customers, or perhaps increase interest in a particular product, service, or even your company? No problem! There is an ideal solution for this—a one-page site (landing page), developed quickly and with minimal costs. Landing pages differ from full websites with a specific, action-focused design.",
    title_list_advantages: "Advantages:",
    advantages_list_items: [
      "Cost-effective",
      "Optimised conversion",
      "Quick deployment",
    ],
  },
  {
    name_card: "corporate",
    title_card: "Corporate websites",
    img: corporateImg,
    img_alt: "white oval geometric shape",
    main_results: ["web design", "web development", "branding", "copywriting"],
    description:
      "Corporate website design is the ideal solution to elevate your brand's online presence, reinforce credibility, and provide comprehensive information in one strategic space. Meticulously crafted for professionalism and branded excellence, it serves as a centralized hub for detailed company insights.",
    title_list_advantages: "Advantages:",
    advantages_list_items: [
      "Professional image",
      "Brand consistency",
      "Enhanced credibility",
    ],
  },
  {
    name_card: "redesign",
    title_card: "Redesign",
    img: redesignImg,
    img_alt: "white oval geometric shape",
    main_results: ["web design", "web development", "adaptation"],
    description:
      "Change is inevitable in every business' life. A website redesign becomes essential if your website lags behind company's expansion, remains outdated. A website redesign will improve the visual appearance of the web pages and the interaction with them. It will optimize site speed, search engine performance, and implement adaptive design.",
    title_list_advantages: "Advantages:",
    advantages_list_items: [
      "Revitalized appeal",
      "Improved functionality",
      "Responsive design",
    ],
  },
];

export default dataServicesCard;
