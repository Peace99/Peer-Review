import { ReactNode, useEffect, useState } from "react";
import React from "react";
import styles from "./editor.module.scss";
import { Outlet, NavLink } from "react-router-dom";
import { FirstSlide } from "../../components/editor/firstSlide/FirstSlide";
import { SecondSlide, ArticleProps } from "../../components/editor/secondSlide/SecondSlide";


interface Props {
  children?: ReactNode;
  className?: string;
}

interface Article {
  id: number;
  title: string;
  // Add other article properties here
}

export function Editor({ className }: Props) {
  const [articles, setArticles] = useState<ArticleProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/articles")
      .then((response) => response.json())
      .then((data: ArticleProps[]) => {
        setArticles(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={`${styles.page} ${className}`}>
      <div className={styles.editorNav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/manuscripts"
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          Manuscripts
        </NavLink>
      </div>
      <div>
        <FirstSlide manuscriptsLength={articles.length} />
      </div>
      <SecondSlide articles={articles} />
    </div>
  );
}
