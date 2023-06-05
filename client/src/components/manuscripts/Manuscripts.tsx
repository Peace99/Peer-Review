import { Article } from "../../models/article.model";
import styles from "./manuscripts.module.scss";

interface props {
  articles: Article[];
}

export function Manuscripts({ articles }: props) {
  return <div className={styles.manuscripts}></div>;
}
