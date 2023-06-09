import { Box, Center, SegmentedControl } from "@mantine/core";
import { Role } from "../../../common/types";
import { Api } from "../../../config/api";
import styles from "./sign.up.form.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

export function SignUpForm() {
  const [role, setRole] = useState<Role>("lecturer");
  const [name, setName] = useState<string>(null);
  const [title, setTitle] = useState<string>(null);
  const [email, setEmail] = useState<string>(null);
  const [password, setPassword] = useState<string>(null);
  const [fieldOfResearch, setFieldOfResearch] = useState<string>(null);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log("called");
    try {
      await new Api().signUp({
        role,
        title,
        name,
        email,
        password,
        fieldOfResearch,
      });
      window.alert("sign up complete");
    } catch (error) {
      window.alert("error occured");
    }
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
      <label>Title</label>
      <input
        onChange={(event) => setTitle(event?.target.value)}
        required
        type="title"
      />
      <label>Name</label>
      <input
        onChange={(event) => setName(event?.target.value)}
        required
        type="name"
      />
      <label>Email</label>
      <input
        onChange={(event) => setEmail(event?.target.value)}
        required
        type="email"
      />
      <label>Password</label>
      <input
        onChange={(event) => setPassword(event?.target.value)}
        required
        type="password"
      />
      <label>Field of research</label>
      <input
        onChange={(event) => setFieldOfResearch(event?.target.value)}
        required
      />
      <button>Submit</button>
      <Link to="/">Sign in</Link>
    </form>
  );
}
