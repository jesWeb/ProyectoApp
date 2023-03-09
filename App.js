
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Tabs } from "./src/navigation/Tabs";
import { MenuDrawer } from "./src/navigation/MenuDrawer";
import { Bottoms } from "./src/MaterialBottoms/Bottoms";
const App = () => {
  return (
    <NavigationContainer>
      <Bottoms/>
    </NavigationContainer>
  );
}

export default App;