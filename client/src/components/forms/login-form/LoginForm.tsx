import axios from "axios";
import { Role } from "../../../common/types";
import { useState } from "react";
import styles from "./login.form.module.scss";
import { SegmentedControl, Box, Center } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { Api } from "../../../config/api";

export function LoginForm() {
  const [role, setRole] = useState<Role>("lecturer");
  const [email, setEmail] = useState<string>(null);
  const [password, setPassword] = useState<string>(null);
  const navigate = useNavigate();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log("called");
    const response = await new Api().authenticate({
      role,
      email,
      password,
    });
    console.log(response?.data);
    localStorage.setItem("authDto", JSON.stringify(response.data));
    navigate("/profile");
  };
  const handleToggle = () => {
    if (role === "lecturer") return setRole("reviewer");
    setRole("lecturer");
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
            value: "lecturer",
            label: (
              <Center>
                <Box ml={10}>Reviewer</Box>
              </Center>
            ),
          },
          {
            value: "reviewer",
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
      <input
        onChange={event => setEmail(event?.target.value)}
        required
        type="email"
      />
      <label>Password</label>
      <input
        onChange={event => setPassword(event?.target.value)}
        required
        type="password"
      />
      <button>Submit</button>
      <Link to="/sign-up">Create An Account</Link>
    </form>
  );
}
