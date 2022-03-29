import React, { useContext } from "react";
import Datatable from "../components/displayData/Datatable";
import { DataContext } from "../components/datahandler/DatabaseProvider";

export default function MembersScreen() {
  const data = useContext(DataContext);
  const defaultInputs = [
    { text: "Name", iconName: "person", replacing: "name" },
    { text: "Vorname", iconName: "person", replacing: "firstName" },
    { text: "Instrument", iconName: "person", replacing: "instrument" },
  ];
  return (
    <Datatable
      data={data.members.data}
      title="Mitglieder"
      sort={(a, b) => {
        if (a === b) {
          return 0;
        }
        return a.name < b.name ? -1 : 1;
      }}
      headers={defaultInputs}
    />
  );
}
