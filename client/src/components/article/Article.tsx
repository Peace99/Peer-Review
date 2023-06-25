import { useNavigate } from "react-router-dom";
import { Article as ArticleModel } from "../../models/article.model";
import styles from "./article.module.scss";

interface props {
  article: ArticleModel;
}

export function Article({ article }: props) {
  const navigate = useNavigate();
  const handleClick = () =>
    navigate("/review-form", {
      state: article,
    });
  return (
    <div onClick={handleClick} className={styles.article}>
      <h4>{article?.title}</h4>
      <p>{article?.lecturerId?.name || article?.lecturerId?.email}</p>
      <span>reviewed: {(article?.review !== null).toString()}</span>
    </div>
  );
}
