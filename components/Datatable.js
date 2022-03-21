import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  Pressable,
  useColorMode,
  Input,
  Divider,
  Row,
  Column,
  Code,
  Box,
  Stack,
  ScrollView,
} from "native-base";
import NativeBaseIcon from "./NativeBaseIcon";
import Icon from "react-native-vector-icons/AntDesign";
export default function Datatable3({ data, changeData }) {
  return (
    <ScrollView horizontal pagingEnabled={true}>
      <ScrollView>
        <TableHeader>
          {data.header.map((value) => (
            <TableTitle value={value}></TableTitle>
          ))}
        </TableHeader>
        {data.items.map((item, itemIndex) => (
          <TableRow>
            {item.map((value, valueIndex) => (
              <TableCell
                value={value}
                setValue={(val) => changeData(itemIndex, valueIndex, val)}
              />
            ))}
          </TableRow>
        ))}
      </ScrollView>
    </ScrollView>
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
    <Input value={value} w="40" variant="unstyled" onChangeText={setValue} />
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

function DataRow({ data, bg, changeData, index, isReadOnly }) {
  return (
    <Box bg={bg} px="3">
      <Row
        divider={<Divider orientation="vertical" />}
        space={10}
        py="3"
        px="10"
      >
        {data.map((item, categoryIndex) => (
          <Input
            isReadOnly={isReadOnly}
            variant="unstyled"
            value={item}
            onChangeText={(text) => {
              changeData(index, categoryIndex, text);
            }}
          />
        ))}
      </Row>
      <Divider />
    </Box>
  );
}
