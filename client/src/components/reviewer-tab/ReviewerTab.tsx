import { Tabs } from "@mantine/core";
import { Manuscripts } from "../manuscripts/Manuscripts";
import { Dashboard } from "../dashboard/Dashboard";

export function ReviewerTab() {
  return (
    <Tabs defaultValue="manuscripts">
      <Tabs.List>
        <Tabs.Tab
          sx={{
            marginLeft: "1rem",
          }}
          value="dashboard"
        >
          Dashboard
        </Tabs.Tab>
        <Tabs.Tab
          sx={{
            marginLeft: "1rem",
          }}
          value="manusripts"
        >
          Manuscripts
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="dashboard" pt="xs">
        <Dashboard />
      </Tabs.Panel>
      <Tabs.Panel value="manuscripts" pt="xs">
        <Manuscripts />
      </Tabs.Panel>
    </Tabs>
  );
}
