// src/components/Articles.jsx
import React from 'react';
import './Articles.css';

const Articles = () => {
  const articles = [
    {
      title: 'Understanding Anxiety Disorders',
      description: 'Learn about the different types of anxiety disorders and how they can be managed.',
      link: '#'
    },
    {
      title: 'The Importance of Mental Health',
      description: 'Discover why mental health is just as important as physical health.',
      link: '#'
    },
    {
      title: 'Coping with Depression',
      description: 'Explore effective strategies for coping with depression.',
      link: '#'
    }
  ];

  return (
    <div className="articles">
      <h2>Articles</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.link} target="_blank" rel="noopener noreferrer">Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
