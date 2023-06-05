import { Page } from "../../components/page/Page";
import { AuthDto } from "../../models/auth.dto";
import styles from "./profile.module.scss";
import { Avatar } from "@mantine/core";
import { LecturerTab } from "../../components/lecturer-tab/LecturerTab";
import { ReviewerTab } from "../../components/reviewer-tab/ReviewerTab";

export function Profile() {
  const { role }: AuthDto = null;
  return (
    <Page className={styles.profile}>
      <div>
        <Avatar
          sx={{
            borderRadius: "16px",
            height: "10rem",
            width: "10rem",
            marginTop: "10rem",
          }}
          alt="it's me"
        />
      </div>
      <div className={styles.profileDetails}>
        <div>
          <h1>Ekara Daniel</h1>
          <p>daniel.ekara.dev@gmail.com</p>
        </div>
        <span>Science</span>
        <span>Computer Science</span>
      </div>
      {role === "Lecturer" && <LecturerTab />}
      {role === "Lecturer" && <ReviewerTab />}
    </Page>
  );
}
