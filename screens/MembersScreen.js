import React, { useContext } from "react";
import Datatable from "../components/displayData/Datatable";
import { DataContext } from "../components/datahandler/DatabaseProvider";
import Person from "../components/datahandler/Person";

export default function MembersScreen() {
  const data = useContext(DataContext);
  const defaultInputs = [
    { text: "Name", iconName: "person", replacing: "name" },
    { text: "Vorname", iconName: "person", replacing: "firstName" },
    { text: "Instrument", iconName: "person", replacing: "instrument" },
    { text: "Beitrag", iconName: "person", replacing: "contribution" },
    { text: "Spende", iconName: "person", replacing: "donation" },
  ];
  return (
    <Datatable
      data={data.members}
      title="Mitglieder"
      sort={Person.sort}
      headers={defaultInputs}
    />
  );
}
