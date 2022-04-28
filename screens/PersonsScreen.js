import React, { useContext } from "react";
import Datatable from "../components/displayData/Datatable";
import { DataContext } from "../components/datahandler/DatabaseProvider";
import Person from "../components/datahandler/Person";
import DataFab from "../components/displayData/DataFab";
import InputModal from "../components/displayData/InputModal";
export default function PersonsScreen() {
  const data = useContext(DataContext);
  const headerInputs = [
    { text: "Name", iconName: "person", replacing: "name" },
    { text: "Vorname", iconName: "person", replacing: "firstName" },
    { text: "Straße", iconName: "person", replacing: "street" },
    {
      text: "Postleitzahl",
      iconName: "person",
      replacing: "postalCode",
      type: "number",
    },
    {
      text: "Ort",
      iconName: "person",
      replacing: "city",
      type: "text",
    },
    {
      text: "Geburtsdatum",
      iconName: "person",
      replacing: "birthdate",
      type: "date",
    },
    {
      text: "E-Mail",
      iconName: "person",
      replacing: "email",
      type: "email",
    },
    {
      text: "Telefon",
      iconName: "person",
      replacing: "phone",
      type: "tel",
    },
    {
      text: "Handynummer",
      iconName: "person",
      replacing: "mobile",
      type: "tel",
    },
  ];
  const additionalInputs = [
    {
      text: "Mitglied?",
      iconName: "person",
      replacing: "member",
      type: "checkbox",
    },
    {
      text: "Vororchester?",
      iconName: "person",
      replacing: "preorchestra",
      type: "checkbox",
    },
    {
      text: "Orchester?",
      iconName: "person",
      replacing: "orchestra",
      type: "checkbox",
    },
    {
      text: "Kammerorchester?",
      iconName: "person",
      replacing: "chamberOrchestra",
      type: "checkbox",
    },
    { text: "Instrument", iconName: "person", replacing: "instrument" },
    {
      text: "Beitrag",
      iconName: "person",
      replacing: "contribution",
      type: "money",
    },
    {
      text: "Spende",
      iconName: "person",
      replacing: "donation",
      type: "money",
    },
  ];
  const modalData = {
    defaultInputs: headerInputs,
    additionalInputs,
    title: "Person hinzufügen",
    addItem: Person.addItem,
  };
  return (
    <Datatable data={data.persons} title="Personen" headers={headerInputs}>
      <DataFab text="Person hinzufügen">
        <InputModal modalData={modalData} />
      </DataFab>
    </Datatable>
  );
}
