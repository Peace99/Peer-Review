import { Page } from "../../components/page/Page";
import styles from "./auth.module.scss";
import { Outlet } from "react-router-dom";

export function Auth() {
  return (
    <Page className={styles.auth}>
      <Outlet />
    </Page>
  );
}
