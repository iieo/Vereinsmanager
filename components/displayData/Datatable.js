import React from "react";
import DataFab from "./DataFab";
import { Input, Divider, Row, Column, ScrollView, Heading } from "native-base";
import Person from "../datahandler/Person";
function getCellValue(obj, headerObj) {
  let value = obj.data[headerObj.replacing];
  if (headerObj.type === "selectUser") {
    return Person.getPersonById(value);
  } else {
    return value;
  }
}
export default function Datatable({ data, headers, children, title, sort }) {
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
              {headers.map((headerObj, index2) => (
                <TableCell
                  value={getCellValue(obj, headerObj)}
                  key={headerObj.replacing + index2}
                />
              ))}
            </TableRow>
          ))}
        </ScrollView>
      </ScrollView>
      {children}
    </Column>
  );
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
  return <Input value={value} w="40" variant="unstyled" isReadOnly />;
}
