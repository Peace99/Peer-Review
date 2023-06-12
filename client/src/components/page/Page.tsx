import { ReactNode } from "react";
import styles from "./page.module.scss";

interface props {
  children?: ReactNode;
  className?: string;
}

export function Page({ children, className }: props) {
  return <div className={`${styles.page} ${className}`}>{children}</div>;
}
