import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Thomas Maxey</span>
              </p>
              <h2 className="about__heading">A Full Stack Web Developer</h2>
              <div className="about__info">
                <PText>
                  I am from a small town in rural Eastern, North Carolina. I
                  have always had a passion for creating things since I was a
                  child. That, combined with my shared passion for technology,
                  has lead me to the path of being a web developer.
                  <br /> <br />
                  When I am not coding, I am more than likely in the gym or
                  playing the occasional video game. I use my free time to
                  unwind when I can and enjoy life as much as possible. I love
                  to travel and visit new countries and cities.
                  <br />
                </PText>
              </div>
              <Button
                btnText="Download CV"
                btnLink="assets/files/MyResume.pdf"
                download="MyResume.pdf"
              />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="Certificates"
                items={['UNC Full Stack Coding Bootcamp']}
              />
              <AboutInfoItem
                title="University"
                items={['University Of North Carolina Wilmington']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                // eslint-disable-next-line no-sparse-arrays
                items={[
                  'HTML',
                  'Tailwind/Materalize/Bootstrap CSS',
                  'JavaScript',
                  'REACT',
                  ,
                ]}
              />
              <AboutInfoItem
                title="BackEnd"
                items={[
                  'Node',
                  'Express',
                  'GraphQL',
                  'Apollo',
                  'MySQL',
                  'MONGO',
                ]}
              />
              <AboutInfoItem
                title="Design"
                items={['Photoshop', 'Illustrator', 'Figma']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2021-"
                items={['A position at your wonderful company']}
              />
              <AboutInfoItem title="2012-2021" items={['Business Admin']} />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
