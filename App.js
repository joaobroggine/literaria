import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial from "./src/telas/TelaInicial";
import RedefinirSenha from "./src/telas/RedefinirSenha";
import Cadastro from "./src/telas/Cadastro";
import TelaPrincipal from "./src/telas/TelaPrincipal";

export default function App() {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicial} options={{headerShown:false}}/>
        <Stack.Screen name="TelaRedefinirSenha" component={RedefinirSenha} options={{headerShown:true}}/>
        <Stack.Screen name="TelaCadastro" component={Cadastro} options={{headerShown:false}}/>
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} options={{headerShown:true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )};
