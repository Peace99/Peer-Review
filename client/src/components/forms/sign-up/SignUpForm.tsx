import styles from "./sign.up.form.module.scss";

export function SignUpForm() {
  return (
    <form className={styles.loginForm}>
      <label>Name</label>
      <input />
      <label>Email</label>
      <input />
      <label>Password</label>
      <input type="password" />
      <label>Field of Research</label>
      <input />
      <button>Submit</button>
    </form>
  );
}
