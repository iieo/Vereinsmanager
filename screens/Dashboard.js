import React, { useContext } from "react";
import { Column, Heading, Stack, Center } from "native-base";
import InfoCard from "../components/dashboard/InfoCard";
import { DataContext } from "../components/database/DatabaseProvider";

export default function Dashboard(props) {
  const data = useContext(DataContext);
  return (
    <Column>
      <Heading mt="6" size="md">
        Dashboard
      </Heading>
      <Center>
        <Stack direction={{ base: "column", lg: "row" }}>
          <InfoCard
            value={data.persons.data?.length}
            text={"Mitglieder"}
            iconName={"person"}
          />
          <InfoCard value={15000} text={"Kontostand"} iconName={"person"} />
        </Stack>
      </Center>
      <Center>
        <Stack direction={{ base: "column", lg: "row" }}>
          <InfoCard
            value={data.invoices.data?.length}
            text={"Rechnungen"}
            iconName={"person"}
          />
          <InfoCard value={15000} text={"Spendengelder"} iconName={"person"} />
        </Stack>
      </Center>
    </Column>
  );
}
