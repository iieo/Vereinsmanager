import React, { useContext } from "react";
import Datatable from "../components/displayData/Datatable";
import { DataContext } from "../components/database/DatabaseProvider";

export default function AccountsScreen() {
  const data = useContext(DataContext);
  const defaultValues = [
    {
      text: "Besitzer",
      iconName: "person",
      replacing: "owner",
      type: "selectUser",
    },
    { text: "IBAN", iconName: "person", replacing: "iban" },
    { text: "BIC", iconName: "person", replacing: "bic" },
  ];
  return (
    <Datatable
      data={data.accounts.data}
      title="Konten"
      fabText="Konto hinzufügen"
      headers={defaultValues}
      modalData={{
        defaultInputs: defaultValues,
        additionalInputs: [],
        title: "Konto hinzufügen",
        addItem: data.accounts.addItem,
      }}
    />
  );
}
