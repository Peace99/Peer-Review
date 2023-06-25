import { Tabs } from "@mantine/core";
import { Manuscripts } from "../manuscripts/Manuscripts";
import { ReviewersGuide } from "../forms/review-article-form/ReviewArticleForm";

export function ReviewerTab() {
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
          value="review"
        >
          Review
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="manuscripts" pt="xs">
        <Manuscripts />
      </Tabs.Panel>
      <Tabs.Panel value="Review" pt="xs">
        <ReviewersGuide />
      </Tabs.Panel>
    </Tabs>
  );
}
