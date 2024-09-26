import React from 'react';
import membersAbout from './assets/images/about_page/members_about.png';
import conventionAbout from './assets/images/about_page/convention_about.png';
import eventAbout from './assets/images/about_page/event_about.png';
import speakersAbout from './assets/images/about_page/speakers_about.png';

const About = () => {
  return (
    <div className="about-us-container">
      <section className="about-section-container">
        <div className="about-image-container">
          <img src={membersAbout} alt="About SHPE" className="about-image" />
        </div>
        <div className="about-text">
          <h3 className="about-title">About SHPE</h3>
          <p className="about-description">
            The Society of Hispanic Professional Engineers is the largest association in the nation for Hispanics in STEM—offering effective training, mentorship, and programming for our vibrant community.
          </p>
        </div>
      </section>

      <section className="about-section-container">
        <div className="about-image-container">
          <img src={conventionAbout} alt="Why Join SHPE?" className="about-image" />
        </div>
        <div className="about-text">
          <h3 className="about-title">Why Join SHPE?</h3>
          <p className="about-description">
            - Job & Internship Opportunities <br />
            <br />
            - Scholarships for members <br />
            <br />
            - Professional Networking <br />
            <br />
            - Annual 4-day nationals event <br />
            <br />
            - Join a cohort of fellow STEM students and receive career and academic support
          </p>
        </div>
      </section>

      <section className="about-section-container">
        <div className="about-image-container">
          <img src={eventAbout} alt="Our Mission" className="about-image" />
        </div>
        <div className="about-text">
          <h3 className="about-title">Our Mission</h3>
          <p className="about-description">
            SHPE changes lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support, and development.
          </p>
        </div>
      </section>

      <section className="about-section-container">
        <div className="about-image-container">
          <img src={speakersAbout} alt="Our Values" className="about-image" />
        </div>
        <div className="about-text">
          <h3 className="about-title">Our Values</h3>
          <p className="about-description">
            SHPE's vision is a world where Hispanics are highly valued and influential as the leading innovators, scientists, mathematicians, and engineers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
