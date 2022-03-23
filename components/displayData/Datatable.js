import React from "react";
import DataFab from "./DataFab";
import { Input, Divider, Row, Column, ScrollView, Heading } from "native-base";

export default function Datatable({
  data,
  headers,
  fabText,
  modalData,
  title,
  sort,
}) {
  return (
    <Column h="100%">
      <Heading mt="6" size="md">
        {title}
      </Heading>
      <ScrollView horizontal pagingEnabled={true}>
        <ScrollView>
          <TableHeader>
            {headers.map((headerObj, index) => (
              <TableTitle value={headerObj.text} key={index + headerObj.text} />
            ))}
          </TableHeader>

          {data?.sort(sort).map((obj, index) => (
            <TableRow key={index + obj}>
              {headers.map((headerObj, index) => (
                <TableCell
                  value={obj[headerObj.replacing]}
                  key={headerObj.replacing + index}
                />
              ))}
            </TableRow>
          ))}
        </ScrollView>
      </ScrollView>
      {fabText && <DataFab text={fabText} modalData={modalData} />}
    </Column>
  );
}
function getHeaderData(objects) {
  if (!objects) {
    return ["loading"];
  }
  const keys = objects.map((obj) => Object.keys(obj));
  return keys.reduce((acc, currObj) => acc.concat(currObj));
}
function TableRow({ children }) {
  return (
    <Column>
      <Row space="2">{children}</Row>
      <Divider />
    </Column>
  );
}
function TableCell({ value, setValue }) {
  return (
    <Input
      isReadOnly
      value={value}
      w="40"
      variant="unstyled"
      onChangeText={setValue}
    />
  );
}
function TableHeader({ children }) {
  return (
    <Column bg="muted.500">
      <Row space="2">{children}</Row>
      <Divider />
    </Column>
  );
}
function TableTitle({ value }) {
  return <Input value={value} w="40" variant="unstyled" isReadOnly={true} />;
}
