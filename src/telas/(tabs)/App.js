import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TabRouter from "./_layout";


export default function AppTab() {
  return (
    <SafeAreaProvider>
        <TabRouter/>
    </SafeAreaProvider>
  )
}
