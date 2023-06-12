import { useForm } from "react-hook-form";
import styles from "./submit.paper.form.module.scss";
import { FileInput, Select } from "@mantine/core";

export function SubmitPaperForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = () => {};
  return (
    <form className={styles.submitPaperForm} onSubmit={handleSubmit(onSubmit)}>
      <label>Journal</label>
      <Select
        sx={{
          width: "30%",
          marginBottom: "3rem",
        }}
        label="Pick your journal"
        placeholder="Pick one"
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
      />
      <label>file</label>
      <FileInput
        sx={{
          width: "30%",
          marginBottom: "3rem",
        }}
        placeholder="Pick file"
        label="Your Article file"
        withAsterisk
      />
    </form>
  );
}
