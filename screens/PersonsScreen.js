import React, { useContext } from "react";
import Datatable from "../components/displayData/Datatable";
import { DataContext } from "../components/database/DatabaseProvider";
export default function PersonsScreen() {
  const data = useContext(DataContext);
  const defaultInputs = [
    { text: "Name", iconName: "person", replacing: "name" },
    { text: "Vorname", iconName: "person", replacing: "firstName" },
    { text: "Straße", iconName: "person", replacing: "street" },
  ];
  const additionalInputs = [
    {
      text: "Mitglied?",
      iconName: "person",
      replacing: "member",
      type: "checkbox",
    },
    { text: "Instrument", iconName: "person", replacing: "instrument" },
  ];
  return (
    <Datatable
      data={data.persons.data}
      title="Personen"
      fabText="Person hinzufügen"
      sort={(a, b) => {
        if (a === b) {
          return 0;
        }
        return a.name < b.name ? -1 : 1;
      }}
      headers={defaultInputs}
      modalData={{
        defaultInputs,
        additionalInputs,
        title: "Person hinzufügen",
        addItem: data.persons.addItem,
      }}
    />
  );
}
