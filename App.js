import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial from "./src/telas/TelaInicial";
import RedefinirSenha from "./src/telas/RedefinirSenha";
import Cadastro from "./src/telas/Cadastro";
import Login from "./src/telas/Login";
import TelaPrincipal from "./src/telas/(tabs)/App";
import Geografia from "./src/telas/quiz/Geografia";


export default function App() {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicial} options={{headerShown:false}}/>
        <Stack.Screen name="TelaLogin" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="TelaRedefinirSenha" component={RedefinirSenha} options={{headerShown:true}}/>
        <Stack.Screen name="TelaCadastro" component={Cadastro} options={{headerShown:false}}/>
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} options={{headerShown:false}}/>
        <Stack.Screen name="Geografia" component={Geografia} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )};
