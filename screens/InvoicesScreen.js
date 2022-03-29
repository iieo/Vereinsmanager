import React, { useContext } from "react";
import Datatable from "../components/displayData/Datatable";
import { DataContext } from "../components/database/DatabaseProvider";

export default function InvoicesScreen() {
  const data = useContext(DataContext);
  const defaultValues = [
    {
      text: "Sender",
      iconName: "person",
      replacing: "sender",
      type: "selectAccount",
    },
    {
      text: "Empfänger",
      iconName: "person",
      replacing: "receiver",
      type: "selectAccount",
    },
  ];
  return (
    <Datatable
      data={data.invoices.data}
      title="Rechnungen"
      fabText="Rechnung hinzufügen"
      headers={defaultValues}
      modalData={{
        defaultInputs: defaultValues,
        additionalInputs: [],
        title: "Rechnung hinzufügen",
        addItem: data.invoices.addItem,
      }}
    />
  );
}
