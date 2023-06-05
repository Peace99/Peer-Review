import axios from "axios";
import { Role } from "../../../common/types";
import { useState } from "react";
import styles from "./login.form.module.scss";
import { SegmentedControl, Box, Center } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { Api } from "../../../config/api";

export function LoginForm() {
  const [role, setRole] = useState<Role>("LECTURER");
  const [email, setEmail] = useState<string>(null);
  const [password, setPassword] = useState<string>(null);
  const navigate = useNavigate();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const response = await new Api().authenticate({
      role,
      email,
      password,
    });
    console.log(response?.data);
    localStorage.setItem("authDto", response.data);
    navigate("/profile");
  };
  const handleToggle = () => {
    if (role === "LECTURER") return setRole("REVIEWER");
    setRole("LECTURER");
  };
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <SegmentedControl
        sx={{
          width: "100%",
          marginBottom: "2rem",
        }}
        value={role}
        onChange={handleToggle}
        data={[
          {
            value: "LECTURER",
            label: (
              <Center>
                <Box ml={10}>Reviewer</Box>
              </Center>
            ),
          },
          {
            value: "REVIEWER",
            label: (
              <Center>
                {" "}
                <Box ml={10}>Lecturer</Box>
              </Center>
            ),
          },
        ]}
      />
      <label>Email</label>
      <input required type="email" />
      <label>Password</label>
      <input required type="password" />
      <button>Submit</button>
      <Link to="/sign-up">Create An Account</Link>
    </form>
  );
}
