import { Page } from "../../components/page/Page";
import { AuthDto } from "../../models/auth.dto";
import styles from "./profile.module.scss";
import { Avatar } from "@mantine/core";
import { LecturerTab } from "../../components/lecturer-tab/LecturerTab";
import { ReviewerTab } from "../../components/reviewer-tab/ReviewerTab";

export function Profile() {
  const { role, name, email, fieldOfResearch }: AuthDto = JSON.parse(localStorage.getItem("authDto"));
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
          <h1>{
            name
            }
            </h1>
          <p>{email }</p>
        </div>
        <span>{fieldOfResearch }</span>
      </div>
      {role === "lecturer" && <LecturerTab />}
      {role === "reviewer" && <ReviewerTab />}
    </Page>
  );
}
