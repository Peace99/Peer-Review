import { ReactNode } from "react";
import styles from "./editor.module.scss";
import { Outlet, NavLink } from "react-router-dom";
import { FirstSlide } from "../../components/editor/firstSlide/FirstSlide";
import { SecondSlide } from "../../components/editor/secondSlide/SecondSlide";

interface props {
  children?: ReactNode;
  className?: string;
}

export function Editor({ children, className }: props) {
  return (
    <div className={`${styles.page} ${className}`}>
      <div className={styles.editorNav}>
        <NavLink
          to=''
          end
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to='manuscripts'
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
        >
          Manuscripts
        </NavLink>
      </div>
      <div>
        {/* First Slide */}
        {/* <FirstSlide /> */}
        {/* Second Slide */}
        <SecondSlide />
      </div>
    </div>
  );
}
