import { Tabs } from "@mantine/core";
import { Manuscripts } from "../manuscripts/Manuscripts";
import { SubmitPaperForm } from "../forms/submit-paper/SubmitPaperForm";

export function LecturerTab() {
  return (
    <Tabs defaultValue="manuscripts">
      <Tabs.List>
        <Tabs.Tab
          sx={{
            marginLeft: "1rem",
          }}
          value="manuscripts"
        >
          Manuscripts
        </Tabs.Tab>
        <Tabs.Tab
          sx={{
            marginLeft: "1rem",
          }}
          value="submit_paper"
        >
          Submit Paper
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="manuscripts" pt="xs">
        <Manuscripts />
      </Tabs.Panel>
      <Tabs.Panel value="submit_paper" pt="xs">
        <SubmitPaperForm />
      </Tabs.Panel>
    </Tabs>
  );
}
