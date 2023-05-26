import { useRef } from "react";
import { useIntersection } from "react-use";
import {
  ContactContainer,
  TextContainer,
  ActionBTContainer,
  SeeMyWorkBtn,
  Circle,
} from "./styles";
import MedalIcon from "../../svg/icons/medal";

const Contact = () => {
  const myRef = useRef(null);
  const intersection = useIntersection(myRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });
  const fadeIn = {
    opacity: 1,
    y: 0,
    x: -30,
  };

  const fadeOut = {
    opacity: 0,
    y: 200,
    x: 0,
  };
  const titleIn = {
    opacity: 1,
    y: 0,
    x: 0,
  };

  const titleOut = {
    opacity: 0,
    y: 200,
    x: 0,
  };

  const animationName =
    intersection && intersection.intersectionRatio < 0.2 ? fadeOut : fadeIn;
  const animationTitle =
    intersection && intersection.intersectionRatio < 0.2 ? titleOut : titleIn;

  const technicalExpertiseData = [
    {
      header: "Problem Solving",
      description:
        "I thrive on tackling complex challenges and finding innovative solutions. I am adept at breaking down problems, identifying bottlenecks, and implementing effective strategies",
    },
    {
      header: "Collaboration",
      description:
        "I am a strong believer in teamwork and possess excellent communication skills. I enjoy collaborating with cross-functional teams, providing valuable insights, and fostering a positive work environment.",
    },
    {
      header: "Adaptability",
      description:
        "In the fast-paced world of technology, I am constantly learning and adapting to stay ahead. I embrace new frameworks, libraries, and tools to ensure that my projects are at the forefront of industry standards.",
    },
    {
      header: "Attention to Detail",
      description:
        " I believe that quality is of utmost importance. I pay meticulous attention to detail, from writing clean and maintainable code to conducting thorough testing and debugging.",
    },
  ];
  const pastAchievementData = [
    {
      header: "Problem Solving",
      description:
        "Led the development of a dynamic e-commerce platform, resulting in a 30% increase in sales and a 20% decrease in bounce rates.",
    },
    {
      header: "Collaboration",
      description:
        "Implemented a data analytics solution that improved decision-making processes, resulting in a 15% increase in operational efficiency.",
    },
    {
      header: "Adaptability",
      description:
        "Mentored and guided junior developers, fostering their growth and contributing to a cohesive and high-performing team.",
    },
  ];
  const hireMeServices = [
    {
      service:"Landing Page",
      price: "$3.000",
      description: "Creating high-converting Framer landing pages with an exceptional design that will blow up your conversion.",
    },
    {
      service:"Website",
      price: "$6.000+",
      description: "Full scale business website made in Framer or Webflow with multiple pages, CMS, great performance and strong SEO.",
    },
    {
      service:"Web App",
      price: "$15.000+",
      description: "Crafting complex platforms with advanced features like logic, memberships, eCommerce, and custom code in Webflow and Framer.",
    }
  ]
  return (
    <ContactContainer id="contact" ref={myRef}>
      <TextContainer>
        <h1 animate={animationTitle}>
          Let's
          <span className="highlight">work</span> together
        </h1>
        <br />
        <br />
        <h2>A <span className="highlight">Senior Full Stack Developer</span> with a Passion for Innovation</h2>
        <div className="wrapper">
          <p animate={animationName}>
            As a senior full stack developer, I bring a wealth of experience and
            a burning passion for innovation to every project I undertake. With
            a track record of success and a deep understanding of both front-end
            and back-end technologies, I am confident in my ability to deliver
            exceptional results.
          </p>
          {/* <div className="expertise">
            <h3>Technical Expertise:</h3>
            <ul>
              {technicalExpertiseData.map((item, index) => (
                <li key={index}>
                  <div>
                    <h5>{item.header}</h5>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div> */}
          {/* <div className="expertise">
            <h3>Past Achievements:</h3>
            <ul>
              {pastAchievementData.map((item, index) => (
                <li key={index}>
                  <MedalIcon />
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div> */}
          
           <ul className="service-list">
           { hireMeServices.map((item, index) => (
              <li key={index} className="service-card">
                <div>
                  <h3> {item.service} 
                  <span>{item.price}</span>
                  </h3>
                </div>
                <p>{item.description}</p>
                <button>
                  Book  a discovery call 
                </button>
              </li>
            ))}

           </ul>
          
        </div>
      </TextContainer>
      <ActionBTContainer>
        <SeeMyWorkBtn href="mailto:kemo3855@yahoo.com" animate={animationName}>
          <Circle />
          <p>Let's chat</p>
        </SeeMyWorkBtn>
      </ActionBTContainer>
    </ContactContainer>
  );
};

export default Contact;
