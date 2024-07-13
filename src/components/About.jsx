import React from 'react';
import './styles/About.css';

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        Welcome to CalmCove, Our mission is to provide a safe harbor where individuals can explore, understand, and find support for various mental health challenges.
      </p>
      <h2>Here’s what you’ll discover at CalmCove:</h2>
      <section className="about-section">
        <img src="/WhatsApp Image 2024-07-09 at 14.24.17_d940fe16.jpg" alt="Comprehensive Information" className="about-image" />
        <div>
          <h3>Comprehensive Information</h3>
          <p>
            Explore a curated collection of mental health issues, each accompanied by clear descriptions. Whether it’s anxiety, depression, or stress, we’ve got you covered. Dive into the nuances of each condition, understanding its impact on daily life and relationships.
          </p>
        </div>
      </section>
      <section className="about-section">
        <img src="/WhatsApp Image 2024-07-09 at 14.24.18_f8224979.jpg" alt="Holistic Solutions" className="about-image" />
        <div>
          <h3>Holistic Solutions</h3>
          <p>
            Beyond awareness, we offer practical solutions. Discover coping strategies, self-care practices, and evidence-based approaches to manage mental health challenges. Our goal is to empower you with actionable steps toward well-being.
          </p>
        </div>
      </section>
      <section className="about-section">
        <img src="/WhatsApp Image 2024-07-09 at 14.24.19_247cd6f7.jpg" alt="In-Depth Articles" className="about-image" />
        <div>
          <h3>In-Depth Articles</h3>
          <p>
            Delve into our rich library of articles written by experts. From mindfulness techniques to understanding trauma, our content covers a wide spectrum. Stay informed, inspired, and equipped to navigate life’s emotional tides.
          </p>
        </div>
      </section>
      <section className="about-section">
        <img src="/WhatsApp Image 2024-07-09 at 14.24.19_8e6b5c18.jpg" alt="Connecting with Professionals" className="about-image" />
        <div>
          <h3>Connecting with Professionals</h3>
          <p>
            Soon, CalmCove will introduce a network of compassionate doctors and counselors. Whether you seek guidance or need someone to listen, we’ll be here. Your mental health journey is not solitary; it’s a shared voyage.
          </p>
        </div>
      </section>
      <p>
        Join us at CalmCove, where tranquility meets resilience. Together, we’ll navigate the currents, find solace, and embrace healing. 🌟🌿
      </p>
    </div>
  );
};

export default About;
