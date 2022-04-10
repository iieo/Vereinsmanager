import React, { useContext } from "react";
import Datatable from "../components/displayData/Datatable";
import { DataContext } from "../components/datahandler/DatabaseProvider";
import Account from "../components/datahandler/Account";
import DataFab from "../components/displayData/DataFab";
import InputModal from "../components/displayData/InputModal";
export default function AccountsScreen() {
  const data = useContext(DataContext);
  const headerInputs = [
    {
      text: "Inhaber",
      iconName: "person",
      replacing: "owner",
      type: "selectUser",
    },
    { text: "IBAN", iconName: "person", replacing: "iban" },
    { text: "BIC", iconName: "person", replacing: "bic" },
    {
      text: "Kreditinstitut",
      iconName: "person",
      replacing: "bank",
      type: "text",
    },
    {
      text: "Unterschrift",
      iconName: "person",
      replacing: "signed",
      type: "date",
    },
  ];
  const modalData = {
    title: "Konto hinzufügen",
    defaultInputs: headerInputs,
    addItem: Account.addItem,
  };
  return (
    <Datatable data={data.accounts} title="Konten" headers={headerInputs}>
      <DataFab text="Konto hinzufügen">
        <InputModal modalData={modalData} />
      </DataFab>
    </Datatable>
  );
}
