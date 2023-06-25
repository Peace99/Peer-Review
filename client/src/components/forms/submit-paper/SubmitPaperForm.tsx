import { useForm } from "react-hook-form";
import styles from "./submit.paper.form.module.scss";
import { FileInput, Select } from "@mantine/core";
import { Api } from "../../../config/api";

const selectWidth = "60%";

export function SubmitPaperForm() {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = async (data: any) => {
    console.log(data);
    await new Api().submitReview(data);
    window.alert("Article submitted");
  };
  const handleFileChange = (file: any) => {
    setValue("file", file);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.submitPaperForm}>
      <Select
        sx={{
          width: selectWidth,
          marginBottom: "3rem",
        }}
        label="Type of Review"
        placeholder="Pick one"
        required
        data={[
          { value: "Open Review", label: "Open Review" },
          { value: "Double-blind Review", label: "Double-blind Review" },
          { value: "Single-blind Review", label: "Single-blind Review" },
        ]}
      />
      <label>Journal</label>
      <Select
        sx={{
          width: selectWidth,
          marginBottom: "3rem",
        }}
        required
        label="Pick your journal"
        placeholder="Pick one"
        onChange={(value) => setValue("fieldOfResearch", value)}
        data={[
          { value: "Journals of Business", label: "Journals of Business" },
          { value: "Scientific Reports", label: "Scientific Reports" },
          {
            value: "Journal of Biological Sciences",
            label: "Journal of Biological Sciences",
          },
          {
            value: "Journal of Educational Research",
            label: "Journal of Educational Research",
          },
          {
            value: "Journal of Computer Sciences",
            label: "Journal of Computer Sciences",
          },
        ]}
      />
      <label>Title of Article</label>
      <input
        name="title"
        {...register("title", {
          required: true,
        })}
        type="text"
      />
      <FileInput
        sx={{
          width: selectWidth,
          marginBottom: "3rem",
        }}
        required
        onChange={handleFileChange}
        placeholder="Pick file"
        label="Your Article file"
        withAsterisk
      />
      <label>Abstract</label>
      <textarea
        {...register("abstract", {
          required: true,
        })}
      />
      <label>Accompanying Letter</label>
      <textarea
        {...register("accompanyingLetter", {
          required: true,
        })}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
