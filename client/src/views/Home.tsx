import { Page } from "../components/page/Page";
import { Outlet, Link } from "react-router-dom";

export function Home() {
  const { email, name } = JSON.parse(localStorage.getItem(""));
  return (
    <Page>
      <div>
        <div></div>
        <div></div>
      </div>
      <div>
        <Link to="/home/manuscripts" />
        <Link to="/home/submit-paper" />
      </div>
      <Outlet />
    </Page>
  );
}
