import Hero from "../../components/Hero";
import FeaturesList from "../../components/Features/FeaturesList/FeaturesList";
import Services from "../../components/Services";
import About from "../../components/About/About";

// import web from "../../images/web.png";
// import { Container, Image, Paragraph, Time, Title } from "./HomeStyled";

const Home = () => {

  return (
    <>
      <Hero />
      <FeaturesList />
      <About/>
      <Services />
    </>
  );
  // const [timeRemaining, setTimeRemaining] = useState({
  //   days: 0,
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 0,
  // });

  // useEffect(() => {
  //   const targetDate = new Date("2024-01-14T00:00:00");

  //   const calculateTimeRemaining = () => {
  //     const currentDate = new Date();
  //     const timeDifference = targetDate - currentDate;

  //     const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor(
  //       (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor(
  //       (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  //     );
  //     const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  //     setTimeRemaining({ days, hours, minutes, seconds });
  //   };

  //   const intervalId = setInterval(calculateTimeRemaining, 1000);

  //   return () => clearInterval(intervalId);
  // }, []);

  // return (
  //   <Container>
  //     <Title>United Web Studio</Title>
  //     <Paragraph>
  //       Sorry for the temporary inconvenience. We are working on something
  //       special for you. Stay tuned and follow for updates.
  //     </Paragraph>
  //     <Time
  //       className={`shadow ${timeRemaining.seconds % 2 === 0 ? "flicker" : ""}`}
  //     >
  //       {String(timeRemaining.days).padStart(2, "0")}:
  //       {String(timeRemaining.hours).padStart(2, "0")}:
  //       {String(timeRemaining.minutes).padStart(2, "0")}:
  //       {String(timeRemaining.seconds).padStart(2, "0")}
  //     </Time>
  //     <Image src={web} alt="web studia" />
  //   </Container>
  // );
};

export default Home;
