import React from "react";
import { Column, Heading } from "native-base";
import Datatable from "./Datatable";

export default function Datascreen(props) {
  return (
    <Column h="100%">
      <Heading mt="6" size="md">
        {props.nav}
      </Heading>
      <Datatable {...props} />
    </Column>
  );
}
