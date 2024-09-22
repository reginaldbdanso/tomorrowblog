import React from 'react';
import ArticleItem from './ArticleItem';

function ArticleList() {
  const articles = [
    { title: "Design: A Survival Guide for Beginners", status: "Published", views: 120 },
    { title: "Design: A Survival Guide for Beginners", status: "Draft", views: 0 },
    { title: "Design: A Survival Guide for Beginners", status: "Scheduled", views: 0 },
    { title: "Design: A Survival Guide for Beginners", status: "Published", views: 120 },
    { title: "Design: A Survival Guide for Beginners", status: "Published", views: 120 },
  ];

  return (
    <section>
      {articles.map((article, index) => (
        <ArticleItem key={index} {...article} />
      ))}
    </section>
  );
}

export default ArticleList;
