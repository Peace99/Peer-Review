import React from "react";
import styles from "./secondSlide.module.scss";

export interface ArticleProps {
  _id: string;
  title: string;
  lecturerId: {
    name: string;
  };
  reviewerId: {
    name: string;
  };
  status: string;
  action: string;
}

interface SecondSlideProps {
  articles: ArticleProps[];
}

export function SecondSlide({ articles }: SecondSlideProps) {
  return (
    <div className={styles.secondSlide}>
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Manuscripts</th>
            <th>Authors</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={article._id}>
              <td>{index + 1}</td>
              <td>{article.title}</td>
              <td>{article.lecturerId.name}</td>
              <td>{article.status}</td>
              <td>{article.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
