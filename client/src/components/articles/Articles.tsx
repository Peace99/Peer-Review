import { Article as ArticleModel } from "../../models/article.model";
import { Article } from "../article/Article";
import styles from "./articles.module.scss";

interface props {
  articles: ArticleModel[];
}

export function Articles({ articles }: props) {
  return (
    <div className={styles.articles}>
      {articles.map((article, index) => (
        <Article article={article} key={index} />
      ))}
    </div>
  );
}
