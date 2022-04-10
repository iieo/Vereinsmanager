import React from "react";
import MainSidebar from "./MainSidebar";
import MainNavigator from "./MainNavigator";
import DatabaseProvider from "../components/datahandler/DatabaseProvider";
import { ScrollView, Box } from "native-base";
export default function AuthContainer(props) {
  return (
    <DatabaseProvider>
      <MainSidebar {...props} />

      <Box
        flex={{ base: 1, md: 3 }}
        _dark={{ bg: "muted.800" }}
        _light={{ bg: "light.50" }}
      >
        <ScrollView h="100vh">
          <MainNavigator {...props} />
        </ScrollView>
      </Box>
    </DatabaseProvider>
  );
}
