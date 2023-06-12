import styles from "./header.module.scss";
import LogoImage from "../../assets/revisar.logo.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className={styles.header}>
      <img src={LogoImage} />
      <span>
        <Link to="/about">About</Link>
        <Link to="/journals">Journals</Link>
        <Link to="/conferences">Conferences</Link>
        <Link to="/auth">Sign In</Link>
      </span>
    </div>
  );
}
