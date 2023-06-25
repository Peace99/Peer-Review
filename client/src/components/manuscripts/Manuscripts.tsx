import { useQuery } from "react-query";
import { Article } from "../../models/article.model";
import styles from "./manuscripts.module.scss";
import { Articles } from "../articles/Articles";
import { Api } from "../../config/api";

export function Manuscripts() {
  const { data: response } = useQuery({
    queryFn: () => new Api().getArticlesByReviewer(),
    queryKey: ["reviewer_manuscripts"],
  });
  return (
    <div className={styles.manuscripts}>
      <Articles articles={response?.data || []} />
    </div>
  );
}
