import React, { useContext } from "react";
import Datatable from "../components/displayData/Datatable";
import { DataContext } from "../components/datahandler/DatabaseProvider";
import Invoice from "../components/datahandler/Invoice";
import DataFab from "../components/displayData/DataFab";
import InputModal from "../components/displayData/InputModal";
export default function InvoicesScreen() {
  const data = useContext(DataContext);
  const headerInputs = [
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
  const modalData = {
    defaultInputs: headerInputs,
    title: "Rechnung hinzufügen",
    addItem: Invoice.addItem,
  };
  return (
    <Datatable data={data.invoices} title="Rechnungen" headers={headerInputs}>
      <DataFab text="Rechnung hinzufügen">
        <InputModal modalData={modalData} />
      </DataFab>
    </Datatable>
  );
}
