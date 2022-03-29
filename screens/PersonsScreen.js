import React, { useContext } from "react";
import Datatable from "../components/displayData/Datatable";
import { DataContext } from "../components/datahandler/DatabaseProvider";
import Person from "../components/datahandler/Person";
import DataFab from "../components/displayData/DataFab";
import InputModal from "../components/displayData/InputModal";
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
  const modalData = {
    defaultInputs,
    additionalInputs,
    title: "Person hinzufügen",
    addItem: Person.addItem,
  };
  return (
    <Datatable
      data={data.persons}
      sort={Person.sort}
      title="Personen"
      headers={defaultInputs}
    >
      <DataFab text="Person hinzufügen">
        <InputModal modalData={modalData} />
      </DataFab>
    </Datatable>
  );
}
