import { Article as ArticleModel } from "../../models/article.model";
import styles from "./article.module.scss";

interface props {
  article: ArticleModel;
}

export function Article({ article }: props) {
  return <div className={styles.article}></div>;
}
