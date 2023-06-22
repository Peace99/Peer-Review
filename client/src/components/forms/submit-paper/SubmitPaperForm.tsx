import { useForm } from "react-hook-form";
import styles from "./submit.paper.form.module.scss";
import { FileInput, Select } from "@mantine/core";

export function SubmitPaperForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = () => {};
  return (
    <form className={styles.submitPaperForm} onSubmit={handleSubmit(onSubmit)}>
      <Select
        sx={{
          width: "30%",
          marginBottom: "3rem",
        }}
        label="Type of Review"
        placeholder="Pick one"
        data={[
          { value: "Open Review", label: "Open Review" },
          { value: "Double-blind Review", label: "Double-blind Review" },
          { value: "Single-blind Review", label: "Single-blind Review" },
        ]}
      />
      <label>Journal</label>
      <Select
        sx={{
          width: "30%",
          marginBottom: "3rem",
        }}
        label="Pick your journal"
        placeholder="Pick one"
        data={[
          { value: "Journals of Business", label: "Journals of Business" },
          { value: "Scientific Reports", label: "Scientific Reports" },
          { value: "Journal of Biological Sciences", label: "Svelte" },
          {
            value: "Journal of Educational Research",
            label: "Journal of Educational Research",
          },
        ]}
      />
      <label>Type of Article</label>
      <Select
        sx={{
          width: "30%",
          marginBottom: "3rem",
        }}
        label="Article Type"
        placeholder="Pick one"
        data={[
          { value: "Review Articles", label: "Review Articles" },
          { value: "Conference Paper", label: "Conference Paperr" },
          { value: "Case Study", label: "Case Study" },
          { value: "Editorials", label: "Editorials" },
        ]}
      />
      {/* <label>Title of Article</label>
      <input onChange={(event) => setName(event?.target.value)}
      required
      /> */}
      <label>File</label>
      <FileInput
        sx={{
          width: "30%",
          marginBottom: "3rem",
        }}
        placeholder="Pick file"
        label="Your Article file"
        withAsterisk
      />
      <label>Letter</label>
      <FileInput
        sx={{
          width: "30%",
          marginBottom: "3rem",
        }}
        placeholder="Pick file"
        label="Accompanying letter"
        withAsterisk
      />
      <button>Submit</button>
      <Link to="/">Sign in</Link>
    </form>
  );
}
