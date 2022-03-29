import React, { useContext } from "react";
import { Column, Heading, Stack, Center } from "native-base";
import InfoCard from "../components/dashboard/InfoCard";
import { DataContext } from "../components/datahandler/DatabaseProvider";

export default function Dashboard() {
  const data = useContext(DataContext);
  return (
    <Column>
      <Heading mt="6" size="md">
        Dashboard
      </Heading>
      <Center>
        <Stack direction={{ base: "column", lg: "row" }}>
          <InfoCard
            value={data.members?.length}
            text={"Mitglieder"}
            iconName={"person"}
          />
          <InfoCard value={15000} text={"Kontostand"} iconName={"person"} />
        </Stack>
      </Center>
      <Center>
        <Stack direction={{ base: "column", lg: "row" }}>
          <InfoCard
            value={data.invoices?.length}
            text={"Rechnungen"}
            iconName={"person"}
          />
          <InfoCard value={15000} text={"Spendengelder"} iconName={"person"} />
        </Stack>
      </Center>
    </Column>
  );
}
