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
    {
      text: "Zweck",
      iconName: "person",
      replacing: "use",
      type: "text",
    },
    {
      text: "Kategorie",
      iconName: "person",
      replacing: "category",
      type: "text",
    },
    {
      text: "Bereich",
      iconName: "person",
      replacing: "sector",
      type: "text",
    },
    {
      text: "Menge",
      iconName: "person",
      replacing: "amount",
      type: "text",
    },
    {
      text: "Rechnungsdatum",
      iconName: "person",
      replacing: "invoice",
      type: "time",
    },
    {
      text: "Bezahldatum",
      iconName: "person",
      replacing: "billed",
      type: "time",
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
