import React from 'react';
import Card from './Card';
import './styles/Hero.css';

const Hero = () => {
  const cards = [
    {
      title: 'ADHD',
      description: 'Learn about ADHD and how to manage it.',
      link: './resources'
    },
    {
      title: 'Mindfulness Practices',
      description: 'Explore mindfulness techniques to reduce stress.',
      link: './resources'
    },
    {
      title: 'Addiction',
      description: 'Find resources to support your mental health.',
      link: './resources'
    },
    {
      title: 'Stress',
      description: 'Learn how to manage stress effectively.',
      link: './resources'
    },
    {
      title: 'Depression',
      description: 'Understanding and managing depression.',
      link: './resources'
    },
    {
      title: 'Anxiety',
      description: 'Learn about anxiety and how to manage it.',
      link: './resources'
    },
    // Added cards
    {
      title: 'Bipolar Disorder',
      description: 'Understanding bipolar disorder and its management.',
      link: './resources'
    },
    {
      title: 'Eating Disorders',
      description: 'Explore how to overcome eating disorders.',
      link: './resources'
    },
    {
      title: 'PTSD',
      description: 'Post-traumatic stress disorder (PTSD) resources and support.',
      link: './resources'
    },
    {
      title: 'Obsessive-Compulsive Disorder',
      description: 'Learn about OCD and how to manage its symptoms.',
      link: './recources'
    },
    {
      title: 'Schizophrenia',
      description: 'Insight into schizophrenia and how to support those affected.',
      link: './resources'
    },
    {
      title: 'Personality Disorders',
      description: 'Understanding personality disorders and finding help.',
      link: './resources'
    }
  ];

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to CalmCove</h1>
        <p>Join us in raising awareness and supporting mental health.</p>
        <div className="cards">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} link={card.link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;