import React from "react";
import { Column, Heading } from "native-base";

export default function Dashboard(props) {
  return (
    <Column>
      <Heading mt="6" size="md">
        {props.nav}
      </Heading>
    </Column>
  );
}
